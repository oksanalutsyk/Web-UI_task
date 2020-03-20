import React from 'react';
import './Main-page.css';
import { Carousel, Card } from 'react-bootstrap';
function Main() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/main-slider-images/main1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/main-slider-images/main1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/main-slider-images/main1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <hr></hr>
            <div className="articles">
                <Card className="article">
                    <Card.Header className="title">Featured</Card.Header>
                    <Card.Body>
                        <Card.Text className="content">
                            With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="article">
                    <Card.Header className="title">Featured</Card.Header>
                    <Card.Body>
                        <Card.Text className="content">
                            With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}


export default Main;