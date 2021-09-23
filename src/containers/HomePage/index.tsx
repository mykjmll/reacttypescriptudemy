import React from 'react';
import { Partners } from '../../components/Partners';
import { ShopQuality } from '../../components/ShopQuality';
import BestSellerPage from '../BestSellerPage';
import './style.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <div className="cover-image"></div>
        <ShopQuality />
        <BestSellerPage />
        <Partners />
      </div>
    )
  }
}

export default HomePage;