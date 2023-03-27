import {apiPaginationToMui, defaultPaginationQuery, muiPaginationToPokemon, parsePaginationQuery} from './pagination';

describe('Pagination Util', function () {
  it('default pagination query', function () {
    expect(defaultPaginationQuery).toBeDefined();

    expect(defaultPaginationQuery.offset).toBe(0);
    expect(defaultPaginationQuery.limit).toBe(10);
  });

  it('parse pagination query', function () {
    expect(parsePaginationQuery).toBeDefined();

    expect(parsePaginationQuery()).toEqual(defaultPaginationQuery);
    expect(parsePaginationQuery({offset: 20, limit: 50})).toEqual({offset: 20, limit: 50});
    expect(parsePaginationQuery({offset: 20})).toEqual({offset: 20, limit: defaultPaginationQuery.limit});
    expect(parsePaginationQuery({limit: 10})).toEqual({offset: defaultPaginationQuery.offset, limit: 10});
  });

  it('material pagination to api pagination', () => {
    expect(muiPaginationToPokemon).toBeDefined();
    expect(muiPaginationToPokemon({page: 0, pageSize: 100})).toEqual({
      limit: 100,
      offset: 0,
    });
    expect(muiPaginationToPokemon({page: 1, pageSize: 100})).toEqual({
      limit: 100,
      offset: 100,
    });
    expect(muiPaginationToPokemon({page: 3, pageSize: 50})).toEqual({
      limit: 50,
      offset: 150,
    });
  });

  it('api pagination to material', function () {
    expect(apiPaginationToMui).toBeDefined();
    expect(apiPaginationToMui({offset: 0, limit: 100})).toEqual({page: 0, pageSize: 100});
    expect(apiPaginationToMui({offset: 100, limit: 100})).toEqual({page: 1, pageSize: 100});
    expect(apiPaginationToMui({offset: 300, limit: 100})).toEqual({page: 3, pageSize: 100});
    expect(apiPaginationToMui({offset: 200, limit: 50})).toEqual({page: 4, pageSize: 50});
  });
});
