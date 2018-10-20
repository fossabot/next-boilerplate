import React from 'react';
import App from 'next/app';
import { Container } from 'next/app';

import Page from '../components/page';
import '../styles/_app.scss';

class CustomApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Page>
					<Component {...pageProps} />
				</Page>
			</Container>
		);
	}
}

export default CustomApp;