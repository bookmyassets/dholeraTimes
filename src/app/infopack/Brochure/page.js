import Link from "next/link";
import { Brochure } from "@/sanity/lib/api";

export default async function BlogPage() {
  let posts = [];
  let isLoading = true;

  try {
    posts = await Brochure();
    isLoading = false;
    /* console.log("Fetched PDFs:", posts); // Debugging
    console.log("Data structure:", JSON.stringify(posts, null, 2)); // Debugging */
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    isLoading = false;
  }

  if (isLoading) {
    return (
      <div className=" p-6">
        <h1 className="text-2xl font-bold mb-6">Loading Inventory PDFs...</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm bg-white">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/3   mb-2" />
              <Skeleton className="h-10 w-24" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-gray-500 text-lg">No PDFs available.</p>
        <button
          onClick={() => window.location.reload()}
          className="ml-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mb-44 mx-auto p-6 mt-20 space-y-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Project Brochure
      </h1>
      <p className="text-center md:text-xl md:font-medium font-semibold ">
        Learn all about our Dholera residential plots by accessing our comprehensive project brochure
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-[#f1cf86] p-4 space-y-5 border rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {post.title}
            </h2>

            {post.pdfUrl && (
              <div className="space-x-4 mt-4">
                {/* Download PDF Button */}
                <a
                  href={post.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${post.title}`}
                  className="px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition transform hover:scale-105"
                >
                  Download PDF
                </a>

                {/* View PDF Button */}
                <a
                  href={post.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${post.title}`}
                  className="px-4 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition transform hover:scale-105"
                >
                  View PDF
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
