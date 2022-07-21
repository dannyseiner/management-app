import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function HomePage() {
  return (
    <Container>
      <h1 className="text-center mx-0 px-0 fw-bold text-uppercase">Hompage</h1>
      <div className="div-center">
        {["sm", "md", "lg", "xl", "xxl"].map((breakpoint) => (
          <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
            <ListGroup.Item>This ListGroup</ListGroup.Item>
            <ListGroup.Item>renders horizontally</ListGroup.Item>
            <ListGroup.Item>on {breakpoint}</ListGroup.Item>
            <ListGroup.Item>and above!</ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </Container>
  );
}

export default HomePage;
