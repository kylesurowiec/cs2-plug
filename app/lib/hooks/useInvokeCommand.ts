import type { CommandEnum } from '../enums/CommandEnum';

import { invoke } from '@tauri-apps/api/tauri';
import { useCallback } from 'react';

type TUseCommand<T> = {
  invoke: () => Promise<T>;
};

export function useCommand<T>(command: CommandEnum, args: Record<string, unknown>): TUseCommand<T> {
  return {
    invoke: useCallback(async () => invoke(command, args), [command, args]),
  };
}
