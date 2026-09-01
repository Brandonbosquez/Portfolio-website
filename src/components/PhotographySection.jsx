import { useState } from "react";

const photos = [
  {
    id: 1,
    src: "/photos/austria-1.JPG",
    title: "Viennese Café",
    camera: "Fujifilm X‑T30 II",
    lens: "Tamron 28–75mm f/2.8",
    location: "Vienna, Austria",
    date: "2025",
  },
  {
    id: 2,
    src: "/photos/prague-1.JPG",
    title: "Vltava",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 27mm f/5",
    location: "Prague, Czechia",
    date: "2025",
  },
  {
    id: 3,
    src: "/photos/london-1.JPG",
    title: "Black Cab",
    camera: "Fujifilm X‑T50",
    lens: "XF 27mm f/5",
    location: "London, England",
    date: "2025",
  },
  // Add more photos here...
  /* 
  {
    id: 0,
    src: "/photos/o-1.JPG",
    title: " ",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 28–75mm f/2.8",
    location: " , ",
    date: "202",
  }
    */
  {
    id: 4,
    src: "/photos/helsinki-1.JPG",
    title: "Golden Hour",
    camera: "Fujifilm X‑T50",
    lens: "XF 27mm f/3.2",
    location: "Helsinki, Finland",
    date: "2025",
  },

  { 
  id: 5,
    src: "/photos/panama-3.JPG",
    title: "Iguana Verde",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 55mm f/4",
    location: "Coclé, Panamá",
    date: "2025",
  },

{ 
  id: 6,
    src: "/photos/paris-1.JPG",
    title: "La Cité",
    camera: "Fujifilm X‑T50",
    lens: "XF 27mm f/2.8",
    location: "Paris, France",
    date: "2025",
  },

   { 
  id: 7,
    src: "/photos/newyork-1.JPG",
    title: "Empire State",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 55mm f/4",
    location: "New York, USA",
    date: "2025",
  },

   { 
  id: 8,
    src: "/photos/espoo-1.JPG",
    title: "Talvi",
    camera: "Fujifilm X‑T50",
    lens: "XF 27mm f/3.2",
    location: "Espoo, Finland",
    date: "2026",
  },

   {
    id: 9,
    src: "/photos/helsinki-2.JPG",
    title: "Rautatieasema",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 27mm f/4",
    location: "Helsinki, Finland",
    date: "2025",
  },

   {
    id: 10,
    src: "/photos/taboga-1.JPG",
    title: "Flower Island",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 27mm f/3.2",
    location: "Taboga, Panama",
    date: "2025",
  },
  {
    id: 11,
    src: "/photos/panama-2.JPG",
    title: "Priti",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 37mm f/14",
    location: "Panama City, Panama",
    date: "2025",
  },
   {
    id: 12,
    src: "/photos/paris-2.JPG",
    title: "Sacred Heart",
    camera: "Fujifilm X‑T50",
    lens: "XF 27mm f/3.2",
    location: "Paris, France",
    date: "2025",
  },
  {
    id: 13,
    src: "/photos/amsterdam.jpg",
    title: "Canal Cruise",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 27mm f/4.5",
    location: "Amsterdam, Netherlands",
    date: "2025",
  },
  {
    id: 14,
    src: "/photos/helsinki-3.jpg",
    title: "Pilot Boat",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 27mm f/3.6",
    location: "Helsinki, Finland",
    date: "2025",
  },
  {
    id: 15,
    src: "/photos/panama-1.JPG",
    title: "Plátanos",
    camera: "Fujifilm X‑T30 II",
    lens: "XF 27mm f/2.8",
    location: "Panama",
    date: "2024",
  },

];

export const PhotographySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="photography" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Photography <span className="text-primary"> Gallery</span>
        </h2>

        <p className="text-center text-primary-foreground mb-12 max-w-2xl mx-auto">
          A collection of moments I've captured over the years. Click any photo to view it in full resolution.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-xs bg-card cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="
                absolute inset-0 bg-black/50 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300
                flex flex-col justify-end p-4 text-white
              ">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                <p className="text-sm opacity-90">{photo.location}</p>
                <p className="text-xs opacity-80 mt-1">
                  {photo.camera} • {photo.lens}
                </p>
                <p className="text-xs opacity-80">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <img 
            src={selectedPhoto.src} 
            alt={selectedPhoto.title}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};
