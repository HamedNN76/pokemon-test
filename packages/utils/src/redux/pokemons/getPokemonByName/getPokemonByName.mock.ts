import PokeAPI from 'pokedex-promise-v2';

export const getPokemonByNameMock: PokeAPI.Pokemon = {
  abilities: [
    {ability: {name: 'inner-focus', url: 'https://pokeapi.co/api/v2/ability/39/'}, is_hidden: false, slot: 1},
    {ability: {name: 'infiltrator', url: 'https://pokeapi.co/api/v2/ability/151/'}, is_hidden: true, slot: 3},
  ],
  base_experience: 159,
  forms: [{name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon-form/42/'}],
  game_indices: [
    {game_index: 130, version: {name: 'red', url: 'https://pokeapi.co/api/v2/version/1/'}},
    {game_index: 130, version: {name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/'}},
  ],
  height: 16,
  held_items: [],
  id: 42,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/42/encounters',
  moves: [
    {
      move: {name: 'dual-wingbeat', url: 'https://pokeapi.co/api/v2/move/814/'},
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/'},
          version_group: {name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/'},
        },
      ],
    },
  ],
  name: 'golbat',
  order: 74,
  past_types: [],
  species: {name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon-species/42/'},
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png',
    back_female: null,
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/42.png',
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/42.png',
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/42.png',
    front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/42.png',
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg',
        front_female: null,
      },
      home: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png',
        front_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/42.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/42.png',
        front_shiny_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/42.png',
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/42.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/42.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/42.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/42.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/42.png',
        },
        yellow: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/42.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/42.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/42.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/42.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/42.png',
        },
      },
      'generation-ii': {
        crystal: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/42.png',
          back_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/42.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/42.png',
          front_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/42.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/42.png',
        },
        gold: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/42.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/42.png',
        },
        silver: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/42.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/42.png',
        },
      },
      'generation-iii': {
        emerald: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/42.png',
        },
        'firered-leafgreen': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/42.png',
        },
        'ruby-sapphire': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/42.png',
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/42.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/42.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/42.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/42.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/42.png',
        },
        'heartgold-soulsilver': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/42.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/42.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/42.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/42.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/42.png',
        },
        platinum: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/42.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/42.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/42.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/42.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/42.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/42.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/42.png',
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/42.gif',
            back_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/42.gif',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/42.gif',
            back_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/42.gif',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/42.gif',
            front_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/42.gif',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/42.gif',
            front_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/42.gif',
          },
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/42.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/42.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/42.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/42.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/42.png',
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/42.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/42.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/42.png',
        },
        'x-y': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/42.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/42.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/42.png',
        },
      },
      'generation-vii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/42.png',
          front_female: null,
        },
        'ultra-sun-ultra-moon': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/42.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/42.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/42.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/42.png',
        },
      },
      'generation-viii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/42.png',
          front_female: null,
        },
      },
    },
  },
  stats: [
    {base_stat: 75, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
    {base_stat: 80, effort: 0, stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'}},
    {base_stat: 70, effort: 0, stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'}},
    {base_stat: 65, effort: 0, stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'}},
    {base_stat: 75, effort: 0, stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'}},
    {base_stat: 90, effort: 2, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
  ],
  types: [
    {slot: 1, type: {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'}},
    {slot: 2, type: {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}},
  ],
  weight: 550,
};
