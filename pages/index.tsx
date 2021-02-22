import axios from 'axios';
import React, { useState } from 'react';

import ConverterForm from '../components/converter-form/ConverterForm';
import Layout from '../components/layout/Layout';
import Emoji from '../components/ui/emoji/Emoji';
import { ErrorProps } from '../models/error.model';

export default function IndexPage() {
	// * React useState Hooks
	const [error, setError] = useState<ErrorProps>(null);
	const [loading, setLoading] = useState<boolean>(false);

	/**
	 * Function to reset error state
	 */
	const closeErrorHandler: () => void = () => {
		setError(null);
	};

	/**
	 * Function to submit provided setting then send it to API
	 * @param event React.FormEvent
	 */
	const submitHandler = (
		event: React.FormEvent,
		url: string,
		scale: number,
		marginTop: number,
		marginBottom: number,
		marginLeft: number,
		marginRight: number
	) => {
		closeErrorHandler();
		setLoading(true);
		event.preventDefault();

		const body = {
			url,
			scale,
			marginTop,
			marginBottom,
			marginLeft,
			marginRight,
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
		<Layout title="WebToPdf">
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
			<ConverterForm
				error={error}
				loading={loading}
				submitHandler={submitHandler}
			/>
		</Layout>
	);
}
