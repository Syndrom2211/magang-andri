import {FC, useMemo} from 'react';
import image1 from '../../assets/LogoMitraSecurity/partner-16.png';
import image2 from '../../assets/LogoMitraSecurity/partner-17.png';
import image3 from '../../assets/LogoMitraSecurity/partner-24.png';
import image4 from '../../assets/LogoMitraSecurity/partner-18.png';
import image5 from '../../assets/LogoMitraSecurity/partner-19.png';
import image6 from '../../assets/LogoMitraSecurity/partner-20.png';
import image7 from '../../assets/LogoMitraSecurity/partner-21.png';
import image8 from '../../assets/LogoMitraSecurity/partner-23.png';
import Table from './Table';
import {Column} from 'react-table';
import { useState } from 'react';
import { useSearch } from '../../context/SearchContext';


type DokumentasiData = {
  id : number;
  image: string;
};

const dokumentasiData: DokumentasiData[] = [
  {
    id : 1,
    image: image1 ,
  },
  {
    id : 2,
    image: image2 ,
  },
  {
    id : 3,
    image: image3 ,
  },
  {
    id : 4,
    image: image4,
  },
  {
    id : 5,
    image: image5,
  },
  {
    id : 6,
    image: image6,
  },
  {
    id : 7,
    image: image7,
  },
  {
    id : 8,
    image: image8,
  },
];

const dokumetasiColumns: Column<DokumentasiData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: ({ value }) => {
      const [showModal, setShowModal] = useState(false);

      return (
        <>
          <div className="relative w-16 h-16" onClick={() => setShowModal(true)}>
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={value}
                alt="Testimonial"
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 rounded-full hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <span className="text-white text-xs text-center px-1">View Image</span>
              </div>
            </div>
          </div>
          
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
              <div className="relative">
                <img
                  src={value}
                  alt="Testimonial Large"
                  className="w-[400px] max-h-[80vh] object-contain"
                />
                <button
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8"
                  onClick={() => setShowModal(false)}
                >
                x
                </button>
              </div>
            </div>
          )}
        </>
      );
    },
  },
  {
    Header: "Actions",
    Cell: () => (
      <div className='flex gap-2'>
        <button className="text-blue-500 hover:underline">Edit</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </div>
    ),
  },
];

const DokumentasiTable: FC = () => {
  const { searchQuery } = useSearch();

  const filteredData = useMemo(() => {
    return dokumentasiData.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <>
      <Table columns={dokumetasiColumns} data={filteredData} isDokumentasi={true} />
    </>
  );
};

export default DokumentasiTable;