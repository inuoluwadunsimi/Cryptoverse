import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
 
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '63b578b760mshfedf9a0a0d958acp1a0d33jsn0631018cb078'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) =>({url,headers:cryptoNewsHeaders})


export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi