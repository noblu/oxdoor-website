import { apiSlice } from '../api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder: { query: (arg0: { query: (() => string) | (() => string); transformResponse: ((responseData: any) => any) | ((responseData: any) => any); }) => any; }) => ({
        getCollections: builder.query({
        query: () =>
        'marketplace/globalCollections?take=100&skip=0&category=collections',
        transformResponse: (responseData: any) => responseData.items
        }),
       getNfts: builder.query({
      query: () => 'marketplace/browse?category=nfts&take=100&skip=0',
      transformResponse: (responseData: any) => {
        const { items } = responseData;
        const loadedNfts = items?.map((data: any) => {
          // console.log(data, 'nft');
          return data;
        });
        return loadedNfts;
      },
    })
})
})

export const {useGetCollectionsQuery, useGetNftsQuery} =  extendedApiSlice