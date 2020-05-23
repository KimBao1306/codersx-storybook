import React from 'react';
import {Error404, Error500} from '../components/errors/Errors';

export default {
	title: 'Errors',
	component: Error404,
};

export const error404 = () => <Error404 />;
export const error500 = () => <Error500 />;
