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

function Swap() {

	// get dogs from server via fetch in ComponentDidMount or UseEffect
	// get json and reder with for loop
  
	return (
		<container>
			<div class="container">
        		<div class="row">
            		<div class="col-md-8 col-lg-4 B">
                		<div class="card card-inverse card-primary">
                   
                		</div>
           		</div>
            <div class="col-md-4 col-lg-3 G">
                <div class="row h-100">
                    <div class="col-md-6 col-lg-6 B h-50 pb-3">
                        <div class="card card-inverse card-success h-100">

                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 B h-50 pb-3">
                        <div class="card card-inverse bg-success h-100">

                        </div>
                    </div>
                    <div class="col-md-12 h-50">
                        <div class="card card-inverse bg-danger h-200">
							<div>
								<Card className="text-center">
									<Card.Header>Swap your stable coins</Card.Header>
										<Card.Body>
											<Card.Title></Card.Title>
											
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
										<Card.Footer className="text-muted">
										<Button variant="outline-success">Swap</Button>{' '}
										</Card.Footer>
								</Card>
							</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
			
		</container>
	);
  }
  
  export default Swap;
  