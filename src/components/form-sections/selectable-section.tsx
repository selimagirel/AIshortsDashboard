import { Card, CardContent } from "@/components/ui/card"
import { UseFormReturn } from "react-hook-form"
import { FormValues, StyleItem, FontItem, OverlayItem } from "@/lib/schema"
import Image from "next/image"

interface SelectableSectionProps {
  form: UseFormReturn<FormValues>
  title: string
  items?: (StyleItem | FontItem | OverlayItem)[] | null
  selectedField: "selectedStyle" | "selectedFont" | "selectedOverlay"
  gridCols?: string
  isDefaultSettings: boolean
}

export function SelectableSection({ form, title, items, selectedField, gridCols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4", isDefaultSettings }: SelectableSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className={`grid gap-4 ${gridCols}`}>
        {items?.map((item) => (
          <Card
            key={item.id}
            className={`cursor-pointer hover:bg-accent ${
              form.watch(selectedField) === item.id
                ? 'bg-slate-300'
                : ''
            } ${isDefaultSettings ? 'opacity-100 pointer-events-none bg-accent' : 'opacity-100'}`}
            onClick={() => {
              if (!isDefaultSettings) {
                form.setValue(selectedField, item.id)
              }
            }}
          >
            <CardContent className="p-2 flex flex-col items-center justify-center w-full h-full">
              {item.preview && (
                <Image src={item.preview} alt={item.name} className={`mb-2 border object-cover w-[200px] h-[200px] ${isDefaultSettings ? 'opacity-70 pointer-events-none' : 'opacity-100'}}` } objectFit="cover" width={100} height={100}/>
              )}
              <span>{item.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

