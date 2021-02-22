import axios from 'axios';
import React, { useRef, useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';
import Emoji from '../components/ui/emoji/Emoji';
import Error from '../components/ui/error/Error';
import { ErrorProps } from '../models/error.model';

export default function IndexPage() {
	const urlInputRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState<ErrorProps>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const closeErrorHandler: () => void = () => {
		setError(null);
	};

	const submitHandler = (event: React.FormEvent) => {
		setLoading(true);
		event.preventDefault();

		const body = {
			url: urlInputRef.current.value,
		};

		axios
			.post('/api/converter', body)
			.then(function (_response) {
				// if (response.status === 200) {
				// 	alert(response.data.name);
				// } else {
				// 	alert(response.data.message);
				// }
				// console.log(response);
				setLoading(false);
			})
			.catch(function (error) {
				if (error.response) {
					setError({
						type: 'red',
						message: error.response.data.message,
						closed: closeErrorHandler,
					});
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				setLoading(false);
			});
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
				{error ? <Error {...error} /> : null}
				<input
					type="text"
					className="w-full text-xl rounded-md border-2 border-solid outline-none bg-gray-200 border-gray-300 text-black focus:bg-gray-50 focus:border-gray-200 p-3"
					placeholder="🔎 Paste your prefered URL"
					ref={urlInputRef}
					disabled={loading}
				/>
				{/* transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; */}
				<div className="block w-full mt-3 text-right">
					<Button
						btnType="primary"
						text="Convert now!"
						type="submit"
						loading={loading}
					/>
				</div>
			</form>
		</Layout>
	);
}
