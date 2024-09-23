'use client';

import type { ReactNode } from 'react';
import type { ServerCredentials } from '../src-tauri/bindings/ServerCredentials';

import { Button } from './_components/Button';
import { CommandEnum } from './lib/enums/CommandEnum';
import { useCommand } from './lib/hooks/useCommand';

const DUMMY_CREDS = {
  ip_address: '192.168.0.1',
  port: '22',
  username: 'test',
  password: 'password',
} satisfies ServerCredentials;

export default function Home(): ReactNode {
  const { invokeCommand } = useCommand(CommandEnum.Connect);

  return (
    <div className="bg-base-100">
      <Button onClick={async () => await invokeCommand({ creds: DUMMY_CREDS })}>Connect</Button>
    </div>
  );
}
