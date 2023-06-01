
import React, { useState } from 'react';
import Book from './Book';
import './Bookstore.css';
import { Container, Row, Col, InputGroup, FormControl, Button, Modal, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function Bookstore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Added


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleAddToCart = (book) => {
    const item = cartItems.find(item => item.id === book.id);
    if (item) {
      item.quantity += 1;
      const newCartItems = cartItems.map(item => item.id === book.id ? item : cartItems);
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  }

  const handleRemoveFromCart = (book) => {
    const item = cartItems.find(item => item.id === book.id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      const newCartItems = cartItems.map(item => item.id === book.id ? item : cartItems);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.filter(item => item.id !== book.id);
      setCartItems(newCartItems);
    }
  }

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  
    const order = {
      items: cartItems,
      total: getTotalPrice(),
      email: email
    };
  
    const itemDetails = order.items
      .map(item => `- ${item.title} x ${item.quantity}: $${(item.price * item.quantity).toFixed(2)}`)
      .join('<br>');
  
      const message = {
        to_name: order.email,
        message_html: `Hello ${order.email},<br><br>
          Thank you for your order from CQA Bookstore. Here are your order details:<br><br>
          <strong>Items:</strong><br>
          ${itemDetails}<br><br>
          <strong>Total: $${order.total.toFixed(2)}</strong><br><br>
          If you have any questions about your order, please don't hesitate to contact us:<br><br>
          Best wishes,<br>
          CQA Review Center`,
        to_name: order.email,
        items: itemDetails,
        price: order.total.toFixed(2)
      };
      
  
    // Rest of the code...
  
    emailjs.send('service_krdiyhe', 'template_dx10v1t', message, '97aNFiJAnX65GnyGi')
      .then((response) => {
        console.log('Email sent', response);
        setCartItems([]);
        setShow(false);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Email error', error);
        setLoading(false);
      });
  };
  

  

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      image: "https://images-na.ssl-images-amazon.com/images/I/4195ugPf5qL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the Roaring Twenties.",
      price: 12.99
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      image: "https://m.media-amazon.com/images/I/51FfZ4z5R5L.jpg",
      description: "The story of racial injustice and the destruction of innocence in 1930s Alabama.",
      price: 9.99
    },
    {
      id: 3,
      title: "The Catcher in the Rye",
      image: "https://images-na.ssl-images-amazon.com/images/I/41FXSLHOpyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      description: "The story of Holden Caulfield, a teenager who experiences disillusionment and alienation.",
      price: 11.99
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      image: "https://images-na.ssl-images-amazon.com/images/I/514ZvVfpHBL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      description: "The story of Elizabeth Bennet and her love for Mr. Darcy, set in early 19th century England.",
      price: 14.99
    },
    {
      id: 5,
      title: "1984",
      image: "https://images-na.ssl-images-amazon.com/images/I/51H7p6GkWrL._SY344_BO1,204,203,200_.jpg",
      description: "A dystopian novel set in a totalitarian society where individualism is suppressed.",
      price: 10.99
    },
    {
      id: 6,
      title: "The Hobbit",
      image: "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      description: "The story of the hobbit Bilbo Baggins as he journeyed to a mystical land filled with dragons and goblins.",
      price: 13.99
    },
    {
      id: 7,
      title: "The Da Vinci Code",
      image: "https://images-na.ssl-images-amazon.com/images/I/81Pg%2Be8%2BwvL.jpg",
      description: "A thriller novel about the discovery of a secret society and their connection to some of the famous artists and philosophers of the past.",
      price: 8.99
    },
    {
      id: 8,
      title: "The Hunger Games",
      image: "https://images-na.ssl-images-amazon.com/images/I/71z6AqJkuJL.jpg",
      description: "A science fiction novel set in a dystopian future where teenagers are forced to compete in a brutal game of survival.",
      price: 12.99
    },
    {
      id: 9,
      title: "The Alchemist",
      image: "https://images-na.ssl-images-amazon.com/images/I/51ugUWpA1XL._SX329_BO1,204,203,200_.jpg",
      description: "A novel about a shepherd boy named Santiago who embarks on a journey to find a treasure buried in the pyramids of Egypt.",
      price: 9.99
    },
    {
      id: 10,
      title: "The Lord of the Rings",
      image: "https://images-na.ssl-images-amazon.com/images/I/51CV31vlxZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      description: "The epic tale of Frodo Baggins and his quest to destroy the One Ring that would enable the dark lord Sauron to enslave the world.",
      price: 29.99
    },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="Bookstore">
      <h1>Bookstore</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a book"
          aria-label="Search for a book"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
            <Book book={book} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
          </Col>
        ))}
      </Row>
      <hr />
      <div className="d-flex justify-content-end align-items-center">
        <div className="me-3">
          <span>{getTotalItems()} item(s) in cart</span>
        </div>
        <div>
          <Button variant="primary" onClick={handleShow}>
            View Cart - ${getTotalPrice()}
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <h4>Your cart is empty!</h4>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <img alt={item.title} src={item.image} width="70" className="me-3" />
                    <div>
                      <div>{item.title}</div>
                      <div>${item.price} x {item.quantity}</div>
                    </div>
                  </div>
                  <div>
                    <Button variant="danger" className="me-2" onClick={() => handleRemoveFromCart(item)}>
                      Remove
                    </Button>
                    <Button variant="primary" onClick={() => handleAddToCart(item)}>
                      Add
                    </Button>
                  </div>
                </div>
              ))}
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div>Total:</div>
                <div>${getTotalPrice()}</div>
              </div>
              <hr />
              {!submitted ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Submit Order'
                    )}
                  </Button>
                </Form>
              ) : (
                <div>
                  <h4>Order submitted!</h4>
                  
                
              <p>Thank you for your order. You will receive an email confirmation shortly.</p>
              <Button variant="primary" onClick={handleClose}>
                    OK
                  </Button>
                
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
  
}

export default Bookstore;
