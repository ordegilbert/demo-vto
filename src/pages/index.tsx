import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function OpeningPage() {
  return (
    <div className={`flex min-h-[100dvh] text-sm bg-zinc-50 justify-center ${poppins.className}`}>
      <main className="flex flex-col min-h-[100dvh] w-full max-w-[450px] bg-branddef px-8 py-16 text-black relative">
        <h1 className="text-3xl font-bold text-center mt-12 mb-12" style={{ letterSpacing: '0.05em' }}>
          WELCOME!
        </h1>

        <div className="space-y-6 text-[15px] leading-relaxed flex-1">
          <p>
            Sebelum mulai, izinkan saya untuk menjelaskan sedikit mengenai prototype ini.
          </p>
          <p>
            Prototype ini merupakan rancangan UI/UX fitur <strong>Virtual Try-On</strong> pada aplikasi e-commerce untuk produk lipstik berbasis mobile. Fitur ini memungkinkan pengguna untuk mencoba warna lipstik secara virtual dengan cara mengambil foto tangan dan mengaplikasikan shade lipstik secara digital pada area kulit.
          </p>
          <p>
            Prototype dirancang untuk membantu pengguna dalam menentukan warna lipstik yang sesuai sebelum melakukan pembelian secara online.
          </p>
          <p>
            Silakan eksplorasi setiap halaman dan fitur yang tersedia, sampai dengan halaman check out. Kemudian isi kuesioner berdasarkan pengalaman Anda selama menggunakan prototype yang telah diberikan.
          </p>
          <p>
            Terima kasih atas partisipasi kalian! <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1faf6.svg" alt="🫶" className="w-[1.2em] h-[1.2em] inline-block align-text-bottom" />
          </p>
        </div>

        <div className="w-full flex justify-center pb-8 mt-12">
          <Link href="/product" className="w-3/4 max-w-[280px]">
            <button className="w-full bg-[#EE4D2D] text-white font-medium py-3.5 rounded-lg shadow-md text-lg">
              Start Prototype
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
