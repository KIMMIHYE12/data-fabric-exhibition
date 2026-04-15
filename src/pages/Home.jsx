import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Data Fabric Exhibition</h1>
      <Button variant="dark" className="mt-3">
        Enter Exhibition
      </Button>
    </Container>
  );
};

export default Home;
