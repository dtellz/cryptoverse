import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a0df2c06d9msh26a4fea4c271996p1e5803jsn80e94b0c1086'
}


const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query(
            {
                query: (count) => createRequest(`/coins?limit=${count}`)
            }
        ),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;

/* let options = {
    method:  'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchanges',
    headers: {
        'x-rapidap-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'asdadaDAWDASDASDAsd'
    }
} */
