import React from 'react';
import { Card } from 'react-bootstrap';
import './News.css';

function News() {
    return (
        <div>
            <Card>
                <Card.Header as="h5" className="title">Last news</Card.Header>
            </Card>
            <div className="newsCards">
                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news2.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news2.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news2.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="newsCard">
                    <Card.Img style={{ height: '15rem' }} variant="top" src="/news-images/news2.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    );
}


export default News;