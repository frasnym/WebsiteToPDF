import React from 'react';

type Props = {
	label?: string;
	symbol: string;
	className: string;
};

export default function Emoji({ label = '', symbol, className }: Props) {
	return (
		<span
			className={className}
			role="img"
			aria-label={label}
			aria-hidden={label ? 'false' : 'true'}
		>
			{symbol}
		</span>
	);
}
