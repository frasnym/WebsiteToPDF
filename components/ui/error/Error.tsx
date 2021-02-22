import React from 'react';
import { ErrorProps } from '../../../models/error.model';
import Emoji from '../emoji/Emoji';

export default function Error({ type, message, closed }: ErrorProps) {
	let errorColor = '';

	switch (type) {
		case 'red':
			errorColor = 'bg-red-500';
			break;

		default:
			break;
	}

	return (
		<div
			className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${errorColor}`}
		>
			<span className="text-xl inline-block mr-5 align-middle">
				<Emoji symbol="🛑" />
			</span>
			<span className="inline-block align-middle mr-8">
				<b className="capitalize">Error!</b> {message}
			</span>
			<button
				type="button"
				className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
				onClick={closed}
			>
				<span>×</span>
			</button>
		</div>
	);
}
