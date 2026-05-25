import {
  Add,
  ArrowBack,
  ChevronRight,
  ConfirmationNumberOutlined,
  ExpandMore,
  LocalShippingOutlined,
  Remove,
} from "@mui/icons-material";
import { Checkbox, Chip } from "@mui/material";
import { ArrowLeft, Ticket, TruckTime } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";

interface CartType {
  storeName: string;
  products: {
    productName: string;
    variant: Shade;
  }[];
}

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

const Cart: CartType[] = [
  {
    storeName: "Cupa Cosmetic",
    products: [
      {
        productName: "Lip Stain Tint - 4gr (Pigmented & Transfer Resistant)",
        variant: shades[0],
      },
      {
        productName: "Lip Stain Tint - 4gr (Pigmented & Transfer Resistant)",
        variant: shades[1],
      },
    ],
  },
  {
    storeName: "Fu Fu Shop",
    products: [
      {
        productName: "Wedding Ring Tears of Themis Vyn Richter Marius Von Hagen",
        variant: {
          name: "VYN",
          imgUrl: "vyn.png",
          color: "",
        },
      },
    ],
  },
  {
    storeName: "Stellis Fashion",
    products: [
      {
        productName: "Stellis Fashion - Fake Collar",
        variant: {
          name: "Black",
          imgUrl: "collar.png",
          color: "",
        },
      },
      {
        productName: "Stellis Fashion - Fake Collar",
        variant: {
          name: "White",
          imgUrl: "collar.png",
          color: "",
        },
      },
    ],
  }
];

export default function CartPage() {
  return (
    <div className="min-h-[100dvh] bg-white pb-28 p-6 text-sm">
      <div className="h-12 flex justify-between mt-6">
        <div className="flex h-full gap-1">
          <Link href="/product" className="mt-1">
            <ArrowLeft />
          </Link>
          <p className="text-xl font-medium ml-2">Shopping Cart</p>{" "}
          <p className="text-[16px] mt-1">(99)</p>
        </div>
        <div className="flex h-full gap-2 text-[16px]">
          <p>Edit</p>
        </div>
      </div>

      <div className="w-full text-sm">
        {Cart.map((i, index) => (
          <div key={index} className="bg-gray-50 mb-4 rounded-lg p-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Checkbox sx={{ '&.Mui-checked': { color: '#EE4D2D' } }} />
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
                <p className="text-sm ml-2 font-medium">{i.storeName}</p>
                <ChevronRight className="text-sec" />
              </div>

              <button className="w-14 h-7 mr-2 bg-def/50 rounded-lg text-[13px]">Edit</button>
            </div>

            {i.products.map((p, index) => (
              <div key={index} className="flex justify-between mb-4">
                <div className="flex items-center flex-1 min-w-0">
                  <Checkbox sx={{ '&.Mui-checked': { color: '#EE4D2D' } }} />

                  <div className="relative h-22 w-22 shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={`/images/${p.variant.imgUrl}` || "/images/5ip6cf.png"}
                      alt=""
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  <div className="ml-2 flex-1 min-w-0">
                    <p className="text-xs truncate">{p.productName}</p>
                    <div className="flex justify-between">
                      <div className="w-35.5 flex bg-def/50 rounded-md py-1 px-4 my-2 items-center justify-between">
                        <p className="text-xs mr-4">{p.variant.name}</p>{" "}
                        <ExpandMore className="text-qua" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Remove className="text-qua" sx={{ fontSize: 14 }} />
                        <div className="h-10 w-6 bg-def/50 flex items-center justify-center rounded-lg">
                          1
                        </div>
                        <Add className="text-qua" sx={{ fontSize: 14 }} />
                      </div>
                    </div>
                    <span className="flex items-end">
                      <p className="text-[11px] text-qua mb-0.5">Rp</p>
                      <p className="text-[14px]">99.690</p>
                    </span>
                  </div>
                </div>


              </div>
            ))}
            <div className="w-full border-t-2 border-def/50 p-2 text-[12px]">
              <div className="w-full flex items-center gap-2 mt-2 justify-between">
                <div className="flex items-center gap-2">
                  <Ticket size={18} color="#D94629" />
                  <p>Up to Rp5k off voucher available</p>
                </div>
                <ChevronRight className="text-ter" />
              </div>
              <div className="w-full flex items-center gap-2 mt-4 justify-between">
                <div className="flex gap-2">
                  <TruckTime size={28} color="#129E54" />
                  <p>
                    Up to Rp21.000 off shipping with min order of Rp0; Up to
                    Rp501.000 off shippping
                  </p>
                </div>
                <ChevronRight className="text-ter" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="
          fixed bottom-0 left-1/2 -translate-x-1/2 z-50
          h-24
          w-full max-w-[450px]
          bg-white
          py-3
          pb-[env(safe-area-inset-bottom)]
          border-t
          border-def
          items-start
        "
      >
        <div className="w-full flex items-center justify-between mx-2">
          <div className="flex items-center gap-2">
            <Ticket /> <p>Vouchers</p>
          </div>
          <div className="flex text-ter gap-2">
            <p>Select or enter code</p> <ChevronRight />
          </div>
        </div>

        <div className="w-full flex items-center justify-between mt-2">
          <div className="flex items-center">
            <Checkbox sx={{ '&.Mui-checked': { color: '#EE4D2D' } }} /> <p>All</p>
          </div>
          <div className="flex gap-2">
            <p className="text-qua">Rp 0</p>
            <div className="flex bg-brandter2 rounded-md py-2 px-4">
              <Link href="/checkout">
                <p className="text-branddef">Check Out (0)</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
