import React from 'react';
import {
	BookIndex,
	BookSearch,
	BookCreate,
	BookShow,
	BookUpdate,
} from '../components/book/Book';

export default {
	title: 'Book',
	component: BookIndex,
};

export const bookIndex = () => <BookIndex />;
export const bookSearch = () => <BookSearch />;
export const bookCreate = () => <BookCreate />;
export const bookShow = () => <BookShow />;
export const bookUpdate = () => <BookUpdate />;
