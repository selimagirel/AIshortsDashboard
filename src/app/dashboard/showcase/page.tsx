import ShowCasePage from "@/components/showcase";
import { Sidebar } from "@/components/sidebar";

export default function ShowCaes() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl px-4 py-6 md:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Showcase
            </h2>
          </div>
          <ShowCasePage />
        </div>
      </div>
    </div>
  );
}
