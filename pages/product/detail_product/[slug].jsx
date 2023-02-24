// import { Footer, Navbar, RecommendCategory, ViralCategory } from '@/components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import { FreeMode, Navigation, Thumbs } from 'swiper';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { HiPlusCircle, HiMinusCircle, HiPencil } from 'react-icons/hi';
// import {
//   IoAtCircleOutline,
//   IoLocationOutline,
//   IoPricetagOutline,
//   IoChatbubbleEllipses,
// } from 'react-icons/io5';
// import { FaShare, FaRegHeart } from 'react-icons/fa';

// import DefaultImg from '../../../images/default-picture.jpg';
// import QnaIcon from '../../../images/icons/qna.svg';
// import DefaultAvatar from '../../../images/default-avatar.jpg';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// const DetailProduct = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const router = useRouter();
//   const { slug } = router.query;

//   return (
//     <>
//       <Navbar />
//       <div className="container px-6 mt-[5.5rem]">
//         <div className="grid grid-cols-[75%_auto]">
//           <div>
//             <div className="my-3 mx-2">
//               <div className="flex justify-center">
//                 <div className="border shadow-lg w-full">
//                   <ul className="shadow-inner">
//                     <li className="px-3 py-4">
//                       <div className="wrap-breadcrumb">
//                         <ul className="flex">
//                           <li>
//                             <a href="/">Home</a>
//                           </li>
//                           <li>
//                             <span>{slug}</span>
//                           </li>
//                         </ul>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-[30%_auto] p-4">
//               <div className="swiper-image max-h-[400px]">
//                 <Swiper
//                   className="swiperDetail mb-2"
//                   style={{
//                     '--swiper-navigation-color': '#fff',
//                     '--swiper-pagination-color': '#fff',
//                   }}
//                   loop={true}
//                   spaceBetween={5}
//                   navigation={true}
//                   thumbs={{
//                     swiper:
//                       thumbsSwiper && !thumbsSwiper.destroyed
//                         ? thumbsSwiper
//                         : null,
//                   }}
//                   modules={[FreeMode, Navigation, Thumbs]}
//                 >
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//                   </SwiperSlide>
//                 </Swiper>
//                 <Swiper
//                   className="swiperDetail2"
//                   onSwiper={setThumbsSwiper}
//                   loop={true}
//                   spaceBetween={5}
//                   slidesPerView={3}
//                   freeMode={true}
//                   watchSlidesProgress={true}
//                   modules={[FreeMode, Navigation, Thumbs]}
//                 >
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//                   </SwiperSlide>
//                 </Swiper>
//               </div>
//               <div className="pl-6">
//                 <p className="text-2xl font-semibold border-b-2 border-[#ff4200] pb-2">
//                   Product Name
//                 </p>
//                 <div className="min-h-[200px]">
//                   <div
//                     class="inline-flex rounded-md shadow-md my-2"
//                     role="group"
//                   >
//                     <button
//                       type="button"
//                       class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
//                     >
//                       Description
//                     </button>
//                     <button
//                       type="button"
//                       class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
//                     >
//                       Composition
//                     </button>
//                   </div>
//                   <p className="text-justify text-sm pt-1">
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Facilis delectus hic repellendus eligendi qui suscipit
//                     fugiat. Adipisci delectus ab, quos esse voluptas non,
//                     repellat eius possimus nulla id quasi cumque dicta vero eum
//                     enim exercitationem? Aliquam blanditiis, quis ea aspernatur,
//                     laboriosam, tenetur voluptatum dignissimos esse nemo
//                     excepturi corporis. Doloribus cupiditate voluptas incidunt
//                     eos quis consequatur, unde magni deleniti quae. Natus
//                     aperiam iste aliquam sint possimus illo, accusantium iure
//                     sed, repellendus a ullam delectus eum error impedit. Illum
//                     maxime praesentium at nobis molestias ipsa quasi incidunt
//                     rerum, autem voluptatibus voluptatem quas ab dolor sunt
//                     alias iusto odio odit ipsam accusantium. Ratione.
//                   </p>
//                 </div>
//                 <p className="text-2xl font-semibold py-2">Rp 111.100,00</p>
//                 <div className="flex justify-between">
//                   <div className="flex items-center h-12 gap-2">
//                     <IoAtCircleOutline className="text-lg" />
//                     <div className="">
//                       <p className="font-bold">Category</p>
//                       <p>Category Name</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center h-12 gap-2">
//                     <IoPricetagOutline className="text-lg" />
//                     <div className="">
//                       <p className="font-bold">Brand</p>
//                       <p>Brand Name</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center h-12 gap-2">
//                     <IoLocationOutline className="text-lg" />
//                     <div className="">
//                       <p className="font-bold">Province</p>
//                       <p>Province Name</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <table className="table-auto w-full">
//                     <thead>
//                       <tr className="border-b">
//                         <td className="px-6 py-2">Sustension</td>
//                         <td className="py-2">:</td>
//                         <td className="px-6 py-2">Sustension Title</td>
//                       </tr>
//                       <tr className="border-b">
//                         <td className="px-6 py-2">Weight</td>
//                         <td className="py-2">:</td>
//                         <td className="px-6 py-2">1.5 Kg</td>
//                       </tr>
//                       <tr className="border-b">
//                         <td className="px-6 py-2">Certification</td>
//                         <td className="py-2">:</td>
//                         <td className="px-6 py-2">No Certificate.</td>
//                       </tr>
//                     </thead>
//                   </table>
//                 </div>
//                 <div className="my-3">
//                   <form action="">
//                     <label className="font-semibold">Warna :</label>
//                     <div className="grid grid-cols-4 gap-4 my-2 items-center">
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           United States
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           United States
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           United States
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           United States
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           United States
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           United States
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           United States
//                         </label>
//                       </div>
//                     </div>
//                     <label className="font-semibold">Ukuran :</label>
//                     <div className="grid grid-cols-4 gap-4 my-2 items-center">
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           S
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           M
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           L
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           XL
//                         </label>
//                       </div>
//                       <div className="flex">
//                         <input
//                           id="country-option-1"
//                           type="radio"
//                           name="countries"
//                           value="USA"
//                           class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           for="country-option-1"
//                           class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           XXL
//                         </label>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             <div className="product-discussion border-t-2 border-[#0d6efd]">
//               <div className="header py-2">
//                 <p className="font-semibold text-xl">
//                   DISKUSI PRODUK <span className="text-gray-500">(77)</span>
//                 </p>
//               </div>
//               <div className="wrapper flex justify-between items-center border-2 p-4 px-10">
//                 <Image src={QnaIcon} width={50} height={50} />
//                 <div>
//                   <p>Ada Pertanyaan?</p>
//                   <p className="font-bold text-lg">
//                     Diskusi dengan Masta & Bagas atau MBestie lainnya
//                   </p>
//                 </div>
//                 <button className="border rounded bg-[#ff4200] text-white font-bold px-10 py-2 ">
//                   Ikuti Diskusi
//                 </button>
//               </div>
//               <div className="body border my-4">
//                 <div className="flex items-center justify-between p-4">
//                   <div className="flex items-center justify-between">
//                     <Image
//                       src={DefaultAvatar}
//                       width={50}
//                       className="rounded-full"
//                     />
//                     <div className="px-5">
//                       <p className="font-semibold">User 1</p>
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Porro voluptatibus minus alias, voluptate consequatur
//                         debitis voluptatum error ipsa illum, iste qui sit a
//                         facilis fugiat ea incidunt ex, corporis quis!
//                         Voluptatibus, minus asperiores laboriosam soluta commodi
//                         harum ipsam dolor unde quasi nulla atque dicta
//                         consequuntur similique hic omnis obcaecati repellendus?
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-center font-bold">Mengikuti Diskusi</p>
//                 </div>
//                 <div className="reply">
//                   <div className="flex items-center justify-between p-4 px-8">
//                     <div className="flex items-center justify-between">
//                       <Image
//                         src={DefaultAvatar}
//                         width={50}
//                         className="rounded-full"
//                       />
//                       <div className="px-5">
//                         <p className="font-semibold">User 2</p>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipisicing
//                           elit. Esse facilis, expedita laborum deserunt et
//                           soluta explicabo accusamus ab nemo in similique
//                           commodi necessitatibus molestias modi at reprehenderit
//                           earum maxime natus!
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center justify-between p-4 px-8">
//                       <div className="flex items-center justify-between">
//                         <Image
//                           src={DefaultAvatar}
//                           width={50}
//                           className="rounded-full"
//                         />
//                         <div className="px-5">
//                           <input
//                             type="text"
//                             placeholder="Berikan komentarmu..."
//                             className="border-2 p-2 w-full input rounded focus:outline-none"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <form>
//                   <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
//                     <div class="px-4 py-2 bg-gray-50 rounded-t-lg">
//                       <label for="comment" class="sr-only">
//                         Your comment
//                       </label>
//                       <textarea
//                         id="comment"
//                         rows="4"
//                         class="w-full px-0 text-sm text-gray-900 bg-gray-50 border-0 focus:outline-none dark:placeholder-gray-400"
//                         placeholder="Tambahkan Komentarmu..."
//                         required
//                       ></textarea>
//                     </div>
//                     <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
//                       <button
//                         type="submit"
//                         class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#ff4200] rounded-lg"
//                       >
//                         Post comment
//                       </button>
//                       <div class="flex pl-0 space-x-1 sm:pl-2">
//                         <button
//                           type="button"
//                           class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//                         >
//                           <svg
//                             aria-hidden="true"
//                             class="w-5 h-5"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fill-rule="evenodd"
//                               d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
//                               clip-rule="evenodd"
//                             ></path>
//                           </svg>
//                           <span class="sr-only">Attach file</span>
//                         </button>
//                         <button
//                           type="button"
//                           class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//                         >
//                           <svg
//                             aria-hidden="true"
//                             class="w-5 h-5"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fill-rule="evenodd"
//                               d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                               clip-rule="evenodd"
//                             ></path>
//                           </svg>
//                           <span class="sr-only">Set location</span>
//                         </button>
//                         <button
//                           type="button"
//                           class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//                         >
//                           <svg
//                             aria-hidden="true"
//                             class="w-5 h-5"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fill-rule="evenodd"
//                               d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
//                               clip-rule="evenodd"
//                             ></path>
//                           </svg>
//                           <span class="sr-only">Upload image</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="sitebar">
//             <div className="border mx-2 mt-3 px-4 py-2 shadow-md">
//               <p className="font-semibold text-lg mb-4">
//                 Atur Jumlah dan Catatan
//               </p>
//               <div className="flex items-center mb-4 quantity">
//                 <div className="quantity-image">
//                   <Image
//                     className="border"
//                     src={DefaultImg}
//                     width={150}
//                     height={150}
//                     alt="product-image"
//                   />
//                 </div>
//                 <div className="flex items-center justify-center w-full gap-4 quantity-input">
//                   <HiMinusCircle className="text-3xl text-gray-600 hover:text-[#ff4200]" />
//                   <p className="font-semibold">1</p>
//                   <HiPlusCircle className="text-3xl text-gray-600 hover:text-[#ff4200]" />
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 mb-4">
//                 <HiPencil />
//                 <p className="font-semibold">Tambah Catatan</p>
//               </div>
//               <div>
//                 <input
//                   className="border border-black focus:outline-none focus:border-[#ff4200] rounded w-full p-3"
//                   type="text"
//                   placeholder="Contoh: Warna Merah"
//                 />
//               </div>
//               <div className="flex justify-between my-6">
//                 <p className="font-semibold">Subtotal :</p>
//                 <p className="font-semibold">Rp20.000</p>
//               </div>
//               <button
//                 type="button"
//                 className="relative mb-2 text-[#666666] hover:text-black font-bold border-[2px] border-[#DDDDDD] px-4 py-2 text-center w-full btn"
//               >
//                 + Keranjang
//               </button>
//               <button
//                 type="button"
//                 className="relative mb-2 text-[#666666] bg-[#F5F5F5] hover:text-white font-bold border-[2px] border-[#DDDDDD] px-4 py-2 text-center w-full hover:bg-[#FF4200] hover:border-[#FF4200]"
//               >
//                 Beli Langsung
//               </button>
//               <div className="flex justify-around items-center py-3">
//                 <Link href={''} passHref className="flex items-center gap-2">
//                   <IoChatbubbleEllipses className="text-lg" />
//                   Chat
//                 </Link>
//                 <Link href={''} passHref className="flex items-center gap-2">
//                   <FaRegHeart className="text-lg" />
//                   Wishlist
//                 </Link>
//                 <Link href={''} passHref className="flex items-center gap-2">
//                   <FaShare className="text-lg" />
//                   share
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ViralCategory />
//       <RecommendCategory />
//       <Footer />
//     </>
//   );
// };

// export default DetailProduct;

export default function DetailProduct() {
  return <>Cooming Soon</>;
}
