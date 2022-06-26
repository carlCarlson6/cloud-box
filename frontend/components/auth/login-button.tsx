import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@nextui-org/react';

const LoginButton = () => {
  	const { loginWithRedirect } = useAuth0();
  	return <Button onClick={() => loginWithRedirect()} color="gradient" auto ghost>login</Button>; 
};

export default LoginButton;