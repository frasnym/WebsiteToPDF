import { NextApiHandler } from 'next';

const converter: NextApiHandler = (req, res) => {
	const reqBody: { url: string } = req.body;

	res.status(200).json({ name: reqBody.url });
};

export default converter;
