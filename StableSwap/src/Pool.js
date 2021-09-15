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
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



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

function Pool() {

	// get dogs from server via fetch in ComponentDidMount or UseEffect
	// get json and reder with for loop
  
	return (

		<Container>
  			<Row md={4}>
    			<Col xs={12} md={6}>
					<Card border="info">
						<Card.Header>
							<Nav variant="tabs" defaultActiveKey="#first">
							<Nav.Item>
								<Nav.Link href="#first">Provide</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#link">Withdraw</Nav.Link>
							</Nav.Item>
							
							</Nav>
						</Card.Header>
						<Card.Body>
							<Card.Title>Create LP</Card.Title>
							<div>
								<Card className="text-center">
									
									<Card.Body>
											
										<InputGroup className="mb-3">
											<DropdownButton
												variant="outline-secondary"
												
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
												id="input-group-dropdown-1"
											>
											<Dropdown.Item href="#">UST</Dropdown.Item>
											<Dropdown.Item href="#">USDT</Dropdown.Item>
											<Dropdown.Item href="#">USCD</Dropdown.Item>
											</DropdownButton>
											<FormControl aria-label="Text input with dropdown button" />
										</InputGroup>
											</Card.Body>
									</Card>
								</div>
								
								<Button variant="primary">Create your LP token</Button>
							</Card.Body>
					</Card>
  				</Col>

    			<Col xs={12} md={6}>
				<Card border="info">
						<Card.Header>
							<Nav variant="tabs" defaultActiveKey="#first">
							<Nav.Item>
								<Nav.Link href="#first">Stake</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#link">Unstake</Nav.Link>
							</Nav.Item>
							
							</Nav>
						</Card.Header>
						<Card.Body>
							<Card.Title>Stake LP</Card.Title>
							<div>
								<Card className="text-center">
									
									<Card.Body>
											
										<InputGroup className="mb-3">
											<DropdownButton
												variant="outline-secondary"
												
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
												id="input-group-dropdown-1"
											>
											<Dropdown.Item href="#">UST</Dropdown.Item>
											<Dropdown.Item href="#">USDT</Dropdown.Item>
											<Dropdown.Item href="#">USCD</Dropdown.Item>
											</DropdownButton>
											<FormControl aria-label="Text input with dropdown button" />
										</InputGroup>
											</Card.Body>
									</Card>
								</div>
								
								<Button variant="primary">Stake your LP token</Button>
							</Card.Body>
					</Card>
				</Col>
  			</Row>
		</Container>


	  
	);
  }
  
  export default Pool;
  