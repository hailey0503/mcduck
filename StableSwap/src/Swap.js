import { NetworkInfo, WalletProvider } from '@terra-money/wallet-provider';
import { ConnectSample } from 'components/ConnectSample';
import { QuerySample } from 'components/QuerySample';
import { TxSample } from 'components/TxSample';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import { Form, Button, FormGroup, FormControl} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


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

function Swap() {

	// get dogs from server via fetch in ComponentDidMount or UseEffect
	// get json and reder with for loop
  
	return (
		<container>
		
			<div>
				<Card className="text-center">
					<Card.Header>Swap your stable coins</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							
					<InputGroup className="mb-3">
						<DropdownButton
							variant="outline-secondary"
							title="From"
							id="input-group-dropdown-1"
						>
						<Dropdown.Item href="#">UST</Dropdown.Item>
						<Dropdown.Item href="#">USDT</Dropdown.Item>
						<Dropdown.Item href="#">USCD</Dropdown.Item>
						</DropdownButton>
						<FormControl aria-label="Text input with dropdown button" />
					</InputGroup>

					<InputGroup className="mb-3">
						<DropdownButton
							variant="outline-secondary"
							title="To"
							id="input-group-dropdown-1"
						>
						<Dropdown.Item href="#">UST</Dropdown.Item>
						<Dropdown.Item href="#">USDT</Dropdown.Item>
						<Dropdown.Item href="#">USCD</Dropdown.Item>
						</DropdownButton>
						<FormControl aria-label="Text input with dropdown button" />
					</InputGroup>
						</Card.Body>
						<Card.Footer className="text-muted">2 days ago</Card.Footer>
				</Card>
			</div>
		</container>
	);
  }
  
  export default Swap;
  