import React from 'react';

export default class productDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  getDetails() {
    fetch('api/grades/:productId')
      .then(res => res.json())
      .then(data => this.setState({ product: data }))
      .catch(err => console.error(err.message));
  }

  get

  render() {
    const p = this.state.product;

    return (
      <div onLoad={this.getDetails} className="container col-10 p-5" >
        <img src={p.image} className="" alt="" />
        <div className="">
          <h5 className="card-title">
            {p.name}
          </h5>
          <h6 className="card-subtitle text-muted mb-2">
            {(p.price / 100).toFixed(2)}
          </h6>
          <p className="card-text">
            {p.longDescription}
          </p>
        </div>
      </div>
    );
  }
}
