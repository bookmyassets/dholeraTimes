import { CalendarDays, MessageSquare, User } from "lucide-react";

export default async function BlogPage() {
  // Agar YouTube video links Sanity ya kisi aur source se fetch karne hain, to yahan fetch karo
  const videos = [
    "hNbWaEU1d_A?si=c5c7r-9oUr-CB8QD",
    "hNbWaEU1d_A?si=c5c7r-9oUr-CB8QD",
    "hNbWaEU1d_A?si=c5c7r-9oUr-CB8QD",
    "hNbWaEU1d_A?si=c5c7r-9oUr-CB8QD",
  ]; // YouTube video IDs

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center md:text-5xl text-2xl font-bold mb-10">
        Videos
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {videos.map((videoId, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
