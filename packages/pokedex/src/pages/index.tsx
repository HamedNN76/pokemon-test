import {HomeContainer, HomeLoading, TotalPokemonsCount} from 'components';
import {Head} from '@pokedex/components/Head';
import {SagaStore, wrapper} from '@pokedex/redux/store';
import {getPokemonsActions, muiPaginationToPokemon, parsePaginationQuery, TPaginationQuery} from 'utils';
import {useAppSelector} from '@pokedex/hooks/redux';
import {END} from 'redux-saga';
import {useCallback, useState} from 'react';
import {useRouter} from 'next/router';
import {GridPaginationModel} from '@mui/x-data-grid/models/gridPaginationProps';
import {PokemonsGrid} from '@pokedex/components/Pokemons/PokemonsGrid';

export type HomeProps = TPaginationQuery;

export default function Home(props: HomeProps) {
  const {offset, limit} = props;

  const [loading, setLoading] = useState(false);

  const state = useAppSelector(state => state.getPokemons);

  const router = useRouter();

  const handlePaginationChange = useCallback(
    async (model: GridPaginationModel) => {
      const {offset, limit} = muiPaginationToPokemon(model);
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString(),
      });
      setLoading(true);
      await router.push(`/?${query.toString()}`);
      setLoading(false);
    },
    [router],
  );

  const isLoading = state.loading || loading;

  return (
    <HomeContainer>
      <Head title="All Pokemons" description="Fetch all the pokemons" />
      <HomeLoading loading={state.loading} />
      <TotalPokemonsCount count={state.data?.count} />
      <PokemonsGrid
        count={state.data?.count}
        onPaginationModelChange={handlePaginationChange}
        results={state.data?.results}
        isLoading={isLoading}
        paginationQuery={{offset, limit}}
      />
    </HomeContainer>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
  const {offset, limit} = parsePaginationQuery(query);

  store.dispatch(getPokemonsActions.load({offset, limit}));
  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();

  return {
    props: {
      offset,
      limit,
    },
  };
});
