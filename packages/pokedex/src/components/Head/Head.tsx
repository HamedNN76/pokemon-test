import React from 'react';
import NextHead from 'next/head';
import {testIds} from 'components';

export type HeadProps = {
  title?: string;
  description?: string;
};
export function Head(props: HeadProps) {
  const {title, description} = props;

  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {title ? <title data-testid={testIds.head.title}>{title}</title> : null}
      {description ? <meta data-testid={testIds.head.description} name="description" content={description} /> : null}
    </NextHead>
  );
}
