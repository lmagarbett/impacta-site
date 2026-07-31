import { useEffect, useState } from "react";

type ImageItem = { src: string; alt?: string };

export default function Lightbox({
  images,
  initialIndex = 0,
  onClose,
}: {
  images: ImageItem[];
  initialIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState<number>(initialIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow || "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        ✕
      </button>

      <button
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        ‹
      </button>

      <div className="max-w-5xl max-h-[86vh] px-4 flex items-center">
        <img
          src={images[index].src}
          alt={images[index].alt || ""}
          className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
        />
      </div>

      <button
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-white/90">
        {images[index].alt}
      </div>
    </div>
  );
}
