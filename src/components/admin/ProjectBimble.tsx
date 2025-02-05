import {FC, useMemo} from 'react';
import Table from "./Table";
import {Column} from 'react-table';
import ProjectTestimoni from "./ProjectTestimoni";
import ProjectTestiClient from "./ProjectTestiClient";
import KerjaSamaDev from "./KerjaSamaDev";
import LogoDevApp from "./DevelopmentApplicationLogo";
import SecurityMitra from "./SecurityMitraLogo";
import Footer from "./Footer";
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
    content: "Project Program & Bimbingan Belajar" 
  },
  
  {
    id: 2,
    contentType: "Title Description",
    content: "Solusi Teknologi Web Milenial dengan Harga Terjangka"
  },
  { 
    id: 3, 
    contentType: "Header Title 2",
    content: "Keunggulan Kami"
  },
  { 
    id: 4, 
    contentType: "Title Description 2",
    content: "Kami mengutamakan serba terjangkau untuk mengutamakan kepuasan pelanggan. Lihat perbandingan dibawah ini."
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
    <div className="content-grid2">
      <div className="card">
        <h2>Project</h2>
        <Table columns={aboutUsColumns} data={filteredData} />
      </div>
      <div className="card">
        <h2>Testimonial</h2>
        <ProjectTestimoni/>
      </div>
      <div className="card">
        <h2>Testimonial Client</h2>
        <ProjectTestiClient/>
      </div>
      <div className="card">
        <h2>Kerja Sama Development Application</h2>
        <KerjaSamaDev/>
      </div>
      <div className="card">
        <h2>Testimonial Development APP</h2>
        <LogoDevApp/>
      </div>
      <div className="card">
        <h2>Testimonial Security APP</h2>
        <SecurityMitra/>
      </div>
      <div className="card">
        <h2>Footer</h2>
        <Footer/>
      </div>
    </div>
  );
};

export default AboutUsTable;