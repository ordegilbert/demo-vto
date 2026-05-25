"use client";

import Image from "next/image";
import { CameraOverlaySvg } from "@/svgs/CameraOverlay";
import {
  ArrowBack,
  ShoppingCartOutlined,
  CameraAltOutlined,
  ShoppingBagOutlined,
  FavoriteBorder,
  Undo,
  Loop,
  Close,
} from "@mui/icons-material";
import { Chip, Snackbar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  Back,
  Camera,
  Heart,
  Refresh,
  ShoppingBag,
  ShoppingCart,
  TickCircle,
} from "iconsax-reactjs";

interface Shade {
  name: string;
  color: string;
  label: string;
}

const shades: Shade[] = [
  { name: "12_Pulse_Plain.png", color: "#BE786E", label: "12 Pulse" },
  { name: "Cream_Puff_Plain.png", color: "#AF4665", label: "Cream Puff" },
  { name: "Mellow_Rose_Plain.png", color: "#E25450", label: "Mellow Rose" },
  { name: "Your_Majesty_Plain.png", color: "#B54944", label: "Your Majesty" },
];

function CameraOverlay({ onCapture }: { onCapture: (src: string) => void }) {
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => onCapture(reader.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col text-xs">
      <div className="h-24 flex items-center justify-center text-black text-lg">
        <div className="w-82 mt-16 py-2 px-4 bg-ter text-center text-base/5 rounded-full">
          <p className="mx-8">
            Tampilkan kulitmu, temukan shade terbaik untukmu!
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <CameraOverlaySvg className="w-3/4 max-w-[300px] h-auto text-sec" />
      </div>

      <div className="p-6 flex justify-center">
        <div className="w-20 h-20 mb-6 rounded-full flex justify-center items-center border-2 border-sec">
          <label className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
            <input
              type="file"
              accept="image/*"
              capture="user"
              className="hidden"
              onChange={handleFile}
            />
            <div className="w-12 h-12 rounded-full bg-ter" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default function TryOnPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const historyRef = useRef<ImageData[]>([]);
  const isDrawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  const [mode, setMode] = useState<"camera" | "tryon">("camera");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedShade, setSelectedShade] = useState<Shade>(shades[0]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [cartPopupOpen, setCartPopupOpen] = useState(false);

  function handleCapture(src: string) {
    setImageSrc(src);
    setMode("tryon");
  }

  function syncCanvas() {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const rect = img.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }

  function startDraw(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    historyRef.current.push(
      ctx.getImageData(0, 0, canvas.width, canvas.height),
    );

    const rect = canvas.getBoundingClientRect();
    isDrawing.current = true;
    lastPoint.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) { }
  }

  function endDraw(e: React.PointerEvent<HTMLCanvasElement>) {
    isDrawing.current = false;
    lastPoint.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) { }
  }

  function draw(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing.current || !lastPoint.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.strokeStyle = selectedShade.color;
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastPoint.current = { x, y };
  }

  function undo() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const lastState = historyRef.current.pop();
    if (!lastState) return;

    ctx.putImageData(lastState, 0, 0);
  }

  function openClearDialog() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  function confirmClearCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    historyRef.current = [];
    setDialogOpen(false);
  }

  return (
    <>
      <div className="min-h-[100dvh] bg-white pb-28">
        {mode === "camera" && <CameraOverlay onCapture={handleCapture} />}

        {mode === "tryon" && (
          <div className="flex-1 overflow-y-auto pb-[calc(5rem+env(safe-area-inset-bottom))]">
            <div className="bg-white w-full px-4">
              <button className="mt-12 mb-2 flex items-center text-black text-center">
                <Link href="/product">
                  <ArrowLeft />
                </Link>
                <p className="ml-2 text-xl font-semibold">Virtual Try-On</p>
              </button>
            </div>
            <div className="relative w-full aspect-[3/4] max-h-[60vh] bg-slate-600 overflow-hidden">
              <img
                ref={imgRef}
                src={imageSrc!}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                onLoad={syncCanvas}
              />

              <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 pointer-events-auto touch-none"
                onPointerDown={startDraw}
                onPointerMove={draw}
                onPointerUp={endDraw}
                onPointerLeave={endDraw}
                onPointerCancel={endDraw}
              />

              <div className="absolute flex flex-col h-full inset-0 z-20 pointer-events-none justify-between ">
                <div className="w-full flex justify-between p-4 pointer-events-auto"></div>

                <div className="w-full flex justify-between p-4 gap-2 pointer-events-auto text-black">
                  <button
                    className="bg-branddef text-brandter2 flex items-center justify-center gap-2 flex-1 px-3 py-2 rounded w-full cursor-pointer"
                    onClick={() => {
                      setImageSrc(null);
                      setMode("camera");
                    }}
                  >
                    <Camera size={16} />{" "}
                    <p className="text-[14px]">Retake Photo</p>
                  </button>
                  <button
                    className="min-w-12 flex items-center justify-center px-1 py-1 rounded bg-white text-black"
                    onClick={undo}
                  >
                    <Back size={16} />
                  </button>
                  <button
                    className="min-w-12 flex items-center justify-center px-1 py-1 rounded bg-white text-black"
                    onClick={openClearDialog}
                  >
                    <Refresh size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-lg p-4 flex items-center justify-center text-center mt-0.5">
              <p className="text-gray-800 text-sm">
                Waktunya bereksperimen! Pilih warna yang kamu suka, lalu swipe
                di foto kamu!
              </p>
            </div>

            <div className="w-full bg-white py-3 px-4">
              <div className="w-full flex gap-2 mb-2">
                <div className="bg-[#F2B5A5] text-brandqua px-2 py-0.5 rounded-md text-[11px]">
                  Mall | <strong>ORI</strong>
                </div>
                <div className="bg-[#F2B5A5] text-brandqua px-2 py-0.5 rounded-md text-[11px]">
                  NEW PRODUCT
                </div>
              </div>
              <div className="pr-8 mb-4">
                <p className="text-[16px]">
                  Lip Stain Tint - 4gr (Pigmented & Transfer Resistant)
                </p>
              </div>

              <p className="text-[11px] text-gray-600 mt-4">
                {selectedShade.label}
              </p>
              <div className="w-full h-12 flex gap-4 mt-1 mb-6">
                {shades.map((shade, index) => (
                  <div
                    key={index}
                    className={`relative h-full w-12 aspect-square overflow-hidden bg-slate-700 rounded-xl cursor-pointer ${selectedShade.name === shade.name ? 'border-2 border-brandter2' : ''}`}
                    onClick={() => {
                      setSelectedShade(shade);
                      setSnackbarMessage(`${shade.label} Applied!`);
                      setSnackbarOpen(true);
                    }}
                  >
                    <Image
                      src={`/images/${shade.name}`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                  fixed bottom-0 left-1/2 -translate-x-1/2
                  h-28
                  w-full max-w-md
                  bg-white
                  px-4 py-5
                  flex items-center gap-3
                  pb-[env(safe-area-inset-bottom)]
                "
            >
              <button className="h-12 px-4 py-3 rounded-lg bg-[#F3F4F6] text-brandter2">
                <Heart size={16} />
              </button>

              <button
                className="h-12 flex-1 py-3 rounded-lg bg-[#F3F4F6] text-brandter2"
                onClick={() => setCartPopupOpen(true)}
              >
                <div className="flex items-center justify-center gap-2 w-full h-full">
                  <ShoppingCart size={18} />{" "}
                  <p className="text-[14px] font-medium">Add to Cart</p>
                </div>
              </button>

              <button className="h-12 flex-1 py-3 rounded-lg bg-[#F05A3A] text-white">
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href={"/checkout"}
                    className="flex items-center justify-center gap-2 w-full h-full"
                  >
                    <ShoppingBag size={18} />{" "}
                    <p className="text-[14px] font-medium">Buy Now</p>
                  </Link>
                </div>
              </button>
            </div>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={() => setSnackbarOpen(false)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              sx={{ bottom: { xs: 120, sm: 120 }, width: '100%', px: 3 }}
            >
              <div className="bg-[#E8F3EE] border border-[#185C3A] text-[#185C3A] px-5 py-4 rounded-[14px] flex items-center justify-between w-full shadow-sm max-w-sm mx-auto">
                <div className="flex items-center gap-4">
                  <TickCircle variant="Bold" size={32} className="text-[#185C3A]" />
                  <p className="text-[18px] font-bold tracking-wide">{snackbarMessage}</p>
                </div>
                <button onClick={() => setSnackbarOpen(false)}>
                  <Close sx={{ fontSize: 28, color: '#A3C3B1' }} />
                </button>
              </div>
            </Snackbar>

            {dialogOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl p-6 w-full max-w-sm flex flex-col gap-4 text-black shadow-xl">
                  <h3 className="font-bold text-lg">Clear Canvas</h3>
                  <p className="text-sm text-gray-600">
                    Are you sure you want to clear your drawing? This action cannot be undone.
                  </p>
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700"
                      onClick={handleCloseDialog}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg font-medium bg-red-500 text-white"
                      onClick={confirmClearCanvas}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            )}

            <Snackbar
              open={cartPopupOpen}
              autoHideDuration={3000}
              onClose={() => setCartPopupOpen(false)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              sx={{ bottom: { xs: 130, sm: 130 }, width: '100%', px: 2 }}
            >
              <div className="w-full max-w-sm mx-auto">
                <div className="bg-[#FAFAFA] border border-gray-200 px-4 py-4 rounded-[12px] flex items-center gap-3 shadow-sm">
                  <ShoppingCart size={28} className="text-[#EE4D2D]" variant="Outline" />
                  <p className="text-[16px] font-semibold text-gray-600">Berhasil di tambahkan ke keranjang!</p>
                </div>
              </div>
            </Snackbar>
          </div>
        )}
      </div>
    </>
  );
}
