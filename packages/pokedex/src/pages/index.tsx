import {HomeContainer} from 'components';
import {Head} from '@pokedex/components/Head';
import {SagaStore, wrapper} from '@pokedex/redux/store';
import {getPokemonsActions} from 'utils';
import {useAppSelector} from '@pokedex/hooks/redux';
import {END} from 'redux-saga';
import {testIds} from '@pokedex/constants/testIds';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import {useMemo} from 'react';
import {Button, CircularProgress} from '@mui/material';
import Link from 'next/link';

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
    renderCell: ({value, row}) => {
      return (
        <Link href={`/pokemons/${row.name}`} data-testid={testIds.home.pokemonUrl(row.name)}>
          <Button variant="contained">Click Here</Button>
        </Link>
      );
    },
  },
];

export default function Home() {
  const state = useAppSelector(state => state.getPokemons);
  console.log(state, 'state');

  const rows = useMemo<GridRowsProp | undefined>(
    () =>
      state.data?.results?.map(pokemon => ({
        id: pokemon.name,
        name: pokemon.name,
        url: pokemon.url,
      })),
    [state.data?.results],
  );

  return (
    <HomeContainer>
      <Head title="All Pokemons" description="Fetch all the pokemons" />
      {state.loading ? <CircularProgress data-testid={testIds.home.loading} /> : null}
      {rows?.length ? <p data-testid={testIds.home.total}>Total Pokemons: {rows.length}</p> : null}
      {rows ? (
        <div style={{height: '500px'}} data-testid={testIds.home.table}>
          <DataGrid columns={columns} rows={rows} />
        </div>
      ) : null}
    </HomeContainer>
  );
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  store.dispatch(getPokemonsActions.load());

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();

  return {
    props: {},
  };
});
