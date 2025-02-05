import { useTable, usePagination, useGlobalFilter, Column } from "react-table";
import { FiSearch, FiPlus } from 'react-icons/fi';
import Modal from "react-modal";
import { useState } from 'react';

type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
  isTestimonial?: boolean;
  isDokumentasi?: boolean;
};

type TestimonialForm = {
  image: File | null;
  name: string;
  university: string;
  testimonial: string;
};

const Table = <T extends object>({ columns, data, isTestimonial, isDokumentasi }: TableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable<T>(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    usePagination
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [formData, setFormData] = useState<TestimonialForm>({
    image: null,
    name: '',
    university: '',
    testimonial: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
  };

  

  return (
    <div className="p-4">
      {/* Search */}
      <div className="mb-4">
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="border rounded px-4 py-2 w-full md:w-1/3"
        />
        {isTestimonial && (
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlus />
            Tambah Testimonial
          </button>
        )}

        {isDokumentasi && (
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => setIsModalOpen2(true)}
          >
            <FiPlus />
            Tambah Image
          </button>
        )}
        </div>

        {/* form tambah testimoni area */}

        <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="bg-white p-4 md:p-6 rounded-lg w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Tambah Testimoni</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Foto</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({...formData, image: e.target.files?.[0] || null})}
                className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium">Nama</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Universitas</label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({...formData, university: e.target.value})}
                className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Testimonial</label>
              <textarea
                value={formData.testimonial}
                onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
                className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-4 py-2 border rounded text-sm hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* area form dokumentasi */}

      <Modal
        isOpen={isModalOpen2}
        onRequestClose={() => setIsModalOpen2(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="bg-white p-4 md:p-6 rounded-lg w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Tambah Testimoni</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Foto</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({...formData, image: e.target.files?.[0] || null})}
                className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen2(false)}
                className="w-full sm:w-auto px-4 py-2 border rounded text-sm hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </Modal>


      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full border-collapse border border-gray-300"
        >
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex} className="border">
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  key={columnIndex}
                  className="border px-4 py-2 text-left"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} className="border hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id} className="border px-4 py-2 text-sm">
                    <div className="max-w-[600px] overflow-hidden whitespace-pre-line leading-relaxed line-clamp-3 hover:line-clamp-none">
                      {cell.render("Cell")}
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="mt-2 md:mt-0">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="ml-4 border rounded px-2 py-1"
          >
            {[5, 10, 15].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
