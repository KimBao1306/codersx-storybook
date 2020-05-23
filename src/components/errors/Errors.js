import React from 'react';
import './Errors.css';

export function Error404() {
	return (
		<>
			<section>
				<div className="error-page d-flex align-items-center justify-content-around">
					<h2 className="headline text-warning">404</h2>
					<div className="error-content">
						<h3>Oops! Page not found.</h3>
						<p className="m-0">
							We could not find the page you were looking for. You can{' '}
							<a href="/">return to homepage.</a>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export function Error500() {
	return (
		<>
			<section>
				<div className="error-page d-flex align-items-center justify-content-around">
					<h2 className="headline text-danger">500</h2>
					<div className="error-content">
						<h3>Oops! Something went wrong</h3>
						<p className="m-0">
							We will work on fixing that right away.You can{' '}
							<a href="/">return to homepage.</a>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
