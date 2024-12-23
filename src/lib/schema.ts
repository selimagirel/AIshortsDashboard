import * as z from "zod"

export const formSchema = z.object({
  title: z.string().min(2).max(100),
  videoKind: z.string().optional(),
  videoLength: z.enum(["1", "2"]),
  script: z.string().optional(),
  selectedVoice: z.string().optional(),
  selectedStyle: z.string().optional(),
  selectedMusic: z.string().optional(),
  selectedFont: z.string().optional(),
  selectedOverlay: z.string().optional(),
})

export type FormValues = z.infer<typeof formSchema>

export interface AudioItem {
  id: string
  name: string
  url: string
}

export interface StyleItem {
  id: string
  name: string
  preview: string
}

export interface FontItem {
  id: string
  name: string
  preview?: string
}

export interface OverlayItem {
  id: string
  name: string
  preview: string
}

