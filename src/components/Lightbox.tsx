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
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-lg text-white hover:bg-black/60 sm:top-6 sm:right-6"
      >
        ✕
      </button>

      <button
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white shadow-lg hover:bg-black/60 sm:left-6 sm:h-12 sm:w-12"
      >
        ‹
      </button>

      <div className="flex max-h-[82vh] max-w-[92vw] items-center justify-center px-12 sm:px-16">
        <img
          src={images[index].src}
          alt={images[index].alt || ""}
          className="max-h-[82vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
        />
      </div>

      <button
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white shadow-lg hover:bg-black/60 sm:right-6 sm:h-12 sm:w-12"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-0 right-0 px-4 text-center text-sm text-white/90 sm:bottom-6">
        {images[index].alt}
      </div>
    </div>
  );
}
