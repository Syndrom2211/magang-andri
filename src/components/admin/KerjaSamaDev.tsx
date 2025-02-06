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
    contentType: "Header Title 1",
    content: "Kerjasama Development Application" 
  },
  
  {
    id: 2,
    contentType: "Title Description 1",
    content: "Siap untuk melakukan kerjasama Development Application dengan Kami?"
  },
  { 
    id: 3, 
    contentType: "Number Whatsapp 1",
    content: "https://api.whatsapp.com/send/?phone=6282295603115&text=Permisi..+saya+ingin+bekerjasama+dalam+Develpment+Application+di+Yuk-Mari+Project&type=phone_number&app_absent=0"
  },
  { 
    id: 4, 
    contentType: "Header Title 2",
    content: "Kerjasama Security Application"
  }, 
  { 
    id: 5, 
    contentType: "Title Description 2",
    content: "Siap untuk melakukan kerjasama Security Application dengan Kami?" 
  },
  { 
    id: 6, 
    contentType: "Number Whatsapp 2",
    content: "https://api.whatsapp.com/send/?phone=6282295603115&text=Permisi..+saya+ingin+bekerjasama+dalam+Security+Application+di+Yuk-Mari+Project&type=phone_number&app_absent=0"
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