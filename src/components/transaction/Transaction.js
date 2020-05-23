import React from 'react';

export function TransactionIndex() {
	return (
		<div className="container">
			<h3 className="mb-3">Transaction</h3>
			<div className="list-group">
				<a className="list-group-item" href="###">
					List transaction
				</a>
			</div>
		</div>
	);
}

export function TransactionShow() {
	return (
		<div className="container">
			<h3>List transaction</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Username</th>
						<th>Book</th>
						<th>Complete</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>ID Transaction</th>
						<td>Username</td>
						<td>Book</td>
						<td>Complete </td>
						<td>
							<span>&nbsp;</span>
							<a href="###">Delete</a>
							<span>&nbsp;</span>
							<a href="###">Update</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export function TransactionUpdate() {
	return (
		<div className="container">
			<h3>Update your transaction</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<form action="###" method="post">
				<div className="form-group input-group">
					<div className="input-group-prepend">
						<label className="input-group-text">Is Complete?</label>
					</div>
					<select className="custom-select" id="complete" name="isComplete">
						<option value="1">True</option>
						<option value="0">False</option>
					</select>
				</div>
				<button className="btn btn-primary">Update</button>
			</form>
		</div>
	);
}

export function TransactionCreate() {
	return (
		<div className="container">
			<h3>Create new transaction</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<form action="###" method="post">
				<div className="form-group input-group">
					<div className="input-group-prepend">
						<label className="input-group-text">Name</label>
					</div>
					<select className="custom-select" name="user" id="user">
						<option value="id user">Username</option>
					</select>
				</div>
				<div className="form-group input-group">
					<div className="input-group-prepend">
						<label className="input-group-text">Book</label>
					</div>
					<select className="custom-select" name="book">
						<option value="id book">Title Book</option>
					</select>
				</div>
				<button className="btn btn-primary">Create</button>
			</form>
		</div>
	);
}
