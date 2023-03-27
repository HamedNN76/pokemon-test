import {Header} from 'components';
import {useRouter} from 'next/router';
import {SagaStore, wrapper} from '@pokedex/redux/store';
import {getPokemonByNameActions} from 'utils';
import {END} from 'redux-saga';
import {useAppSelector} from '@pokedex/hooks/redux';
import {PokemonKeyValue} from '@pokedex/components/SinglePokemon/PokemonKeyValue';

export type SinglePokemonProps = {
  name: string;
};

export default function SinglePokemon(props: SinglePokemonProps) {
  const {name} = props;
  const {query} = useRouter();

  const state = useAppSelector(state => state.getPokemonByName);

  return (
    <main>
      <Header message={`Pokemon: ${name || query.name}`} />
      {state.data ? <PokemonKeyValue {...state.data} /> : null}
    </main>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({params}) => {
  const name = params?.name as string;

  if (!name) {
    return {
      redirect: {
        statusCode: 404,
      },
      props: {
        name,
      },
    };
  }

  store.dispatch(getPokemonByNameActions.load({name}));
  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();

  return {
    props: {
      name: params?.name,
    },
  };
});
