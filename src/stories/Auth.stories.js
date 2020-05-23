import React from 'react';
import {Login, Register} from '../components/auth/Auth';

export default {
	title: 'Authentication',
};

export const login = () => <Login />;
export const register = () => <Register />;
