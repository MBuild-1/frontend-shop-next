import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="bg-[#F8F9FA] sm:mt-12">
      <div className="sm:flex sm:mx-12 sm:py-5 py-5">
        <div className="sm:w-[40%]">
          <div className="flex flex-row pl-5 sm:pl-0">
            <div className="sm:basis-2/6 basis-2/4">
              <p className="font-bold mb-3 text-[#6C757D]">MASTER BAGASI</p>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Tentang Master Bagasi
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Master Bagasi Care
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Peluang Karir
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Syarat Dan Ketentuan
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Kebijakan Privasi
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Blog Master Bagasi
                </p>
              </Link>
            </div>
            <div className="sm:basis-2/6 basis-4/12">
              <p className="font-bold mb-3 text-[#6C757D]">LAYANAN</p>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MB Build
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MB Mart
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MB Pay
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MB Trip
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MB Logistic
                </p>
              </Link>
              <p className="font-bold my-3 text-[#6C757D]">KOMUNITAS</p>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MB Program Afiliasi
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MB Mitra UMKM
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  MBestie
                </p>
              </Link>
            </div>
            <div className="sm:basis-2/6 basis-4/12">
              <p className="font-bold mb-3 text-[#6C757D]">IKUTI KAMI</p>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Facebook
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Instagram
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Tiktok
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  Twitter
                </p>
              </Link>
              <Link href={'#'} passHref>
                <p className="mb-2 text-[#75757D] hover:text-[#FF4200]">
                  LinkedIn
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:w-[60%] bg-[#B3B3B3] mt-4 sm:mt-0">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.006656290643!2d106.83091411744384!3d-6.393141799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebad9add4607%3A0x141eced85d5e6a3!2sMaster%20Bagasi!5e0!3m2!1sid!2sid!4v1675154968578!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="text-center font-semibold p-4 text-[#75757D] bg-[#EBECED]">
        © 2023, PT BHK
      </div>
    </div>
  );
};
