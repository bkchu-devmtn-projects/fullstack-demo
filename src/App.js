import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { products: [] };

  componentDidMount() {
    axios.get('/api/products').then(response => {
      console.log('response.data: ', response.data);
      this.setState({ products: response.data });
    });
  }

  render() {
    let productsDisplay = this.state.products.map(product => {
      return (
        <p key={product.product_id}>{`${product.name} ${
          product.description
        }`}</p>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {productsDisplay}
      </div>
    );
  }
}

export default App;
