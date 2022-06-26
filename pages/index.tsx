import { Container, Row } from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";
import FilesArea from "./files-area";

const Home = () => {
	const { isAuthenticated, isLoading } = useAuth0();
	
	if (isAuthenticated)
		return <>
			<FilesArea/>
		</>;

	return <>
		<Container gap={1}>
			<Row justify="center" align="center">
				<h1>cloud box</h1>
			</Row>
			<Row justify="center" align="center">
				<h2> ☁️ 📦 </h2>
			</Row>
			<Row justify="center" align="center">
				lore imposum bla bla bla
			</Row>
		</Container>
	</>;
}

export default Home;