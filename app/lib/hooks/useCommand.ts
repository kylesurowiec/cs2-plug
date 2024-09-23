import type { CommandEnum } from '../enums/CommandEnum';

import { invoke } from '@tauri-apps/api/tauri';
import { useCallback } from 'react';

type TUseCommand<T> = {
  invokeCommand: (args?: Record<string, unknown>) => Promise<T>;
};

export function useCommand<T>(command: CommandEnum): TUseCommand<T> {
  return {
    invokeCommand: useCallback(async (args) => await invoke(command, args), [command]),
  };
}
