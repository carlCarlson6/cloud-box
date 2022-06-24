import { useAuth0 } from '@auth0/auth0-react';
import { Container } from '@nextui-org/react';
import { useEffect } from 'react';
import Home from '.';

const FilesArea = () => {
	const { isAuthenticated } = useAuth0();

	if (!isAuthenticated)
		return <Home/>

	return <Container>

	</Container>;
}

export default FilesArea;