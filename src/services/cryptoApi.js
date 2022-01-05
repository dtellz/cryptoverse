import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidap-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'asdadaDAWDASDASDAsd'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query(
            {
                query: () => createRequest('/coins')
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
