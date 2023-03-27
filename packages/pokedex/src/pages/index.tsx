import {HomeContainer} from 'components';
import {Head} from '@pokedex/components/Head';
import {SagaStore, wrapper} from '@pokedex/redux/store';
import {getPokemonsActions} from 'utils';
import {useAppSelector} from '@pokedex/hooks/redux';
import {END} from 'redux-saga';

export default function Home() {
  const state = useAppSelector(state => state.getPokemons);
  console.log(state, 'state');

  return (
    <HomeContainer>
      <Head title="All Pokemons" description="Fetch all the pokemons" />
      <p>length: {state.data?.results?.length}</p>
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
