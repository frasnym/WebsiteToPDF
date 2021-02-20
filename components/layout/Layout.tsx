import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './footer/Footer';
import Header from './header/Header';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<main className="bg-purple-500 h-screen">
		<Head>
			<title>{title} - FrasNym</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<link rel="shortcut icon" href="/logo.svg" />
		</Head>
		<Header />
		<div className="w-full flex content-center items-center">
			<div className="m-auto shadow-lg sm:rounded-3xl p-3 mb-5 sm:p-20 lg:w-4/5 bg-gray-100">
				{children}
				<Footer />
			</div>
		</div>
	</main>
);

export default Layout;
