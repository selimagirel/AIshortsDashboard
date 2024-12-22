import { Play, Pause } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface AudioButtonProps {
  isPlaying: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function AudioButton({ isPlaying, onClick }: AudioButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="relative overflow-hidden"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
    >
      {isPlaying ? <Pause className="h-4 w-4 z-10 text-black" /> : <Play className="h-4 w-4 z-10 text-black" />}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          className={`w-full h-full ${
            isPlaying ? 'animate-wave fill-primary/20' : 'fill-transparent'
          }`}
          x="0"
          y="0"
        />
      </svg>
    </Button>
  )
}
