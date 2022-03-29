import React from 'react'
import { useState } from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'
import {useGetCrptosQuery} from '../services/cryptoApi'



function Cryptocurrencies() {


  const {data:cryptosList,isFetching}= useGetCrptosQuery() 

  const [cryptos,setCryptos] = useState(cryptosList?.data?.coins)

  console.log(cryptos)

  return (
   <>
      <Row gutters={[32,32]} className="crypto-card-container">
        {cryptos.map((currency)=>(
          <Col xs={24} sm={12}  lg={6}  key={currency.id} className="crypto-card">
            <Link to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image src={currency.iconUrl}' alt={currency.name}/>} hoverable>
                <p>price:{millify(currency.price)}</p>
                <p>Market Cap:{millify(currency.marketCap)}</p>
                <p>Daily Change:{millify(currency.dailyChange)}</p>
              </Card>
            </Link>

            
             </Col>
        ))}

        </Row> 
   
   </>
  )
}

export default Cryptocurrencies