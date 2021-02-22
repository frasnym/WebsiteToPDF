import { NextApiHandler } from 'next';
import chromium from 'chrome-aws-lambda';

import { addhttp, isValidURL } from '../../helpers/utils';

/**
 * Convert site URL to downloadable PDF Document
 * @param req NextApiRequest
 * @param res NextApiResponse
 * ============= POST
 * @param url string
 * @param scale number
 * @param marginTop number
 * @param marginBottom number
 * @param marginLeft number
 * @param marginRight number
 */
const converter: NextApiHandler = async (req, res) => {
	const reqBody: {
		url: string;
		scale: number;
		marginTop: number;
		marginBottom: number;
		marginLeft: number;
		marginRight: number;
	} = req.body;

	if (!isValidURL(reqBody.url)) {
		return res.status(400).json({ message: 'Invalid URL' });
	}

	try {
		// puppeteer chromium does'nt supported on vercel
		const browser = await chromium.puppeteer.launch({
			args: [
				...chromium.args,
				'--hide-scrollbars',
				'--disable-web-security',
			],
			defaultViewport: chromium.defaultViewport,
			executablePath: await chromium.executablePath,
			headless: true,
			ignoreHTTPSErrors: true,
		});

		const url = addhttp(reqBody.url);

		const page = await browser.newPage();
		await page.setViewport({ width: 1200, height: 800 });
		await page.goto(url, {
			waitUntil: 'networkidle0',
		});

		const pdf = await page.pdf({
			scale: parseFloat(reqBody.scale.toString()),
			format: 'letter',
			margin: {
				top: `${reqBody.marginTop}px`,
				bottom: `${reqBody.marginBottom}px`,
				left: `${reqBody.marginLeft}px`,
				right: `${reqBody.marginRight}px`,
			},
		});

		browser.close();

		res.setHeader('Content-Type', 'application/pdf');
		return res.status(200).send(pdf);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export default converter;
