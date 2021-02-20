import React from 'react';

type Props = {
	btnType: 'primary' | 'secondary';
	text: string;
	type: 'button' | 'submit' | 'reset';
	clicked?: () => void;
	className?: string;
};

export default function Button({
	btnType,
	text,
	type,
	clicked = () => {},
	className = '',
}: Props) {
	// Define button color class
	let btnColorClass: string;
	switch (btnType) {
		case 'primary':
			btnColorClass = 'text-white bg-purple-600 border-purple-600';
			break;

		default:
			break;
	}

	return (
		<button
			onClick={clicked}
			type={type}
			className={`inline-block font-normal text-center whitespace-nowrap align-middle border-solid border border-transparent px-3 py-2 text-base rounded-lg ${btnColorClass} ${className}`}
		>
			{text}
		</button>
	);
}
