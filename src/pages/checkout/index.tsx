import {
  Add,
  ArrowBack,
  ChevronRight,
  ConfirmationNumberOutlined,
  ExpandMore,
  LocalShipping,
  LocationOn,
  Remove,
} from "@mui/icons-material";
import Image from "next/image";
import { Checkbox, Chip } from "@mui/material";
import Link from "next/link";
import { ArrowLeft, Ticket, TruckFast, TruckTime } from "iconsax-reactjs";

interface Shade {
  name: string;
  imgUrl: string;
  color: string;
}

const shades: Shade[] = [
  { name: "12 Pulse", imgUrl: "12_Pulse_Plain.png", color: "#BE786E" },
  { name: "Cream Puff", imgUrl: "Cream_Puff_Plain.png", color: "#AF4665" },
  { name: "Mellow Rose", imgUrl: "Mellow_Rose_Plain.png", color: "#E25450" },
  { name: "Your Majesty", imgUrl: "Your_Majesty_Plain.png", color: "#B54944" },
];

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white pb-28 p-4 text-sm">
      <div className="h-12 flex justify-between items-center text-center mt-6">
        <div className="flex h-full gap-4">
          <Link href="/product" className="mt-1">
            <ArrowLeft />
          </Link>
          <p className="text-xl font-medium">Checkout</p>{" "}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <LocationOn />
            <div>
              <div className="flex gap-2 items-end mb-1">
                <p className="font-medium">Jennifer Arlene</p>{" "}
                <p className="text-[11px] text-qua mb-0.5">
                  (+62) 123-4567-890
                </p>
              </div>
              <p className="text-xs text-qua">
                Perumahan Tatakan Puri, Jalan Raya Curug, Kadu, Curug (Blok C2
                No. 21)
              </p>
              <p className="text-xs text-qua">
                CURUG, KAB. TANGERANG, BANTEN, ID 15810
              </p>
            </div>
          </div>
          <ChevronRight className="ml-16 text-qua" />
        </div>

        <div className="flex mt-12">
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
              padding: 0,
            }}
          />
          <p className="ml-2 font-medium">Toko Kosmetik Import B</p>
        </div>

        <div className="flex justify-between my-4">
          <div className="flex w-full min-w-0">
            <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={`/images/${shades[0].imgUrl}`}
                alt=""
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="ml-2 flex-1 min-w-0">
              <p className="truncate">Lip Stain Tint - 4gr (Pigmented & Transfer Resistant)</p>
              <p className="text-sm text-qua">{shades[0].name}</p>{" "}
              <div className="flex justify-between mt-8">
                <span className="flex items-end">
                  <p className="text-md text-qua mb-0.5">Rp</p>
                  <p className="text-lg">99.690</p>
                  <p className="text-[11px] text-ter line-through ml-1 mb-0.5">
                    Rp119.000
                  </p>
                </span>
                <p className="text-qua">x1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start pl-2 pr-8 pb-8 border-b-2 border-def text-xs">
          <Checkbox sx={{ '&.Mui-checked': { color: '#EE4D2D' } }} />
          <div>
            <div className="flex justify-between my-2">
              <p className="font-semibold">Product Assistance Protection</p>
              <p>Rp3.000 x1</p>
            </div>
            <p className="text-xs/4 text-gray-600">
              Protecting you against harm, inconvenience, or impatient care
              arising from the usage or consumption of the product.
              <span className="ml-1 text-blue-500 cursor-pointer">
                Learn more
              </span>
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between my-2 items-center">
            <p className="font-medium">Shop Voucher</p>
            <div className="flex items-center gap-2">
              <div className="border border-[#EE4D2D] rounded flex items-center justify-center px-1.5 py-0.5">
                <p className="text-[#EE4D2D] text-[11px]">-Rp2k</p>
              </div>
              <ChevronRight className="text-gray-300" sx={{ fontSize: 20 }} />
            </div>
          </div>

          <div className="flex justify-between my-2 items-center">
            <p className="font-medium">Message</p>
            <div className="flex items-center">
              <p className="text-gray-400">Please leave a message</p>{" "}
              <ChevronRight className="text-gray-300 ml-2" sx={{ fontSize: 20 }} />
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-t border-gray-100 my-2">
            <p className="font-medium">Shipping Option</p>
            <div className="flex items-center text-gray-500">
              <p className="text-sm">View All</p> <ChevronRight className="text-gray-300 ml-2" sx={{ fontSize: 20 }} />
            </div>
          </div>

          <div className="p-4 border border-[#129E54] bg-[#F0F8F1] rounded-xl text-xs">
            <div className="flex justify-between mb-3">
              <p className="font-medium text-sm">Reguler</p>
              <div className="flex gap-2">
                <p className="text-gray-400 line-through">Rp15.000</p>
                <p className="font-medium text-sm">Rp0</p>
              </div>
            </div>
            <div className="flex gap-1.5 mb-1.5 items-center text-[#129E54]">
              <TruckFast variant="Bold" size={16} /> <p className="font-medium text-[13px]">Guaranteed to get by 14 - 16 Oct</p>
            </div>
            <p className="text-gray-500 mb-5 text-[12px] leading-relaxed">
              Get up to Rp10.000 voucher if your order doesn't arrive<br/>by 16 Oct 2025.
            </p>
            <div className="flex justify-between items-center pt-1">
              <div className="flex gap-1 items-center text-[12px]">
                <p className="font-medium">Guaranteed to get by Tomorrow</p>{" "}
                <p className="text-gray-500">with Next Day</p>
              </div>
              <ChevronRight className="text-gray-400" sx={{ fontSize: 18 }} />
            </div>
          </div>

          <div className="flex justify-between my-2 mt-8 items-center">
            <p className="font-medium">Total 1 Item(s)</p>
            <p className="font-medium">Rp199.920</p>
          </div>

          <div className="flex justify-between mt-12 mb-4">
            <div className="flex gap-2 items-center">
              <Ticket className="text-[#EE4D2D]" size={24} variant="Outline" />{" "}
              <p className="font-medium text-[15px]">Vouchers</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="border border-[#EE4D2D] rounded flex items-center justify-center px-1.5 py-0.5">
                <p className="text-[#EE4D2D] text-[11px]">-Rp2k</p>
              </div>
              <div className="border border-[#129E54] rounded flex items-center justify-center px-1.5 py-0.5">
                <p className="text-[#129E54] text-[11px]">Free Shipping</p>
              </div>
              <ChevronRight className="text-gray-300" sx={{ fontSize: 20 }} />
            </div>
          </div>
        </div>

        <div
          className="
          fixed bottom-0 left-1/2 -translate-x-1/2
          w-full max-w-105
          bg-white
          pb-[env(safe-area-inset-bottom)]
          border-t
          border-gray-200
        "
        >
          <div className="w-full flex items-center justify-end">
            <div className="flex items-center gap-4 py-2.5 pr-4">
              <div className="text-right">
                <div className="flex gap-1.5 items-end justify-end">
                  <p className="text-sm font-medium mb-[1px]">Total</p>
                  <p className="text-[#EE4D2D] font-medium text-[17px] leading-none">Rp199.920</p>
                </div>
                <div className="flex gap-1 items-center justify-end mt-1">
                  <p className="text-[12px] text-gray-500">Saved</p>
                  <p className="text-[12px] text-[#EE4D2D]">Rp30.000</p>
                </div>
              </div>
              <Link href="/closing">
                <div className="flex bg-[#EE4D2D] rounded-lg py-2.5 px-5 cursor-pointer shadow-sm">
                  <p className="text-white font-medium text-[15px]">Place Order</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
