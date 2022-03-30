import React from 'react'
import millify from 'millify'
import {Typography,Row,Col,Statistic} from 'antd'
import {Link} from 'react-router-dom'
import { useGetCrptosQuery } from '../services/cryptoApi'
import  {Cryptocurrencies,News} from '../components'


const {Title} = Typography

function Homepage() {
  

  const {data,isFetching}= useGetCrptosQuery(10)

  const globalStats = data?.data?.stats

  if(isFetching) return 'Loading...'
  return (
   <>
     <Title level={2} className="heading"> Global Crypto Stats</Title>
     <Row>
         <Col span={12}> <Statistic title="Total Crptocurrencies" value={globalStats.total}/></Col>
         <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
         <Col span={12}> <Statistic title="Total Market Cap " value={millify(globalStats.totalMarketCap)}/></Col>
         <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
         <Col span={12}> <Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)}/></Col>
     </Row>
     <div className="home-heading-container">
        <Title level={2} className="home-title"> Top 10 Cryptocurrencies in the World</Title>
        <Title level={2} className="show-more"> <Link to="/cryptocurrencies">Show more</Link> </Title>
     </div>
     <Cryptocurrencies simplified/>
     <div className="home-heading-container">
        <Title level={2} className="home-title"> Latest Cryptocurrency News</Title>
        <Title level={2} className="show-more"> <Link to="/news">Show more</Link> </Title>
     </div>
     <News simplified/>
   
   </>
  )
}

export default Homepage