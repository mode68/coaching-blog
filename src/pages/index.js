import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { navigate } from 'gatsby';

// markup
const IndexPage = () => {
	React.useEffect(() => {
		navigate('/about');
	}, []);
	return <Layout />;
};

export default IndexPage;
