import React from 'react';

export function BookIndex() {
	return (
		<div className="container">
			<h3 className="mb-3">Books</h3>
			<ul className="list-group">
				<a className="list-group-item" href="###">
					List books
				</a>
				<a className="list-group-item" href="###">
					Search books
				</a>
			</ul>
		</div>
	);
}

export function BookShow() {
	return (
		<div className="container">
			<h3>Title</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Cover Book</th>
						<th>Title</th>
						<th>Description</th>
						<th>Shop</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ID book</td>
						<td>
							<img
								src="/codersx-big.jpg"
								width="50px"
								height="50px"
								alt="book cover"
							/>
						</td>
						<td>Title book</td>
						<td>Description book</td>
						<td>Shop name</td>
						<td>
							<a className="text-success" href="###">
								Add to cart
							</a>
							<br />
							<a className="text-danger" href="###">
								Delete
							</a>
							<span>&nbsp;</span>
							<a href="###">Update</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export function BookSearch() {
	return (
		<div className="container">
			<h3>Seach your books</h3>
			<a className="d-inline-block mb-2" href="##">
				Back
			</a>
			<form method="get">
				<div className="form-group d-flex">
					<input
						className="form-control mr-2"
						type="text"
						name="keyword"
						placeholder="Your keyword"
					/>
					<button className="btn btn-primary">Search</button>
				</div>
			</form>
		</div>
	);
}

export function BookUpdate() {
	return (
		<div className="container">
			<h3>Update your books</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<div className="alert alert-danger">Alert</div>
			<form method="post">
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						name="title"
						placeholder="Your new title"
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						name="desc"
						placeholder="Your new description"
					/>
				</div>
				<button className="btn btn-primary">Update</button>
			</form>
		</div>
	);
}

export function BookCreate() {
	return (
		<div className="container">
			<h3>Create new book</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<form method="post" encType="multipart/form-data">
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						name="title"
						placeholder="Title Book"
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						name="desc"
						placeholder="Description Book"
					/>
				</div>
				<div className="form-group">
					<input className="form-control-file" type="file" name="cover" />
				</div>
				<button className="btn btn-primary">Create</button>
			</form>
		</div>
	);
}
