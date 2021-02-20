import Layout from '../components/layout/Layout';
import Emoji from '../components/ui/emoji/Emoji';

const IndexPage = () => (
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
		<input
			className="w-full text-xl rounded-md border-2 border-solid outline-none bg-gray-200 border-gray-300 text-black focus:bg-gray-50 focus:border-gray-200 p-3"
			placeholder="🔎 Paste your prefered URL"
		/>
	</Layout>
);

export default IndexPage;
