import logo from './logo.svg';
import './App.css';
import ShoesStore from './components/ShoesStore';
import { Button, Container } from '@mui/material';
import ProductItem from './components/ProductItem';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className='site-header' align='center'>Shoes Store</h1>
        <ShoesStore />
      </Container>
    </div>
  );
}

export default App;
