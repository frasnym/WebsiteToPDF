import React, { useRef } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/emoji/button/Button';
import Emoji from '../components/ui/emoji/Emoji';

export default function IndexPage() {
	const urlInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		alert(urlInputRef.current.value);
	};

	return (
		<Layout title="Home">
			<p className="text-2xl font-bold mb-2">
				Hi <Emoji symbol="👋" />, you want to convert a web page to PDF
				right?{' '}
				<text className="text-xl font-bold text-gray-500 mb-2">
					You just come to the right url <Emoji symbol="👍" />
				</text>
			</p>
			<p className="text-xl font-bold text-gray-500 mb-5">
				In here you can convert it with minimal configuration!
			</p>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					className="w-full text-xl rounded-md border-2 border-solid outline-none bg-gray-200 border-gray-300 text-black focus:bg-gray-50 focus:border-gray-200 p-3"
					placeholder="🔎 Paste your prefered URL"
					ref={urlInputRef}
				/>
				{/* transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; */}
				<div className="block w-full mt-3 text-right">
					<Button
						btnType="primary"
						text="Convert now!"
						type="submit"
					/>
				</div>
			</form>
		</Layout>
	);
}
