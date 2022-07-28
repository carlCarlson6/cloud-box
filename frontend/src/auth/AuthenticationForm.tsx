import { FormControl, FormLabel, Input, FormErrorMessage, InputGroup, Button,  InputRightElement} from "@chakra-ui/react"
import { useState, ChangeEvent, FC } from "react";

type Event = ChangeEvent<HTMLInputElement>;
type AuthInput = { email: string, password: string }

type AuthAction = (input: AuthInput) => void;

const AuthenticationForm: FC = () => {
    const [authInput, setAuthInput] = useState<AuthInput>({ email: "", password: "" });
    const setEmail = (e: Event) => setAuthInput({...authInput, email: e.target.value});

    return (<>
        <FormControl>
            <EmailInput
                email={authInput.email}
                setEmail={(email: string) => setAuthInput({...authInput, email})}
            />

            <PasswordInput 
                password={authInput.email} 
                setPassword={(password: string) => setAuthInput({...authInput, password})}
            />
        </FormControl>
    </>);
}

const EmailInput: FC<{email: string, setEmail: (email: string) => void}> = ({email, setEmail}) => {
    const [emailError, setEmailError] = useState("");
    
    return (<>
        <InputGroup>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="some@email.com"/>
            { emailError === ""? <FormErrorMessage>{emailError}</FormErrorMessage> : <></> }
        </InputGroup>
    </>);
}

const PasswordInput: FC<{password: string, setPassword: (password: string) => void}> = ({password, setPassword}) => {
    const [passwordError, setPassordError] = useState("");
    const [show, setShow] = useState(false)
    const handleShowClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <FormLabel>Password</FormLabel>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}

export default AuthenticationForm;