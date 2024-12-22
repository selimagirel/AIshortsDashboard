import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "@/lib/schema"

interface SettingsSwitchProps {
  form: UseFormReturn<FormValues>
  isDefaultSettings: boolean
  setIsDefaultSettings: (value: boolean) => void
}

export function SettingsSwitch({ form, isDefaultSettings, setIsDefaultSettings }: SettingsSwitchProps) {
  const handleSettingsChange = (checked: boolean) => {
    setIsDefaultSettings(checked)
    if (checked) {
      // Apply default settings
      form.setValue("selectedVoice", "voice1")
      form.setValue("selectedMusic", "music1")
      form.setValue("selectedStyle", "style1")
      form.setValue("selectedFont", "font1")
      form.setValue("selectedOverlay", "overlay1")
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="default-settings"
        checked={isDefaultSettings}
        onCheckedChange={handleSettingsChange}
      />
      <Label htmlFor="default-settings">
        {isDefaultSettings ? "Using Default Settings" : "Custom Settings"}
      </Label>
    </div>
  )
}
