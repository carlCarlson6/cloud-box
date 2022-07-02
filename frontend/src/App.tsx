import NavBar from './components/NavBar';
import { Container } from "@chakra-ui/react";
import FilesArea from './pages/FilesArea';

const App = () => <>
	<Container id='container-app' maxW='container.sm'>
		<NavBar />
		
		<FilesArea />

	</Container>
</>

export default App;