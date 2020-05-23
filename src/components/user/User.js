import React from 'react';

export function UserIndex() {
	return (
		<div class="container">
			<h3 class="mb-3">Users</h3>
			<ul class="list-group">
				<a class="list-group-item" href="/users/show">
					List users
				</a>
				<a class="list-group-item" href="/users/search">
					Search users
				</a>
				<a class="list-group-item" href="/users/create">
					Create a new user
				</a>
			</ul>
		</div>
	);
}

export function UserShow() {
	return (
		<div className="container">
			<h3>List user in library</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<table className="table">
				<thead>
					<tr>
						<th>ID </th>
						<th>Avatar</th>
						<th>Name</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>ID User</th>
						<td>
							<img
								src="/codersx-big.jpg"
								width="50px"
								height="50px"
								alt="avater user"
							/>
						</td>
						<td>Username</td>
						<td>
							<span>&nbsp;</span>
							<a href="###">Delete</a>
							<span> </span>
							<a href="###">Update</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export function UserSearch() {
	return (
		<div className="container">
			<h3>Seach your users</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<form action="###" method="get">
				<div className="form-group d-flex">
					<input
						className="form-control mr-2"
						type="text"
						name="name"
						placeholder="Your name"
					/>
					<button className="btn btn-primary">Search</button>
				</div>
			</form>
		</div>
	);
}

export function UserUpdate() {
	return (
		<div class="container">
			<h3>Update your user</h3>
			<a class="d-inline-block mb-2" href="###">
				Back
			</a>
			<form action="###" method="post">
				<div class="form-group">
					<input
						class="form-control"
						type="text"
						name="name"
						placeholder="Your new name"
					/>
				</div>
				<button class="btn btn-primary">Update</button>
			</form>
		</div>
	);
}

export function UserCreate() {
	return (
		<div className="container">
			<h3>Create new user</h3>
			<a className="d-inline-block mb-2" href="/users">
				Back
			</a>
			<form action="/users/create" method="post">
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
				<button className="btn btn-primary">Create</button>
			</form>
		</div>
	);
}
