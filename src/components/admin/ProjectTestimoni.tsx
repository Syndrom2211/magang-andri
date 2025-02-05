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
    content: "Apa kata mereka terhadap layanan Project/Bimbel Yuk-Mari Project?" 
  },
  
  {
    id: 2,
    contentType: "Title Description",
    content: "Berikut adalah orang - orang ternama yang telah bekerjasama dengan kami."
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