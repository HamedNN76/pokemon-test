import React from 'react';

export type HeaderProps = {
  message: string;
};

export function Header(props: HeaderProps) {
  const {message} = props;

  return (
    <div>
      <h1 data-testid="headerMessage">{message}</h1>
    </div>
  );
}
