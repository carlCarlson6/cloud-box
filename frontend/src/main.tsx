import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/index.css"
import { ChakraProvider } from '@chakra-ui/react'
import FilesContextState from './context/files/FilesContextState'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<FilesContextState>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</FilesContextState>
	</React.StrictMode>
);