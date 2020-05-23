import React from 'react';

export default function Profile() {
	return (
		<div className="container">
			<h3>Update your profile</h3>
			<a className="d-inline-block mb-2" href="###">
				Back
			</a>
			<div className="text-center">
				<img
					className="rounded"
					src="/codersx-big.jpg"
					style={{width: '64px'}}
					alt="avatar user"
				/>
			</div>
			<form action="###" method="post" encType="multipart/form-data">
				<div className="form-group">
					<label>Email</label>
					<input
						className="form-control"
						type="email"
						name="email"
						placeholder="Your Email"
						readOnly="readonly"
					/>
				</div>
				<div className="form-group">
					<label>Name</label>
					<input
						className="form-control"
						type="text"
						name="name"
						placeholder="Your new name"
					/>
				</div>
				<div className="form-group">
					<label>Avatar</label>
					<input className="form-control-file" type="file" name="avatar" />
				</div>
				<button className="btn btn-primary">Update</button>
			</form>
		</div>
	);
}
