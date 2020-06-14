import React from 'react';
import Item from './product-list-item';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };

  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
      .catch(err => console.error(err.message));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm"><Item /></div>
          <div className="col-sm"><Item /></div>
          <div className="col-sm"><Item /></div>
        </div>
        <div className="row">
          <div className="col-sm"><Item /></div>
          <div className="col-sm"><Item /></div>
          <div className="col-sm"><Item /></div>
        </div>
      </div>
    );
  }
}
