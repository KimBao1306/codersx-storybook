import React from 'react';

export function Login() {
	return (
		<div className="container">
			<h3>Login</h3>
			<form action="###" method="post">
				<div className="form-group">
					<input
						className="form-control"
						type="email"
						name="email"
						placeholder="Your email"
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="password"
						name="password"
						placeholder="Your password"
					/>
				</div>
				<button className="btn btn-primary">Login</button>
			</form>
		</div>
	);
}

export function Register() {
	return (
		<div className="container">
			<h3>Register Account</h3>
			<form action="###" method="post">
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						name="name"
						placeholder="Your name"
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="email"
						name="email"
						placeholder="Your email"
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="password"
						name="password"
						placeholder="Your password"
					/>
				</div>
				<button className="btn btn-primary">Register</button>
			</form>
		</div>
	);
}
