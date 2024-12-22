import { Sidebar } from "@/components/sidebar"
import { CreateVideoForm2 } from "@/components/create-video-form2"

export default function CreatePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Create</h2>
        </div>
        <div className="max-w-4xl">
          <CreateVideoForm2 />
        </div>
      </div>
    </div>
  )
}

