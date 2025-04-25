// components/Hero.js
import { useRef, useState, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // On mount, try to autoplay (muted)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.play().catch(() => {
      /* ignore anything */
    });
  }, []);

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
    if (!vid.muted) vid.play().catch(() => {});
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
      >
        {/* Make sure these files exist under public/videos/ */}
        <source src="/videos/hero-loop-optimized.webm" type="video/webm" />
        <source src="/videos/hero-loop-optimized.mp4" type="video/mp4" />
        {/* Fallback message */}
        Your browser does not support HTML5 video.
      </video>

      {/* Semi-transparent overlay so we can still see the video */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Mute toggle (must be a user gesture for audio to play) */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 bg-black bg-opacity-40 text-white p-2 rounded-full"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
          Before You Buy, Let Us Negotiate Your Price Down
        </h1>
        <p className="mt-4 text-2xl sm:text-3xl max-w-3xl">
          Full 360° buyer representation—negotiation, legal & mortgage support. No savings, no fee.
        </p>
      </div>
    </section>
  );
}
