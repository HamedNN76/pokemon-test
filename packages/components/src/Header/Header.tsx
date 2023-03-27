import React from 'react';
import {testIds} from '@/constants';

export type HeaderProps = {
  message: string;
};

export function Header(props: HeaderProps) {
  const {message} = props;

  return (
    <div>
      <h1 data-testid={testIds.header.message}>{message}</h1>
    </div>
  );
}
