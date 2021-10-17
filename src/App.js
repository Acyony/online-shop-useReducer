import "./App.css";
import Main  from "./Components/Body/Main";
import  Footer  from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import styled from "styled-components";

const Container = styled.div`
margin: 4rem 0 0 0rem;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
