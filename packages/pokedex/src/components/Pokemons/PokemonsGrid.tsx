import React, {useMemo} from 'react';
import {testIds} from 'components';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import {apiPaginationToMui, TGetPokemonsListRes, TPaginationQuery} from 'utils';
import Link from 'next/link';
import {Button} from '@mui/material';
import {DataGridProps} from '@mui/x-data-grid/models/props/DataGridProps';

export type PokemonsGridProps = {
  results?: TGetPokemonsListRes['results'];
  count?: TGetPokemonsListRes['count'];
  paginationQuery?: TPaginationQuery;
  isLoading?: boolean;
  onPaginationModelChange?: DataGridProps['onPaginationModelChange'];
};

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'url',
    headerName: 'More Details',
    width: 150,
    renderCell: ({row}) => {
      return (
        <Link href={`/pokemons/${row.name}`} data-testid={testIds.home.pokemonUrl(row.name)}>
          <Button variant="contained">Click Here</Button>
        </Link>
      );
    },
  },
];

export function PokemonsGrid(props: PokemonsGridProps) {
  const {results, count, paginationQuery, isLoading, onPaginationModelChange} = props;
  const {offset, limit} = paginationQuery || {};

  const rows = useMemo<GridRowsProp | undefined>(
    () =>
      results?.map(pokemon => ({
        id: pokemon.name,
        name: pokemon.name,
        url: pokemon.url,
      })),
    [results],
  );

  const initialPaginationDataGrid = useMemo(() => apiPaginationToMui({offset, limit}), [limit, offset]);

  return rows && count ? (
    <div style={{height: '500px'}} data-testid={testIds.home.table}>
      <DataGrid
        initialState={{
          pagination: {
            paginationModel: initialPaginationDataGrid,
          },
        }}
        paginationMode="server"
        pageSizeOptions={[5, 10, 25, 50, 100]}
        columns={columns}
        rows={rows}
        loading={isLoading}
        rowCount={count}
        onPaginationModelChange={onPaginationModelChange}
      />
    </div>
  ) : null;
}
