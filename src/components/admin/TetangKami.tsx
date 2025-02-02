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
    content: "Tentang Kami" 
  },
  
  {
    id: 2,
    contentType: "Bredcrumb Description",
    content: "Sekilas Tetang Kami"
  },
  { 
    id: 3, 
    contentType: "Background",
    content: 
      "Yuk-Mari Project atau disingkat YMP merupakan media perkumpulan yang dirintis oleh Mahasiswa Kota Bandung, meliputi Kampus ternama seperti ITB, UIN SGD, UPI, UNPAD, yang bertujuan untuk membantu masyarakat maupun pelajar (siswa / mahasiswa) dalam meningkatkan kualitas dan kapasitas, baik itu karya maupun pengalaman, teknologi maupun non-teknologi, melalui program yang disediakan oleh Yuk-Mari Project. Adapun program yang dimaksud adalah Virtual Classroom, Komunitas Siber, Konsultan Akademik, Magang / Internship, Bimbingan Belajar Online, Bimbingan Belajar Offline, Product Yuk-Mari Project, dan Project Program (DevApp / DevSec). \n" +
      "Kami berdomisili di Kota Bandung, Jawa Barat, Indonesia. Perjalanan membentuk Yuk-Mari Project dimulai dari konsep awal, yaitu Yuk-Mari Kuliner (2020 - 2022), kemudian berubah menjadi Yuk-Mari Indonesia (2022 - 2023), dan yang terakhir berubah menjadi Yuk-Mari Project Indonesia (2023 - sekarang). Tahun 2024, Yuk-Mari Project dilindungi oleh legalisasi hukum dengan nomor : AHU-055747.AH.01.30.Tahun 2024 dan PSE Kominfo : 015659.01/DJAI.PSE/09/2024 \n" +
      "Secara motif, Kami tergabung dilatarbelakangi oleh keinginan / prinsip yang sama dan kuat untuk selalu mengembangkan diri menjadi pribadi yang handal, kompeten, serta disiplin terhadap program - program yang ada di Yuk-Mari Project ini. Jangan ragu dan sungkan untuk membangun relasi, kerjasama, dan mengenal lebih dalam tentang kami."
  },
  { 
    id: 4, 
    contentType: "Vision & Mission",
    content: 
      "1. Berkomitmen memberikan layanan berkualitas untuk setiap ruang lingkup kami, skala makro atau mikro, yang layak mendapatkan layanan kami secara profesional dengan harga terjangkau. \n" +
      "2. Berkomitmen mengikuti perkembangan teknologi terbaru, terdepan, dan terpercaya sebagai keunggulan dalam layanan kami.\n" +
      "3. Berkomitmen memupuk hubungan jangka panjang dengan klien kami dan menjadi mitra yang dapat diandalkan dalam situasi dan kondisi apapun.\n" +
      "4. Memfasilitasi pelajar, mahasiswa, dan instansi pendidikan lainnya terhadap kepentingan yang mereka butuhkan, yang bersinergis dengan program - program yang ada di Yuk-Mari Project.",
  }, 
  { 
    id: 5, 
    contentType: "Title Description",
    content: "Latar Belakang - Visi & Misi" 
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
    <div className="content-grid">
      <div className="card">
        <h2>Tentang Kami</h2>
        <Table columns={aboutUsColumns} data={filteredData} />
      </div>
    </div>
  );
};

export default AboutUsTable;