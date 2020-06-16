import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => this.setState({ product: data }))
      .catch(err => console.error(err.message));
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    const v = this.state.view;
    const display = v.name === 'catalog'
      ? <ProductList setView={this.setView} />
      : <ProductDetails setView={this.setView} productId={this.state.view.params.productId} />;
    return (
      <div>
        <Header />
        {display}
      </div>
    );
  }
}
