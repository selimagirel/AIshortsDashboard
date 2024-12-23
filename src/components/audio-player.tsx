"use client"

import { useRef, useEffect, useState } from 'react'

interface AudioPlayerProps {
  url: string
  isPlaying: boolean
}

export function AudioPlayer({ url, isPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const playAudio = async () => {
      try {
        if (isPlaying) {
          setError(null)
          if (audio.readyState >= 2) {
            await audio.play()
          } else {
            await new Promise((resolve) => {
              audio.addEventListener('canplay', resolve, { once: true })
            })
            await audio.play()
          }
        } else {
          audio.pause()
          audio.currentTime = 0
        }
      } catch (err) {
        console.error("Audio playback failed:", err)
        setError("Audio playback failed. Please check your audio settings and try again.")
      }
    }

    playAudio()

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [isPlaying, url])

  return (
    <>
      <audio ref={audioRef} src={url} preload="auto" />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </>
  )
}


