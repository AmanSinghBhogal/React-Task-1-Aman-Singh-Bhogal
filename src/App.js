import React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

const App = ()=>{

    return(
            <Container>
                <NavBar />
                <Home />
            </Container>
    );
};

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;