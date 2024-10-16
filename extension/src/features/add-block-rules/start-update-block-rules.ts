import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from '@/shared/api/generated';
import { setBrowserInterval, setNetRules } from '@/shared/lib/browser';
import { getBlockListNetRules } from './get-block-list-net-rules';
import { EVENT_DELAY } from '@/shared/constants/config';

export function startUpdateBlockRules() {
  setBrowserInterval('update-block-rules', EVENT_DELAY * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      return await setNetRules([]);
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      return await setNetRules([]);
    }

    const rules = await getBlockListNetRules();
    setNetRules(rules);
  });
}
