import {FC, useMemo} from 'react';
import Table from './Table';
import {Column} from 'react-table';
import { useSearch } from '../../context/SearchContext';

type KontakKamiData = {
  id : number;
  contentType : string;
  content : string;
};

const kontakkami: KontakKamiData[] = [
  {
    id : 1,
    contentType : "Header Title",
    content: "Kontak kami",
  },
  {
    id : 2,
    contentType : "Title Description",
    content: "Pertanyaan, diskusi umum, dan bentuk kerjasama lainnya dapat hubungi kami di laman kontak yang tertera dibawah ini",
  },
  {
    id : 3,
    contentType : "Alamat",
    content: "Komplek Bandung Indah Raya, Blok C13/No.17, Kelurahan Mekarjaya, Kecamatan Rancasari, Kota Bandung, Jawa Barat 40286 .",
  },
  {
    id : 4,
    contentType : "Email",
    content: "yukmari2211@gmail.com ",
  },
  {
    id : 5,
    contentType : "Nomer Telepon",
    content: "+62 822-9560-3115 (via Whatsapp Messenger)",
  },
];

const kontakkamiColumns: Column<KontakKamiData>[] = [
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

const KontakKamiTable: FC = () => {
  const { searchQuery } = useSearch();

  const filteredData = useMemo(() => {
    return kontakkami.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className='content-grid'>
      <div className='card'>
        <h2>Data Kontak</h2>
        <Table columns={kontakkamiColumns} data={filteredData}/>
      </div>
    </div>
  );
};

export default KontakKamiTable;