import {FC, useMemo} from 'react';
import Table from './Table';
import {Column} from 'react-table';
import Dokumentasi from './Dokumentasi';
import { useSearch } from '../../context/SearchContext';

type ProgramLainnyaData = {
  id : number;
  contentType : string;
  content : string;
};

const programlainnya: ProgramLainnyaData[] = [
  {
    id : 1,
    contentType : "Header Title",
    content: "Komunitas Siber",
  },
  {
    id : 2,
    contentType : "Title Description",
    content: "Kegiatan yang dilakukan secara eventual mingguan secara online maupun offline untuk Sharing and Learning seputar Keamanan Siber / Cyber Security yang diberi nama CyberMeetUp",
  },
  {
    id : 3,
    contentType : "Breadcumb Description",
    content: "Sekilas Tentang CyberMeetUp / Komunitas Siber",
  },
  {
    id : 4,
    contentType : "Background",
    content: "Melihat kondisi Indonesia, khususnya di Kota Bandung Jawa Barat, keminatan terhadap dunia siber atau Cyber Security di kalangan siswa / mahasiswa dapat dikatakan belum cukup mumpuni. Artinya, perlu ada improvisasi keilmuan dan keahlian yang dimulai dari memperkenalkan sampai menjadi ahli di bidang Cyber Security. Tergerak dari hal tersebut, Yuk-Mari Project mencoba untuk mewujudkan satu perkumpulan yang dijadikan sebagai tempat Sharing and Learning terkait Dunia Siber di kalangan siswa / mahasiswa. \n" +
              "Bermula dari keinginan yang sama, kami memberikan nama perkumpulannya yaitu CyberMeetUp atau dapat dikatakan Komunitas Siber. CyberMeetUp dimulai sejak bulan September 2024 sampai dengan sekarang yang setidaknya sudah terlaksana di beberapa lingkungan Mahasiswa. Sebagai hasilnya, kurang lebih, Yuk-Mari Project dapat menyalurkan knowledge dan expertise terkait keamanan siber di kalangan Mahasiswa yang awam maupun sudah advance. \n" +
              "Connection dan Communication menjadi salah satu point utama yang Yuk-Mari Project terapkan. Harapan besar, melalui CyberMeetUp ini, SDM yang khususnya di kalangan siswa / mahasiswa dapat mumpuni untuk tergabung dan bersaing di dunia Keamanan Cyber, baik secara nasional maupun internasional."
  },
  {
    id : 5,
    contentType : "Link Tautan",
    content: "https://www.instagram.com/stories/highlights/17958712385815198/",
  },
];

const programLainnyaColumns: Column<ProgramLainnyaData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Content Type",
    accessor: "contentType"
  },
  {
    Header: "Content",
    accessor: "content",
  },
  {
    Header: "Actions",
    Cell: () => (
      <div className='flex gap-2'>
        <button className="text-blue-500 hover:underline">Edit</button>
      </div>
    ),
  },
];

const ProgramLaiannnyaTable: FC = () => {
  const { searchQuery } = useSearch();

  const filteredData = useMemo(() => {
    return programlainnya.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className='content-grid2'>
      <div className='card'>
        <h2>Keamanan Siber</h2>
        <Table columns={programLainnyaColumns} data={filteredData}/>
      </div>
      <div className='card'>
        <h2>Dokumentasi Kegiatan</h2>
        <Dokumentasi/>
      </div>
    </div>
  );
};

export default ProgramLaiannnyaTable;