import {FC, useMemo} from 'react';
import Table from "./Table";
import {Column} from 'react-table';
import TestimonialTable from './Testimonila';
import { useSearch } from '../../context/SearchContext';

type KonsultasiData = {
  id: number;
  contentType: string;
  content: string;
};

const KonsultasiData: KonsultasiData[] = [
  { 
    id: 1, 
    contentType: "Header Title", 
    content: "Konsultasi Tugas - Tugas Akademik" 
  },
  { 
    id: 2, 
    contentType: "Title Description", 
    content: "Silahkan hubungi kami untuk mendapatkan perbantuan / solusi dalam menangani tugas - tugas akademik seperti tugas harian / mingguan, Tugas UTS / UAS, Tugas Skripsi, Konsultasi Ilmiah (Jurnal / Paper), dan Pembuatan Aplikasi Dukungan Akademik" 
  },
  { 
    id: 3, 
    contentType: "Header Title 2", 
    content: "Apa kata mereka terhadap layanan Konsultasi Akademik Yuk-Mari Project?" 
  },
  { id: 4, 
    contentType: "Title Description 2", 
    content: "Berikut adalah mahasiswa /mahasiswi yang telah bekerjasama dengan kami." 

  },
  { id: 5, 
    contentType: "Title Footer", 
    content: "Kerjasama Menjadi Fasilitator Tugas Akademik" 

  },
  { id: 6, 
    contentType: "Sub Title Footer", 
    content: "Kami sangat antusias jika kami dapat bekerjasama dengan kamu untuk menjadi fasilitator tugas akademik di konsultasi tugas akademik Yuk-Mari Project ini. Kami yakin pengalaman dan pengetahuan kamu akan sangat bermanfaat bagi yang membutuhkan jasa konsultasi akademik. Yuk, gabung dan bantu mereka di konsultasi tugas - tugas Yuk-Mari Project!" 

  },
  { 
    id: 7, 
    contentType: "Number Whatsapp", 
    content: "https://api.whatsapp.com/send/?phone=6282295603115&text=Saya%20ingin%20menjadi%20Fasilitator%20tugas-tugas%20akademik%20di%20Yuk-Mari%20Project%20ini&type=phone_number&app_absent=0"
  },
];

const KonsultasiColumns: Column<KonsultasiData>[] = [
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

const Konsultasi: FC = () => {
  const { searchQuery } = useSearch();

  const filteredData = useMemo(() => {
    return KonsultasiData.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className="content-grid2">
      <div className="card">
        <h2>Konsultasi</h2>
        <Table columns={KonsultasiColumns} data={filteredData} /><br/>
      </div>
      <div className='card'>
        <h2>Testimonial</h2>
        <TestimonialTable/>
      </div>
    </div>
  );
};

export default Konsultasi;