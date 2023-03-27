export type TPaginationQuery = {
  offset: number;
  limit: number;
};

export type TMuiPaginationQuery = {
  page: number;
  pageSize: number;
};

export const defaultPaginationQuery: TPaginationQuery = {
  offset: 0,
  limit: 10,
};

export function parsePaginationQuery(params?: any): TPaginationQuery {
  if (!params) {
    return defaultPaginationQuery;
  }
  const offset = params.offset || defaultPaginationQuery.offset;
  const limit = params.limit || defaultPaginationQuery.limit;

  return {
    offset: Number(offset),
    limit: Number(limit),
  };
}

export function muiPaginationToPokemon(params: TMuiPaginationQuery): TPaginationQuery {
  return {
    offset: params.page * params.pageSize,
    limit: params.pageSize,
  };
}

export function apiPaginationToMui(params: Partial<TPaginationQuery>): TMuiPaginationQuery {
  const offset = params.offset || defaultPaginationQuery.offset;
  const limit = params.limit || defaultPaginationQuery.limit;

  return {
    page: offset / limit,
    pageSize: limit,
  };
}
