import {HomeContainer} from 'components';
import {Head} from '@pokedex/components/Head';

export default function Home() {
  return (
    <HomeContainer>
      <Head title="All Pokemons" description="Fetch all the pokemons" />
    </HomeContainer>
  );
}
