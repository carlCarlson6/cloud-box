import { Auth0ContextInterface, useAuth0, User } from '@auth0/auth0-react';
import { Container} from '@nextui-org/react';
import { useEffect } from 'react';
import Home from '.';

const fetchUserFiles = async (authContext: Auth0ContextInterface<User>) => {
	if (!authContext.isAuthenticated)
		return;

	console.log("fetching data");

	const token = await authContext.getAccessTokenSilently();
	const claims = await authContext.getIdTokenClaims();

	console.log({token, claims});

	const asd = await fetch(`${process.env.NEXT_PUBLIC_BE_BASE_URI!}/files`, {
		headers: new Headers({
			'Authorization': `Bearer ${claims?.__raw}`, 
		})
	});
}

const FilesArea = () => {
	const authContext = useAuth0();
	const { isAuthenticated } = authContext;

	useEffect(() => {
		fetchUserFiles(authContext);
	}, [])
	
	return <Container>
		files
	</Container>;
}

export default FilesArea;