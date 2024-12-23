"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

import { BasicInfo } from "@/components/form-sections/basic-info";
import { ScriptInput } from "@/components/form-sections/script-info";
import { AudioSection } from "@/components/form-sections/audio-section";
import { SelectableSection } from "@/components/form-sections/selectable-section";

import { formSchema, FormValues } from "@/lib/schema";
import { SettingsSwitch } from "./settings-switch";

const voices = [
  { id: "voice1", name: "Voice 1", url: "/placeholder.mp3" },
  { id: "voice2", name: "Voice 2", url: "/placeholder.mp3" },
  { id: "voice3", name: "Voice 3", url: "/placeholder.mp3" },
  { id: "voice4", name: "Voice 4", url: "/placeholder.mp3" },
];

const backgroundMusic = [
  { id: "music1", name: "Music 1", url: "/placeholder.mp3" },
  { id: "music2", name: "Music 2", url: "/placeholder.mp3" },
  { id: "music3", name: "Music 3", url: "/placeholder.mp3" },
  { id: "music4", name: "Music 4", url: "/placeholder.mp3" },
];

const styles = [
  {
    id: "style1",
    name: "Ultra-Realistic",
    preview: "/realistic.png",
  },
  {
    id: "style2",
    name: "Studio Ghibli",
    preview: "/nice.png",
  },
  {
    id: "style3",
    name: "Tim Hildebrandt",
    preview: "/animation.png",
  },
  {
    id: "style4",
    name: "Guy Delisle",
    preview: "/anime.png",
  },
  {
    id: "style5",
    name: "illustration",
    preview: "/ilistruation.png",
  },
];

const fonts = [
  {
    id: "font1",
    name: "Sans Serif",
    
  },
  {
    id: "font2",
    name: "Serif",
  },
  {
    id: "font3",
    name: "Monospace",
  },
  {
    id: "font4",
    name: "Script",

  },
  {
    id: "font5",
    name: "Display",
  
  },
  {
    id: "font6",
    name: "Handwritten",
  
  },
];

const overlays = [
  {
    id: "overlay1",
    name: "Lower Third",
    preview: "/overlay.png",
  },
  {
    id: "overlay2",
    name: "Corner Logo",
    preview: "/overlay.png",
  },
];

export function CreateVideoForm2() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      videoKind: "",
      videoLength: "1",
      script: "",

      selectedVoice: "voice1",

      selectedStyle: "Style1",

      selectedMusic: "Music1",

      selectedFont: "font1",

      selectedOverlay: "overlay1",
    },
  });

  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const [playingMusic, setPlayingMusic] = useState<string | null>(null);
  const [isDefaultSettings, setIsDefaultSettings] = useState(true);

  function onSubmit(values: FormValues) {
    const queryString = new URLSearchParams(
      values as Record<string, string>
    ).toString();
    router.push(`/dashboard/generateresult?${queryString}`);
  }

  const handleAudioPlay = (type: "voice" | "music", id: string) => {
    if (type === "voice") {
      setPlayingVoice((prevId) => (prevId === id ? null : id));
      setPlayingMusic(null); // Stop music if playing
    } else {
      setPlayingMusic((prevId) => (prevId === id ? null : id));
      setPlayingVoice(null); // Stop voice if playing
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-8"
      >
        <BasicInfo form={form} />
        <ScriptInput form={form} />

        <SettingsSwitch
          form={form}
          isDefaultSettings={isDefaultSettings}
          setIsDefaultSettings={setIsDefaultSettings}
        />

        <Separator />
        <AudioSection
          form={form}
          title="Voices"
          items={voices}
          selectedField="selectedVoice"
          playingAudio={playingVoice}
          onPlay={(id) => handleAudioPlay("voice", id)}
          isDefaultSettings={isDefaultSettings}
        />

        <Separator />
        <AudioSection
          form={form}
          title="Background Music"
          items={backgroundMusic}
          selectedField="selectedMusic"
          playingAudio={playingMusic}
          onPlay={(id) => handleAudioPlay("music", id)}
          isDefaultSettings={isDefaultSettings}
        />

        <Separator />
        <SelectableSection
          form={form}
          title="Style"
          items={styles}
          selectedField="selectedStyle"
          gridCols="grid-cols-2 sm:grid-cols-3"
          isDefaultSettings={isDefaultSettings}
        />

        <Separator />
        <SelectableSection
          form={form}
          title="Font"
          items={fonts}
          selectedField="selectedFont"
          isDefaultSettings={isDefaultSettings}
        />

        <Separator />
        <SelectableSection
          form={form}
          title="Overlays"
          items={overlays}
          selectedField="selectedOverlay"
          gridCols="grid-cols-2"
          isDefaultSettings={isDefaultSettings}
        />

        <Button type="submit" className="w-full">
          Generate Video
          <span className="ml-2 text-sm opacity-70">
            (This video will cost 1 credit)
          </span>
        </Button>
      </form>
    </Form>
  );
}

