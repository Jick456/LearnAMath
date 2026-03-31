import React, { useEffect } from 'react';

/**
 * AdBanner Component for Google AdSense
 * @param {string} dataAdSlot - The ad slot ID from your AdSense dashboard
 * @param {string} dataAdFormat - The layout format (auto, rectangle, vertical, horizontal)
 * @param {boolean} fullWidth - Whether to use full width responsive ads
 */
const AdBanner = ({ dataAdSlot, dataAdFormat = "auto", fullWidth = true }) => {
  useEffect(() => {
    try {
      // Initialize the ad if the global adsbygoogle script is loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense could not be initialized:", e.message);
    }
  }, []);

  return (
    <div className="ad-container" style={{ 
      margin: '20px 0', 
      overflow: 'hidden', 
      minHeight: '100px',
      background: 'rgba(0,0,0,0.02)',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-5908849280501727" // User specific Pub ID
           data-ad-slot={dataAdSlot}
           data-ad-format={dataAdFormat}
           data-full-width-responsive={fullWidth.toString()}></ins>
    </div>
  );
};

export default AdBanner;
