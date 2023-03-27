import React from 'react';
import {testIds} from 'components';
import {CircularProgress} from '@mui/material';

export type HomeLoadingProps = {
  loading: boolean;
};

export function HomeLoading(props: HomeLoadingProps) {
  const {loading} = props;

  return loading ? <CircularProgress data-testid={testIds.home.loading} /> : null;
}
