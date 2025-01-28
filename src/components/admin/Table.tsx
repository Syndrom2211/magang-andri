import { useTable, usePagination, useGlobalFilter, Column } from "react-table";
import { FiSearch } from 'react-icons/fi';

type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
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
        </div>
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
