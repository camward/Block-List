import {UiHeader} from "@/shared/ui/ui-header";
import {Profile} from "@/wifgets/profile";
import {ToggleBlockingButton} from "@/features/toggle-blocking";

export function HomePage() {
  return (
      <div className={`min-h-screen flex flex-col`}>
          <UiHeader right={<Profile />} />
          <div className="grid grid-cols-[200px_1fr]">
              <aside className="px-5 pt-10">
                  <ToggleBlockingButton />
              </aside>
              <main className="pt-10 px-5">
                  Content
              </main>
          </div>
      </div>
  );
}
