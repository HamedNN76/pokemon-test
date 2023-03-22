import React from 'react';
import {Header} from '@/Header';

export type HomeContainerProps = {
  children?: React.ReactNode;
};
export function HomeContainer(props: HomeContainerProps) {
  const {children} = props;

  return (
    <>
      {children}
      <Header message="Welcome to Pokemon Test" />
    </>
  );
}
