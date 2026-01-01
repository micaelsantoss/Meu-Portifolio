import { useEffect, useState } from "react";

interface MidiasProps{
  images?: ImagesProps;
  videos?: VideosProps;
}

interface ImagesProps {
  desktop: string[];
  mobile: string[];
}

interface VideosProps {
  desktop: string[];
  mobile: string[];
}

export function ProjectGallery({ images, videos }: MidiasProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveImage(null);
  };

  document.addEventListener("keydown", handleEsc);
  return () => document.removeEventListener("keydown", handleEsc);
}, []);


  return (
    <div className="space-y-12">
      {/* Desktop */}
      <section>
        <h2 className="text-xl mb-4 text-center">Versão Desktop</h2>
        <div className="grid md:grid-cols-2 gap-6 w-[80%] max-w-5xl mx-auto">
          {images?.desktop.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActiveImage(img)}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform
                duration-500"
            />
          ))}
        </div>
      </section>

      {/* Mobile */}
      {images?.mobile && (
        <section>
          <h2 className="text-xl mb-4">Versão Mobile</h2>
          <div className="flex gap-6">
            {images?.mobile.map((img, i) => (
              <div 
                key={i} className="w-[220px]"
                onClick={() => setActiveImage(img)}
              >
                <img src={img} className="rounded-[30px]" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Vídeo */}
      {videos && (
        <section>
          <h2 className="text-xl mb-4">Demonstração</h2>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-6 w-[80%] max-w-5xl mx-auto">
            {videos.desktop.map((video, i) => (
              <div key={i} className="w-full max-w-3xl mx-auto">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={video}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}

            {videos.mobile.map((video, i) => (
              <div key={i} className="w-[260px] mx-auto">
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                  <iframe
                    src={video}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    {activeImage && (
      <div
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        onClick={() => setActiveImage(null)}
      >
        <div
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute right-5 text-white text-3xl cursor-pointer hover:text-red-700"
          >
            ×
          </button>

          <img
            src={activeImage}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      </div>
    )}

    </div>
  );
}
