import Link from "next/link";
import { Inventory } from "@/sanity/lib/api";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Download, Eye } from "lucide-react";

export default async function BlogPage() {
  let posts = [];
  let isLoading = true;

  try {
    posts = await Inventory();
    isLoading = false;
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    isLoading = false;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-8 text-center">
            Loading Inventory PDFs...
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 animate-pulse"
              >
                <div className="h-60 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="flex space-x-4 pt-4">
                    <div className="h-12 bg-gray-200 rounded-lg w-1/2"></div>
                    <div className="h-12 bg-gray-200 rounded-lg w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
        <div className="max-w-md text-center bg-white p-10 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
            No PDFs Available
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            We couldn't find any inventory PDFs at the moment. Please check back later.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#bc9849] to-[#d4b06c] text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
            Available Plots
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Explore our collection of residential plot details in Dholera. Find your perfect investment opportunity!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post._id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative h-64 w-full">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(800).height(600).url() || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                  {post.title}
                </h2>
                
                {post.pdfUrl && (
                  <div className="mt-6 flex space-x-4">
                    <Link
                      href={post.pdfUrl}
                      download
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-[#bc9849] text-white rounded-lg hover:bg-[#d4b06c] transition-colors"
                    >
                      <Download className="mr-2" size={20} />
                      Download
                    </Link>

                    <Link
                      href={post.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Eye className="mr-2" size={20} />
                      View PDF
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}