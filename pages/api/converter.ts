import { NextApiHandler } from 'next';
import puppeteer from 'puppeteer';

import { isValidURL } from '../../helpers/utils';

const converter: NextApiHandler = async (req, res) => {
	const reqBody: { url: string } = req.body;

	if (!isValidURL(reqBody.url)) {
		return res.status(400).json({ message: 'Invalid URL' });
	}

	const browser = await puppeteer.launch({
		headless: true,
	});

	const url = reqBody.url;

	const page = await browser.newPage();
	await page.setViewport({ width: 1200, height: 800 });
	await page.goto(url, {
		waitUntil: 'networkidle0',
	});

	const pdf = await page.pdf({
		// scale: 0.5,
		// path: 'webtopdf/web.pdf',
		format: 'letter',
		margin: {
			top: '20px',
			bottom: '40px',
			left: '20px',
			right: '20px',
		},
	});

	browser.close();

	res.setHeader('Content-Type', 'application/pdf');
	res.status(200).send(pdf);
};

export default converter;
