import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import React from 'react';
import { AllProductDispatchToProps, AllProductOwnProps, AllProductPageProps, AllProductStateProps } from './interface';
import { StoreStateType } from '../../store/rootReducer';
import { ProductCard } from '../../components/ProductCard';
import './style.css';
import ShopAction from '../../store/actions/shopAction';
import { AllProductsSidebar } from '../../components/AllProductsSidebar';
import UserAction from '../../store/actions/userAction';

class AllProductsPage extends React.Component<AllProductPageProps> {
  componentDidMount() {
    const { fetchShopProducts, shopProducts, fetchShopProductsAndFilters } = this.props;
    if(!shopProducts.products.length) {
      fetchShopProducts({});
      fetchShopProductsAndFilters();
    }
  }

  renderAllProducts = () => {
    const { shopProducts } = this.props
    return shopProducts.products.map(({title, variants, id}) => {
      return (
        <div key={id} className="product-item-container">
          <ProductCard name={title} url={variants[0].image} />
        </div>
      )
    })
  }

  render() {
    const { productFilters, userFilters, updateUserFilters } = this.props;
    return (
      <div className="all-products-page-container">
        <AllProductsSidebar productFilters={productFilters} userFilters={userFilters} onUpdateUserFilters={updateUserFilters} />
        <div className="all-products-container">
          <div className="all-products">
            {this.renderAllProducts()}
          </div>  
        </div>  
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<AllProductStateProps, AllProductOwnProps, StoreStateType> = state => {
  const { shopProducts, productFilters } = state.shop
  const { filters } = state.user
  return {
    shopProducts,
    productFilters,
    userFilters: filters,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<AllProductDispatchToProps, AllProductOwnProps> = dispatch => {
  const { fetchShopProducts, fetchShopProductsAndFilters } = new ShopAction();
  const { updateUserFilters } = new UserAction();
  return {
    fetchShopProducts: option => dispatch(fetchShopProducts(option)),
    fetchShopProductsAndFilters: () => dispatch(fetchShopProductsAndFilters()),
    updateUserFilters: filters => dispatch(updateUserFilters(filters)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);