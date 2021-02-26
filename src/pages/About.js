import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import backgroundImage from "./images/workplace.jpg";

const About = () => {
  return (
    <div>
      <Hero backgroundImage={backgroundImage}>
        <h1>Keep your team connected.</h1>
        <h2>Manage with ease.</h2>
      </Hero>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Welcome to TeamBase!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius
              illo nobis ea, deleniti libero obcaecati magnam, aliquid dicta non
              et voluptates qui? Ipsa consequuntur libero totam perspiciatis
              amet sit repellat, excepturi debitis modi ut voluptatum ad qui,
              quae laborum aliquid eum voluptates aut! Ex et tempora,
              voluptatibus maiores fugiat reiciendis earum dolores nostrum id
              eveniet omnis placeat, consequatur ipsam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ad
              ea architecto itaque provident earum dolor beatae, ab minima
              velit, blanditiis temporibus explicabo? Dicta dignissimos quos
              ipsum minima optio similique odit magni aliquid pariatur?
              Laudantium esse eligendi ad iusto obcaecati fuga mollitia ut quis
              culpa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
