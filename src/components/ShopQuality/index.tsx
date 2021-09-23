import React from 'react';
import './style.css';

export const ShopQuality: React.FC = () => {
  return (
    <div className="shop-quality-container">
      <div className="quality-item-container">
        <div className="img-container support-local"></div>
        <h3>Support Local</h3>
        <p>All materials comes from local producers. Together we ca create a stronger and better community.</p>
      </div>
      <div className="quality-item-container">
        <div className="img-container high-quality"></div>
        <h3>High Quality</h3>
        <p>All materials used are high quality and proves to last for many years.</p>
      </div>
      <div className="quality-item-container">
        <div className="img-container eco-friendly"></div>
        <h3>Eco Friendly</h3>
        <p>Rest assured that the process and materials used will never harm or environment.</p>
      </div>
    </div>
  )
}