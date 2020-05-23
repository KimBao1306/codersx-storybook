import React from 'react';
import {
	TransactionIndex,
	TransactionCreate,
	TransactionShow,
	TransactionUpdate,
} from '../components/transaction/Transaction';

export default {
	title: 'Transaction',
	component: TransactionIndex,
};

export const transactionIndex = () => <TransactionIndex />;
export const transactionCreate = () => <TransactionCreate />;
export const transactionShow = () => <TransactionShow />;
export const transactionUpdate = () => <TransactionUpdate />;
