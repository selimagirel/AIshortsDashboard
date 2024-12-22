import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Wand2 } from 'lucide-react'
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "@/lib/schema"

interface ScriptInputProps {
  form: UseFormReturn<FormValues>
}

export function ScriptInput({ form }: ScriptInputProps) {
  return (
    <FormField
      control={form.control}
      name="script"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Script</FormLabel>
          <FormControl>
            <div className="relative">
              <Textarea
                placeholder="Enter your script or generate one using AI"
                className="min-h-[100px] pb-10"
                {...field}
              />
              <Button
                variant="secondary"
                size="sm"
                className="absolute bottom-2 right-2"
                onClick={() => console.log("Generate script")}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Generate Script Using AI</span>
                <span className="sm:hidden">Generate</span>
              </Button>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

