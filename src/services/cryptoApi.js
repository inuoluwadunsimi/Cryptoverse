
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
     'X-RapidAPI-Key': '63b578b760mshfedf9a0a0d958acp1a0d33jsn0631018cb078'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) =>({url,headers:cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCrptos:builder.query({
            query:()=> createRequest('/coins')
        })
    })
})

export const{
    useGetCrptosQuery,
} = cryptoApi