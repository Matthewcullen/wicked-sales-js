import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'catalog',
      params: {}
    };
  }

  setview(name, params) {
    this.setState({
      name: name,
      params: params
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ProductList />
      </div>
    );
  }
}
