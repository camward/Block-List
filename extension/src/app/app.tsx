import {AppProvider} from "@/app/app-provider";

export function App() {
  return (
      <AppProvider>
        <div className="text-3xl font-bold underline">App</div>
      </AppProvider>
  )
}
