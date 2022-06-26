import '../frontend/styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";
import { Container, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme } from '../frontend/styles/dark-theme';
import { auth0ClientConfig } from "../frontend/components/auth/auth0-client-config";
import Header from '../frontend/components/header';
import Head from 'next/head';
import FilesContextState from '../frontend/context/files/files-context-state';

const CloudBoxApp = ({ Component, pageProps }: AppProps) => <>
	<Head>
    	<title>cloud box</title>
      	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
	<Container>
		<NextThemesProvider
			attribute="class"
			value={{
				dark: darkTheme.className
			}}
		>
			<NextUIProvider>
				<Auth0Provider
					domain={auth0ClientConfig.domain}
					clientId={auth0ClientConfig.clientId}
					redirectUri={auth0ClientConfig.redirectUri}
				>
					<FilesContextState>
						<Header/>
						<Component {...pageProps} />
					</FilesContextState>
				</Auth0Provider>
			</NextUIProvider>
		</NextThemesProvider>
	</Container>
</>;

export default CloudBoxApp
