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
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Loading Inventory PDFs...</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm bg-white">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-2" />
              <Skeleton className="h-10 w-24" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
    <div className="max-w-6xl h-screen mx-auto p-6 mt-20">
      <h1 className="text-2xl md:text-5xl font-bold mb-6 text-center">Brochure</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="p-4 space-y-5 border rounded-lg shadow-sm bg-white">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">Author: {post.author}</p>
            

            {post.pdfUrl && (
              <a
                href={post.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${post.title}`}
                className="mt-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md inline-block"
              >
                Download PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}