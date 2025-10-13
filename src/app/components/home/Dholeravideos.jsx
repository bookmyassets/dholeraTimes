"use client";
import React, { useState } from "react";
import Image from "next/image";
import bg from "@/assets/pexels2.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Dholera Smart City: Vision & Development",
    youtubeId: "hNbWaEU1d_A",
  },
  {
    id: 2,
    title: "Dholera Smart City Investment Guide Video",
    youtubeId: "rYv0f3BPhkg",
  },
];

export default function Dholeravideos() {
  const [videoStates, setVideoStates] = useState(
    videos.map(() => ({ isPlaying: false, isLoading: false }))
  );

  const handlePlay = (index) => {
    setVideoStates((prev) =>
      prev.map((v, i) =>
        i === index ? { isPlaying: true, isLoading: true } : v
      )
    );
  };

  const handleLoad = (index) => {
    setVideoStates((prev) =>
      prev.map((v, i) => (i === index ? { ...v, isLoading: false } : v))
    );
  };

  return (
    <div className="space-y-4">
      <div className="relative pt-8">
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10 opacity-30"
        />
        <h2 className="text-center text-xl font-bold md:text-4xl">
          Dholera SIR project Video
        </h2>
        <p className="text-center text-xl text-black">
          {
            "Watch how India's first Greenfield Smart City is shaping the future."
          }
        </p>
        {/* Changed grid to flex-col for mobile, gap added */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div key={video.id} className="w-full px-4 py-6 sm:px-6 lg:px-8">
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700"></div>
                <div className="p-6">
                  {/* Maintain consistent aspect ratio with w-full */}
                  <div className="relative aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                    {videoStates[index].isPlaying ? (
                      <>
                        {videoStates[index].isLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                            <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-red-600 animate-spin"></div>
                          </div>
                        )}
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          onLoad={() => handleLoad(index)}
                        ></iframe>
                      </>
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handlePlay(index)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-white opacity-80 sm:w-16 sm:h-16"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  <a
                    href="/infopack/videos"
                    className="inline-flex my-5 items-center px-3 py-1 rounded-full text-lg font-semibold bg-[#d8b66d] text-white"
                  >
                    Explore More <FaArrowAltCircleDown className="mx-3" />
                  </a>
                </div>

                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    Presented by Dholera Times
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-red-600 transition">
                      <span className="sr-only">Share</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition">
                      <span className="sr-only">Save</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
