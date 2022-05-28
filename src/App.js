import logo from './logo.svg';
import './App.css';
import ShoesStore from './components/ShoesStore';
import { Button, Container, Typography } from '@mui/material';
import ProductItem from './components/ProductItem';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant='h3' align='center'>
          Shoes Shop
        </Typography>
        <ShoesStore />
      </Container>
    </div>
  );
}

export default App;
