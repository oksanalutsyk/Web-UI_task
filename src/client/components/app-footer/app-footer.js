import React from 'react';
import './app-footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTelegramPlane,
    faInstagram,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Row, Card, Col } from 'react-bootstrap';




const AppFooter = () => (
    <footer className="footer">
        <Card className="footer-inner">
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title></Card.Title>
                    </Col>
                    <Col>
                        <Card.Title>Links</Card.Title>
                        <Card.Link href="#">
                            <FontAwesomeIcon className="icon" icon={faTelegramPlane} />
                        </Card.Link>
                        <Card.Link href="#">
                            <FontAwesomeIcon className="icon" icon={faInstagram} />
                        </Card.Link>
                        <Card.Link href="#">
                            <FontAwesomeIcon className="icon" icon={faFacebook} />
                        </Card.Link>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Header>© 2020 Free Fitness</Card.Header>
        </Card>
    </footer>
);

export default AppFooter;