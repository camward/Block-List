import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from '@/shared/api/generated';
import { setBrowserInterval, setIcon } from '@/shared/lib/browser';
import { EVENT_DELAY } from '@/shared/constants/config';

export function startToggleExtensionIcon() {
  setBrowserInterval('update-block-rules', EVENT_DELAY * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      setIcon('/hey.png');
      return;
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      setIcon('/sleaping.png');
      return;
    }

    setIcon('/shield.png');
    return;
  });
}
