
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_HOST,
     'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url,headers:cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCrptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCrptoDetails:builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`),
        }),
        getCrptoHistory:builder.query({
            query:({coinId,timePeriod})=> createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
        })
       
    })
})

export const{
    useGetCrptosQuery,
    useGetCrptoDetailsQuery,
    useGetCrptoHistoryQuery,
    
} = cryptoApi