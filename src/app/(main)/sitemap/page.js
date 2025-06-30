import Image from "next/image";
import React from "react";
import sitemap from "@/assets/Sitemap.webp"

export default function page() {
  return (
    <>
      <meta name="robots" content="noindex, dofollow"/>
      <link rel="canonical" href="https://www.dholeratimes.com/sitemap" />
      <div>
        <h1 className="font-bold pt-16 text-5xl text-center">SiteMap</h1>
        <div className="flex justify-center items-center">
            <Image
                src={sitemap}
                alt="sitemap"
            />
        </div>
      </div>
    </>
  );
}