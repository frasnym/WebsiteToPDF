import React from 'react';
import Emoji from '../../ui/emoji/Emoji';

export default function Header() {
	return (
		<header className="p-2 mb-5">
			<div className="bg-purple-200 rounded-lg text-center p-5">
				<h1 className="text-3xl font-bold ml-5 text-blue-600 m-auto">
					<span>Website To PDF Converter</span>
					<Emoji className="mx-2" symbol="🔄" />
				</h1>
			</div>
		</header>
	);
}
