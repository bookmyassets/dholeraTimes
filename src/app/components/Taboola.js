'use client';

import Script from 'next/script';

export default function TaboolaPixel() {
  return (
    <>
      {/* Load Taboola base script first */}
      <Script 
        src="https://cdn.taboola.com/libtrc/unip/1829100/tfa.js" 
        strategy="afterInteractive"
        id="taboola-base-script"
      />
      
      {/* Then initialize the pixel */}
      <Script id="taboola-pixel-script" strategy="afterInteractive">
        {`
          window._tfa = window._tfa || [];
          window._tfa.push({notify: 'event', name: 'page_view', id: 1829100});
        `}
      </Script>
    </>
  );
}