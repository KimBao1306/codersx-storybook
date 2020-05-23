import React from 'react';
import {
	UserIndex,
	UserSearch,
	UserCreate,
	UserShow,
	UserUpdate,
} from '../components/user/User';

export default {
	title: 'User',
	component: UserIndex,
};

export const userIndex = () => <UserIndex />;
export const userSearch = () => <UserSearch />;
export const userCreate = () => <UserCreate />;
export const userShow = () => <UserShow />;
export const userUpdate = () => <UserUpdate />;
