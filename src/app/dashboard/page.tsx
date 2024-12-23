import { Sidebar } from "@/components/sidebar"
import { CreateVideoForm2 } from "@/components/create-video-form2"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl px-4 py-6 md:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Create</h2>
          </div>
          <CreateVideoForm2/>
        </div>
      </div>
    </div>
  )
}

