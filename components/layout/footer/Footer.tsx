import React from 'react';
import Emoji from '../../ui/emoji/Emoji';

export default function Footer() {
	return (
		<footer className="font-bold text-center h-10 flex justify-center items-center bg-gray-200 rounded-xl mt-5">
			<span>Made with </span> <Emoji className="px-1" symbol="❤" />
			<span>
				by{' '}
				<a
					className="underline"
					href="https://twitter.com/frasnym"
					target="_blank"
					rel="noreferrer"
				>
					FrasNym
				</a>
			</span>
		</footer>
	);
}
