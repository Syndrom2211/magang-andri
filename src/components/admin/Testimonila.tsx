import Table from "./Table";
import image1 from "../../assets/KonsulClient/K4.jpg"
import image2 from "../../assets/KonsulClient/K5.jpg"
import image3 from "../../assets/KonsulClient/K8.jpg"
import image4 from "../../assets/KonsulClient/K1.jpg"
import image5 from "../../assets/KonsulClient/K2.jpg"
import image6 from "../../assets/KonsulClient/K3.jpg"
import image7 from "../../assets/KonsulClient/K0.jpg"
import image8 from "../../assets/KonsulClient/K6.jpg"
import image9 from "../../assets/KonsulClient/K7.jpg"
import {Column} from 'react-table';
import { useState } from 'react';


type TestimonialData = {
  id: number;
  image: string;
  name: string;
  university: string;
  testimonial: string;
};

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    image: image2, 
    name: "Teh Sofi", 
    university: "Tugas Skripsi S1 Sistem Informasi - UNIKOM",
    testimonial: "Tetap semangat YMP, maju terus dengan karya - karyanya. Terimakasih sudah bantu SMAN 5 Cimahi untuk web quis nya." 
  },
  {
    id: 2, 
    image: image3, 
    name: "Kang Erwin Guna Setiawan", 
    university: "Tugas Skripsi S1 Teknik Komputer - UNIKOM",
    testimonial: "Terimakasih atas bantuannya untuk melengkapi projek saya di laboratorium, sekaligus menambahkan kekurangan dalam skripsi saya." 
  },
  {
    id: 3, 
    image: image1 , 
    name: "Fali Falyaoma", 
    university: "Tugas Skripsi S1 Teknik Informatika - UNIKOM",
    testimonial: " Melalui konsep data mining, website saya bisa mudah digunakan berkat YM Project. Terimakasih YMP." 
  },
  {
    id: 4, 
    image: image4 , 
    name: "Ali", 
    university: "Tugas Skripsi S1 Teknik Informatika - UNIKOM",
    testimonial: "Syukur bisa lulus di tahun 2019, terimakasih Yuk Mari Project sudah mendampingi sampai bisa lulus" 
  },
  {
    id: 5, 
    image: image5 , 
    name: "Kang Aswil", 
    university: "Tugas Skripsi S1 Teknik Informatika - UNIKOM",
    testimonial: "Awalnya ga nyangka dan mau nyerah buat skripsi Machine Learning, tapi dengan bantuan Yuk Mari Project, semua lancar" 
  },
  {
    id: 6, 
    image: image6 , 
    name: "Rharaaa", 
    university: "Tugas Kuliah S1 Manajemen - UNIKOM",
    testimonial: "Tugas mata kuliah Kewirausahaan bikin bete, soalnya buat website, tapi bisa nemu Yuk Mari Project. Makasih Ya." 
  },
  {
    id: 7, 
    image: image7 , 
    name: "Elisa", 
    university: "Tugas Skripsi S1 PGSD - UPI Bumi Siliwangi",
    testimonial: "Ga nyangka banget bisa lulus dan wisuda juga sesuai harapan. Padahal gak ngerti banget tentang Aplikasi Web dan Android. Btw makasih ya YMP." 
  },
  {
    id: 8, 
    image: image8 , 
    name: "Aca", 
    university: "Tugas Akhir D3 Kebidanan - Poltekes TNI AU Cimbuleuit",
    testimonial: "Makasih YMP udah bantuin Aca buat tugas bimbingan sama dosen nya (jurnal). Huft.. lumayan juga hehe" 
  },
  {
    id: 9, 
    image: image9 , 
    name: "Alfa", 
    university: "Tugas UAS S1 Ilmu Komputer - UBP Karawang Ilmu Komputer",
    testimonial: "Sumnpah ga ngerti banget n**r ngoding android. Tapi dengan arahan dan bantuan Yuk Mari Project, beres juga." 
  },
];

const testimonialColumns: Column<TestimonialData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: ({ value }) => {
      const [showModal, setShowModal] = useState(false);

      return (
        <>
          <div className="relative group" onClick={() => setShowModal(true)}>
            <img
              src={value}
              alt="Testimonial"
              className="w-16 h-16 object-cover rounded-full cursor-pointer"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="text-white text-xs text-center px-1">View Image</span>
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
    Header: "University",
    accessor: "university"
  },
  {
    Header: "Testimonial",
    accessor: "testimonial",
  },
  {
    Header: "Actions",
    Cell: () => (
      <div className="flex gap-2">
        <button className="text-blue-500 hover:underline">Edit</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </div>
    ),
  },
];

const TestimonialTable = () => {
  return (
    <>
      <Table columns={testimonialColumns} data={testimonialData} isTestimonial={true} />
    </>
  )
};

export default TestimonialTable;
