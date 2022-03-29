
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {Layout, Typography,Space} from 'antd'
import {Navbar,Exchanges,News,CryptoDetails,Cryptocurrencies,Homepage} from './components';
import './App.css';

function App() {
  return (
    
    <div className='app'>
      <Router>
      <div className="navbar">
        <Navbar />

      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes >
            
              <Route exact path="/" element={  <Homepage/>}/>
              <Route exact path="/exchanges" element={  <Exchanges/>}/>
              <Route exact path="/cryptocurrencies" element={  <Cryptocurrencies/>}/>
              <Route exact path="/crypto/:coinId" element={  <CryptoDetails/>}/>
              <Route exact path="/news" element={<News/>}/>
              </Routes>
            
          </div>
        </Layout>

      <div className="footer">
        <Typography.Title  level={5} style={{color:'white',textAlign:'center'}}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>

      </div>
      </div>
      </Router>
      
    </div>
  );
}

export default App;
