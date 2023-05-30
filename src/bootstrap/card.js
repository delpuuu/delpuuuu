import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta() {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" width={"264px"} src="https://lamoto.com.ar/wp-content/uploads/2020/08/bmw-s1000-3.jpeg"/>
      <Card.Body>
        <Card.Title>Profe:</Card.Title>
        <Card.Text>
          Nos costó mucho apruebenos porfa.
          Lo queremos uwu
        </Card.Text>
        <Button variant="primary">Aprobar</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta; 