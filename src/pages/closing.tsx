import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ClosingPage() {
  return (
    <div className={`flex min-h-[100dvh] text-sm bg-zinc-50 justify-center ${poppins.className}`}>
      <main className="flex flex-col min-h-[100dvh] w-full max-w-[450px] bg-branddef px-8 py-16 text-black relative items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-8" style={{ letterSpacing: '0.05em' }}>
          Thank You!
        </h1>
        
        <div className="space-y-6 text-[15px] leading-relaxed text-left w-full">
          <p>
            Terima kasih teman-teman karena sudah berpastisipasi untuk melakukan uji coba pada prototype ini <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f495.svg" alt="💕" className="w-[1.2em] h-[1.2em] inline-block align-text-bottom" />
          </p>
          <p>
            Mohon untuk kembali ke <strong>google form</strong> dan mengisi beberapa pertanyaan yang sudah disedikan dengan jujur berdasarkan pengalaman teman-teman selama menjalankan prototype ini.
          </p>
        </div>
      </main>
    </div>
  );
}
