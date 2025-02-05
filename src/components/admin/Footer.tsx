import {FC, useMemo} from 'react';
import Table from "./Table";
import {Column} from 'react-table';
import { useSearch } from '../../context/SearchContext';

type AboutUsData = {
  id: number;
  contentType: string;
  content: string;
};

const aboutUsData: AboutUsData[] = [
  { 
    id: 1, 
    contentType: "Header Title",
    content: "ANDA MAHASISWA? ATAU ALUMNI? INGIN MENJADI BAGIAN DARI KAMI?" 
  },
  
  {
    id: 2,
    contentType: "Title Description",
    content: "Tambah pengalaman menarik anda dan jadikan ini sebagai penghasilan sampingan anda!"
  },
  { 
    id: 3, 
    contentType: "Number Whatsapp",
    content: "https://api.whatsapp.com/send/?phone=6282295603115&text=Izin%20Bergabung%20kedalam%20Tim%20Project/Bimbel&type=phone_number&app_absent=0"
  },

];

const aboutUsColumns: Column<AboutUsData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Content Type",
    accessor: "contentType",
  },
  {
    Header: "Content",
    accessor: "content",
  },
  {
    Header: "Actions",
    Cell: () => (
      <div className="flex gap-2">
        <button className="text-blue-500 hover:underline">Edit</button>
      </div>
    ),
  },
];

const AboutUsTable: FC = () => {
  const { searchQuery } = useSearch();

  const filteredData = useMemo(() => {
    return aboutUsData.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <>
        <Table columns={aboutUsColumns} data={filteredData} />
    </>
  );
};

export default AboutUsTable;