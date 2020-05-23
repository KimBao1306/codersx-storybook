import React from 'react';
import './Cart.css';

export default function Cart() {
	return (
		<div className="container">
			<div className="card shopping-cart">
				<div className="card-header bg-dark text-light">
					<i className="fa fa-shopping-cart" aria-hidden="true">
						Shopping cart
					</i>
					<div className="clearfix"></div>
				</div>
				<div className="card-body">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-2 text-center">
							<img
								className="img-responsive"
								src="/codersx-big.jpg"
								alt="prewiew"
								width="120"
								// height="80"
							/>
						</div>
						<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6 d-flex flex-column justify-content-between">
							<h4 className="product-name">
								<strong>Title book</strong>
							</h4>
							<h4>
								<span>Description: </span>
								<small>Description</small>
							</h4>
							<h4>
								<span>Shop: </span>
								<small>Admin</small>
							</h4>
						</div>
						<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
							<div
								className="col-12 col-sm-12 col-md-12 text-md-right"
								style={{paddingTop: '5px'}}
							></div>
							<hr />
						</div>
					</div>
					<div className="d-flex justify-content-end" style={{margin: '10px'}}>
						<a className="btn btn-success pull-right" href="###">
							Checkout
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
