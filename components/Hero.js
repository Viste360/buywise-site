// components/Hero.js
import { useRef, useState, useEffect } from 'react'
import { FaVolumeMute, FaVolumeUp }     from 'react-icons/fa'
import Link                             from 'next/link'
import { useRouter }                    from 'next/router'
import useT                             from '../lib/useTranslation'

export default function Hero() {
  const { hero }          = useT()             // { heading, sub, cta }
  const { locale, asPath } = useRouter()
  const videoRef          = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  // autoplay muted
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dm4ngy8jn/video/upload/v1745565620/hero-loop-optimized_jztmu9.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/dm4ngy8jn/video/upload/f_mp4/v1745565620/hero-loop-optimized_jztmu9.webm"
          type="video/mp4"
        />
      </video>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* mute toggle */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        className="absolute top-4 right-4 z-20 bg-black/40 text-white p-2 rounded-full"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
   
      {/* hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
          {hero.heading}
        </h1>
        <p className="mt-4 text-2xl sm:text-3xl max-w-3xl">
          {hero.sub}
        </p>
        {/* removed inline CTA since you have the bubble */}
      </div>
    </section>
  )
}
