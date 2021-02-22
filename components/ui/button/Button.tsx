import React from 'react';

type Props = {
	btnType: 'primary' | 'secondary';
	text: string;
	type: 'button' | 'submit' | 'reset';
	clicked?: () => void;
	className?: string;
	loading?: boolean;
};

export default function Button({
	btnType,
	text,
	type,
	clicked = () => {},
	className = '',
	loading = false,
}: Props) {
	// Define button color class
	let btnColorClass: string;
	switch (btnType) {
		case 'primary':
			btnColorClass = 'text-white bg-purple-600 border-purple-600';
			break;

		case 'secondary':
			btnColorClass = 'text-white bg-blue-600 border-blue-600';
			break;

		default:
			break;
	}

	const loadingClass = loading ? 'cursor-wait' : '';

	return (
		<button
			onClick={clicked}
			type={type}
			className={`inline-block font-normal text-center whitespace-nowrap align-middle border-solid border border-transparent px-3 py-2 text-base rounded-lg ${btnColorClass} ${className} ${loadingClass}`}
			disabled={loading}
		>
			{loading ? 'Processing' : text}
		</button>
	);
}
