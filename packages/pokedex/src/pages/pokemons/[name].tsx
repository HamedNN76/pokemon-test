import {Header} from 'components';
import {useRouter} from 'next/router';

export default function SinglePokemon() {
  const {query} = useRouter();

  return <Header message={`Pokemon: ${query.name}`} />;
}
