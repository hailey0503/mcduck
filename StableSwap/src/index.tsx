import { NetworkInfo, WalletProvider } from '@terra-money/wallet-provider';
import { ConnectSample } from 'components/ConnectSample';
import { QuerySample } from 'components/QuerySample';
import { TxSample } from 'components/TxSample';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Swap from "./Swap.js"
import Pool from "./Pool.js"
import Govern from "./Govern.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Form, Button, FormGroup, FormControl} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const mainnet = {
  name: 'mainnet',
  chainID: 'columbus-4',
  lcd: 'https://lcd.terra.dev',
};

const testnet = {
  name: 'testnet',
  chainID: 'tequila-0004',
  lcd: 'https://tequila-lcd.terra.dev',
};

const walletConnectChainIds: Record<number, NetworkInfo> = {
  0: testnet,
  1: mainnet,
};




function App() {
  return (
    <Router>
      <div>
        <nav>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">StableSwap</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">SWAP</Nav.Link>
              <Nav.Link href="/Pool">POOL</Nav.Link>
              <Nav.Link href="/Govern">GOVERN</Nav.Link>
            </Nav>          
            <Button variant="outline-info">WalletConnect</Button> 
          </Navbar>
        </nav>
        <Switch>
          <Route path="/Pool">
            <Pool />
          </Route>
          <Route path="/Govern">
            <Govern />
          </Route>
          <Route path="/">
            <Swap />
          </Route>
        </Switch>
      </div>
      <main
      style={{ margin: 20, display: 'flex', flexDirection: 'column', gap: 40 }}
    >
      
      //components
    
      <ConnectSample />
      <QuerySample />
      <TxSample />
    </main>
    </Router>
  );
}

ReactDOM.render(
  <WalletProvider
    defaultNetwork={mainnet}
    walletConnectChainIds={walletConnectChainIds}
  >
    <App />
  </WalletProvider>,
  document.getElementById('root'),
);
