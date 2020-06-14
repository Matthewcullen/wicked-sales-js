import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    const p = this.props.product;
    return (
      <div className="card col-3 m-2" >
        <img src={p.image} className="card-img-top pImg" alt=""/>
        <div className="card-body">
          <h5 className="card-title">
            {p.name}
          </h5>
          <h6 className="card-subtitle text-muted mb-2">
            {(p.price / 100).toFixed(2)}
          </h6>
          <p className="card-text">
            {p.shortDescription}
          </p>
        </div>
      </div>
    );
  }
}
