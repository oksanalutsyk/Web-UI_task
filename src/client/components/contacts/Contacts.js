import React from 'react';
import './Contacts.css';
import { Card } from 'react-bootstrap';
import Iframe from 'react-iframe'


function Contacts() {
    return (
        <div className="contacts">
            <div className="contactInf">
                <Card>
                    <Card.Header as="h5" className="title">Contacts</Card.Header>
                </Card>
                <div className="information">information</div>
            </div>
            <div className="map">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.5108426682896!2d24.05672201559063!3d49.79526307939039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae86d273847b9%3A0x9a5abba2144cfa06!2zU3BvcnQgTGlmZSDQm9GM0LLRltCyINCh0LjRhdGW0LI!5e0!3m2!1sru!2sua!4v1584746793400!5m2!1sru!2sua" width="600" height="450"
                    width="100%"
                    height="100%"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>
        </div>
    );
}


export default Contacts;