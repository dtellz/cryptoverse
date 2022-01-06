import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidap-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a0df2c06d9msh26a4fea4c271996p1e5803jsn80e94b0c1086'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query(
            {
                query: (count) => createRequest(`/coins?limit=${count}`)
            }
        )
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi;

/* let options = {
    method:  'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchanges',
    headers: {
        'x-rapidap-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'asdadaDAWDASDASDAsd'
    }
} */
