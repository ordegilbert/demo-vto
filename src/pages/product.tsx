"use client";

import Image from "next/image";
import { Chip, Snackbar } from "@mui/material";
import {
  ChevronRight,
  ShareOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Camera, EmptyWalletTime, Heart, Messages2, More, ShieldTick, ShoppingCart, Star1, TruckTime } from "iconsax-reactjs";

const shades: string[] = [
  "12_Pulse_Plain.png", "Cream_Puff_Plain.png", "Mellow_Rose_Plain.png", "Your_Majesty_Plain.png"
]

export default function Home() {
  const [currImage, setCurrImage] = useState<string>(shades[0]);
  const [cartPopupOpen, setCartPopupOpen] = useState(false);

  return (
    <div className={`flex min-h-[100dvh] bg-zinc-50 font-sans text-sm`}>
      <main className="flex min-h-[100dvh] w-full max-w-3xl flex-col items-center bg-white sm:items-start">
        <div className="flex-1 overflow-y-auto pb-[calc(5rem+env(safe-area-inset-bottom))]">
          <div className="relative w-full aspect-[4/5] max-h-[60vh] bg-slate-600 overflow-hidden">
            <Image
              src={`/images/${currImage}`}
              alt=""
              fill
              className="object-cover object-center"
              priority
            />

            <div className="absolute flex flex-col h-full inset-0 justify-between">
              <div className="w-full flex justify-between p-4 mt-4">
                <button className="w-8 h-8 bg-black/40 text-white px-1 py-1 rounded-lg flex justify-center items-center">
                  <ArrowLeft size={16}/>
                </button>

                <div className="flex gap-4">
                  <button className="w-8 h-8 bg-black/40 text-white px-3 py-1 rounded-lg flex justify-center items-center">
                    <ShareOutlined sx={{ fontSize: 16 }} style={{ transform: "rotateY(180deg)" }}/>
                  </button>
                  <Link href="/cart">
                    <button className="w-8 h-8 bg-black/40 text-white px-1 py-1 rounded-lg flex justify-center items-center">
                      <ShoppingCart size={16}/>
                    </button>
                  </Link>
                  <button className="w-8 h-8 bg-black/40 text-white px-1 py-1 rounded-lg flex justify-center items-center">
                    <More size={16}/>
                  </button>
                </div>
              </div>

              <div className="w-full h-16 flex justify-between p-4">
                <button className="bg-branddef text-brandter2 px-3 py-1 rounded-lg w-full">
                  <Link
                    href="/vto"
                    className="w-full flex justify-center items-center gap-2"
                  >
                    <Camera size={18} />{" "}
                    <p>Virtual Try On</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full bg-white p-4">
            <p className="text-sm text-gray-600">4 Shades Available</p>
            <div className="w-full h-12 flex gap-4 mt-2 mb-2">
              {shades.map((i, index) => (
                <div
                  key={index}
                  className="relative h-full w-12 aspect-sblack/30re overflow-hidden bg-slate-700 rounded-xl"
                  onClick={() => setCurrImage(shades[index])}
                >
                  <Image
                    src={`/images/${i}`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="w-full flex justify-between">
              <div className="flex items-end">
                <p className="text-[11px]">Rp</p>
                <p className="text-xl">99.960</p>
                <p className="text-[11px] text-ter line-through">Rp119.000</p>
              </div>

              <div className="flex items-center gap-1">
                <Star1 size={12}/>
                <p className="text-[11px] mr-1">4.9 | 1RB+ Sold</p>
                <Heart size={18}/>
              </div>
            </div>

            <div className="w-full flex text-qua">
              <p className="text-[11px]">Rp33.320 x 3 months with PayLater</p>
              <ChevronRight sx={{ fontSize: 16 }} />
            </div>
            <div className="w-full flex justify-between my-4 pl-2 text-qua">
              <p className="text-sm">Promotions and voucher</p>
              <ChevronRight sx={{ fontSize: 20 }} />
            </div>
            <div className="w-full flex gap-2">
              <Chip
                label={
                  <span>
                    Mall | <strong>ORI</strong>
                  </span>
                }
                size="small"
                sx={{
                  backgroundColor: "var(--color-brandsec)",
                  height: 18,
                  fontSize: 11,
                  borderRadius: "6px",
                  padding: 0
                }}
              />
              <Chip
                label="NEW PRODUCT"
                size="small"
                sx={{
                  backgroundColor: "var(--color-brandsec)",
                  width: 92,
                  height: 18,
                  fontSize: 11,
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="pr-8">
              <p className="text-[16px]">
                Liptint Lip Liner & Gloss Duo - 4gr (Pigmented & Glossy)
              </p>
            </div>

            <div className="w-full flex my-4 justify-between">
              <div className="flex gap-2">
                <TruckTime />
                <div>
                  <p>Guaranteed to get by 10 Oct</p>
                  <p className="text-[11px] text-ter">
                    Get up to Rp10.000 discount voucher if your order arrives
                    late
                  </p>
                </div>
              </div>
              <ChevronRight className="text-ter" />
            </div>

            <div className="w-full flex my-8 justify-between">
              <div className="flex gap-2">
                <ShieldTick />
                <p>Shopping Guarantee | 15 Days Return | 100% Original</p>
              </div>
              <ChevronRight className="text-ter" />
            </div>

            <div className="w-full flex my-4 justify-between">
              <div className="flex gap-2">
                <EmptyWalletTime />
                <p>PayLater: 0% Installment Guaranteed + 500k</p>
              </div>
              <ChevronRight className="text-ter" />
            </div>

            <div
              className="
              fixed bottom-0 left-1/2 -translate-x-1/2
              h-20
              w-full max-w-md
              bg-white
              px-4 py-3
              flex items-start gap-3
              pb-[env(safe-area-inset-bottom)]
            "
            >
              <button className="h-12 px-6 rounded-md bg-branddef">
                <Messages2 className="text-brandter"/>
              </button>

              <button className="h-12 px-6 rounded-md bg-branddef" onClick={() => setCartPopupOpen(true)}>
                <ShoppingCart className="text-brandter"/>
              </button>

              <button className="h-12 flex-1 rounded-md bg-brandter text-white">
                <Link href="/checkout" className="h-full w-full">
                  Buy Now
                </Link>
              </button>
            </div>
            
            <Snackbar
              open={cartPopupOpen}
              autoHideDuration={3000}
              onClose={() => setCartPopupOpen(false)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              sx={{ bottom: { xs: 100, sm: 100 }, width: '100%', px: 2 }}
            >
              <div className="w-full max-w-sm mx-auto">
                <div className="bg-[#FAFAFA] border border-gray-200 px-4 py-4 rounded-[12px] flex items-center gap-3 shadow-sm">
                  <ShoppingCart size={28} className="text-[#EE4D2D]" variant="Outline" />
                  <p className="text-[16px] font-semibold text-gray-600">Berhasil di tambahkan ke keranjang!</p>
                </div>
              </div>
            </Snackbar>
          </div>
        </div>
      </main>
    </div>
  );
}
