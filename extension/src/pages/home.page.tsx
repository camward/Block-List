import { ToggleBlockingButton } from '@/features/toggle-blocking/ui/toggle-blocking-button';
import { ADMIN_URL } from '@/shared/constants/tabs';
import { createTab } from '@/shared/lib/browser';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLogo } from '@/shared/ui/ui-logo';

export function HomePage() {
  return (
    <div className="p-6 flex flex-col gap-3 ">
      <UiLogo />
      <ToggleBlockingButton />
      <UiButton variant="outlined" onClick={() => createTab(ADMIN_URL)}>
        Перейти на сайт расширения
      </UiButton>
    </div>
  );
}
