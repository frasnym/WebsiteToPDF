import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './footer/Footer';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<main className="bg-purple-200">
		<Head>
			<title>{title} - FrasNym</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<link rel="shortcut icon" href="/logo.svg" />
		</Head>
		<div className="w-full flex content-center items-center">
			<div className="m-auto shadow-lg sm:rounded-3xl p-3 mb-3 sm:p-20 lg:w-4/5 bg-gray-100">
				{children}
			</div>
		</div>
		<Footer />
	</main>
);

export default Layout;
