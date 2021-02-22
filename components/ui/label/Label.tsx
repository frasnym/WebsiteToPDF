import React from 'react';

type Props = {
	htmlFor: string;
	text: string;
};

export default function Label({ htmlFor, text }: Props) {
	return (
		<label htmlFor={htmlFor} className="mb-2 inline-block text-md">
			{text}
		</label>
	);
}
