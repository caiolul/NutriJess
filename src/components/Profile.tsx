import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Profile: React.FC = () => {
  return (
    <Jumbotron fluid style={{ background: '#fff' }} className="mt-5">
      <Container>
        <Row>
          <Col className="sm-6">
            <h1 className="display-4 mb-4">Ola meu nome é Jessyka Mendes.</h1>
            <p className="lead mb-4">
              Graduada em Nutricão com experiência em cuidar de indivíduos e
              famílias a melhorar seus hábitos de saúde. A nutrição é a
              ferramenta para se ter qualidade de vida e ela não precisa ser
              complicada e sim acessível, me dá uma chance para te ajudar?!!
            </p>
            <br />
            <br />
            <span className="lead">Quero te ajudar!!</span>
          </Col>
          <Col className="sm-6">
            <img
              src="img/img.jpeg"
              alt="Ola sou Jessyka"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Profile;
