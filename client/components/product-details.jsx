import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    fetch(`api/products/${this.props.productId}`)
      .then(res => res.json())
      .then(data => this.setState({ product: data }))
      .catch(err => console.error(err.message));
  }

  render() {
    if (this.state.product) {
      const p = this.state.product;
      return (
        <div className="container col-10 p-5">
          <div key={p.productId} className="container-fluid details-main-container card">
            <a onClick={() => this.props.setView('catalog', {})} className="my-3">{'<- Back to catalog'}</a>
            <div className="details-container container-fluid d-flex flex-wrap">
              <div className="details-img col-7 mb-5 card">
                <img src={p.image} className="pDImg" />
              </div>
              <div className="details-short col-5">
                <h1 className="details-title">{p.name}</h1>
                <p className="details-price">{`$${(p.price / 100).toFixed(2)}`}</p>
                <p>{p.shortDescription}</p>
                <b type="button" className="btn btn-primary" >Add to cart</b>
              </div>
              <div className="details-long col-12">{p.longDescription}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
