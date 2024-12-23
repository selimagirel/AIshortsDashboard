import { Card, CardContent } from "@/components/ui/card"
import { AudioButton } from "@/components/audio-button"
import { AudioPlayer } from "@/components/audio-player"
import { UseFormReturn } from "react-hook-form"
import { FormValues, AudioItem } from "@/lib/schema"
import { useState } from 'react'

interface AudioSectionProps {
  form: UseFormReturn<FormValues>
  title: string
  items: AudioItem[]
  selectedField: "selectedVoice" | "selectedMusic"
  playingAudio: string | null
  onPlay: (id: string) => void
  isDefaultSettings: boolean
}

export function AudioSection({ form, title, items, selectedField, playingAudio, onPlay, isDefaultSettings }: AudioSectionProps) {
  const [error, setError] = useState<string | null>(null)

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setError(null)
    onPlay(id)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <Card 
            key={item.id}
            className={`cursor-pointer hover:bg-accent ${
              form.watch(selectedField) === item.id 
                ? 'bg-slate-300' 
                : ''
            } ${isDefaultSettings ? 'opacity-60 bg-accent' : 'opacity-100 '}`}
            onClick={(e) => {
              e.preventDefault();
              if (!isDefaultSettings) {
                form.setValue(selectedField, item.id)
              }
            }}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <span>{item.name}</span>
              <AudioButton 
                isPlaying={playingAudio === item.id}
                onClick={(e) => handlePlay(e, item.id)}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      {items.map((item) => (
        <AudioPlayer 
          key={item.id} 
          url={item.url} 
          isPlaying={playingAudio === item.id} 
        />
      ))}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}

