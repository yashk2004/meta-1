# Real Estate NFT DApp

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)


# META MANSION 🏠

A **Decentralized** **Property Buying Platform** for buying and selling properties using blockchain technology. Combining the security and transparency of **Solidity** smart contracts with the user-friendliness of **React** on the frontend, this project aims to revolutionize the real estate industry.

## 🚀 Key Features

- **Smart Contracts**: Implemented using **Solidity** to ensure secure and transparent property transactions.
- **NFT Integration**: Properties are tokenized as NFTs, ensuring ownership can be verified and transferred securely.
- **IPFS for Decentralization**: Property data is stored securely and decentrally using **IPFS**, ensuring the security and immutability of property listings.
- **Fake Accounts**: Created accounts loaded with 1000 Ethers for testing and demonstration purposes.
- **Wallet Integration**: Users can connect their wallets (like MetaMask) for seamless property transactions.
- **Agent Contract**: A specialized smart contract for property agents to facilitate and manage transactions.

## 🛠️ Technology Stack & Tools

- **Solidity**: Writing Smart Contracts and Tests [version 0.8.27].
- **Javascript**: Frontend development using **React**.
- **Hardhat**: Development and testing framework for Ethereum [version 2.22.13].
- **Ethers.js**: Blockchain interaction [version  5.7.2].
- **React.js**: Frontend framework for interactive and dynamic interfaces.
- **Node.js**: Backend and package management.
- **IPFS**: Decentralized storage for property data.
- **HTML & CSS**: For building the client-side interface.

## 📋 Requirements For Initial Setup

- Install **Node.js**: [Download Node.js](https://nodejs.org/)

## ⚙️ Setup Guide

### 1. Clone/Download the Repository

```bash
git clone https://github.com/yashk2004/META-MANSION.git
cd META-MANSION. 
```
## Install Dependencies
```bash
npm install ethers@5.7.2
npm install --save-dev hardhat
```
## Run Tests
```bash
npx hardhat test
```
## Start Hardhat Node
```bash
npx hardhat node
```
## Deploy Smart Contracts
```bash
npx hardhat run ./scripts/deploy.js --network localhost
```
## Connect the Wallet

## Start Frontend
```bash
npm run start
```
## 📝 Project Details

- **NFT Creation**: Property listings are minted as NFTs on the Ethereum blockchain, allowing for secure ownership transfers.
- **IPFS Storage**: Property data (JSON format) is stored using IPFS to ensure decentralized and secure listings.
- **React Frontend**: An intuitive and interactive frontend using **React.js** for a smooth user experience.
- **Testing with Fake Ethers**: Simulated accounts with 1000 ethers each for testing real-world scenarios in a sandbox environment.

## Connect wallets
 To connect the wallet you have to join the personal network 
 -1. add the network manually
  give network name
  rpc url when u start the node it will show a link  http://127.0.0.1:8545/ like this
  chain id is - 31337
  currency symbol can be anything..

 -2. after adding it go again in network and choose the network you add it will show the property.
 -3. go on account and add the account, and then import the accout with the private key your code has given in cmd.

 Here you go now the buy can be appear as the escrow contract and real estate address is recognized.
## 💡 How It Works

- **Property Listings**: Users can list their properties by uploading details through the frontend. Data is stored securely using IPFS.
- **Buying/Selling Properties**: Properties are minted as NFTs, and ownership can be transferred between wallets using the smart contract.
- **Agent Contract**: A dedicated agent contract is included to manage property sales and ensure transparency in the transaction process.

## 📧 Contact & Feedback

Feel free to provide feedback or ask any questions! Reach out to me via [yashadi04@gmail.com].


