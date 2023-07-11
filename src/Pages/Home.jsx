import React from 'react'
import { Container } from "react-bootstrap";

import NavbarComp from '../Components/NavbarComp'

// Container is a bootstrap element to have pre-defined margins on the page.

const Home = () => {
  return (
    <>
      <NavbarComp />
      <Container>
        <div>This is Home Page</div>
      </Container>
    </>
  );
}

export default Home