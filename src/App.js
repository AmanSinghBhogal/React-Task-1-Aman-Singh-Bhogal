import React from "react";
// Styled-Components allow me to write CSS inside JS file so that it reduces the Number of Files and imports.
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