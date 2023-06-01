import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Book(props) {
  const handleAddToCart = () => {
    props.onAddToCart(props.book);
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={props.book.image} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <span className="text-muted">{props.book.price}</span>
        <Button variant="primary" className="float-end" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Book;