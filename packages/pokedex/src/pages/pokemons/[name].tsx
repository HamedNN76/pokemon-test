import {Header} from 'components';
import {useRouter} from 'next/router';
import {wrapper} from '@pokedex/redux/store';

export type SinglePokemonProps = {
  name: string;
};

export default function SinglePokemon(props: SinglePokemonProps) {
  const {name} = props;
  const {query} = useRouter();

  return <Header message={`Pokemon: ${name || query.name}`} />;
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({params}) => {
  return {
    props: {
      name: params?.name,
    },
  };
});
