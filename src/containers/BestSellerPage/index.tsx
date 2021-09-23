import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { ProductCard } from '../../components/ProductCard';
import ShopAction from '../../store/actions/shopAction';
import { StoreStateType } from '../../store/rootReducer';
import { BestSellerDispatchToProps, BestSellerProps, BestSellerStateProps } from './interface';
import './style.css';

class BestSellerPage extends React.Component<BestSellerProps> {
  componentDidMount() {
    const { fetchBestSeller, bestSeller } = this.props;
    if(!bestSeller.length) {
      fetchBestSeller();
    }
  }
  renderBestSeller = () => {
    const { bestSeller } = this.props;
    return bestSeller.map(({title, id, variants}) => {
      return (
        <ProductCard key={id} url={variants[0].image} name={title} />
      )
    });
  }

  render() {
    return (
      <div className="best-seller-container">
        <h2>Best Seller</h2>
        <div className="best-seller-products">
          {this.renderBestSeller()}
        </div>
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<BestSellerStateProps, {}, StoreStateType> = state => {
  return {
    bestSeller: state.shop.bestSeller
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<BestSellerDispatchToProps, {}> = dispatch => {
  const { fetchBestSeller } = new ShopAction();
  return {
    fetchBestSeller: () => dispatch(fetchBestSeller()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BestSellerPage);