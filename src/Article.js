import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {
  CardBody, Button
} from 'reactstrap';

import { Form, FormGroup, Label, Input, } from 'reactstrap';

import './App.css';


const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jum bg-dark ">
        <Container fluid className="cont">
          <div>
            <CardBody className="card-body bg-info">
              <Form className="form  " type="card" action="/addproduto" method="POST">
                <FormGroup>
                  <Label for="exampleEmail">Usuário:</Label>
                  <Input className="input" type="email" name="email" id="Usuario" placeholder="Insira o usuário" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Senha:</Label>
                  <Input className="input" type="password" name="password" id="Password" placeholder="insira a senha" />
                </FormGroup>
                <Button className="button">Entrar</Button>
              </Form>

            </CardBody>





          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;