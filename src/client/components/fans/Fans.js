import React from 'react';
import './Fans.css';
import { Card } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        display: 'grid'
        
    },
    input: {
        display: 'none',
    },
}));

function Fans() {
    const classes = useStyles();

    return (
        <div >
            <Card>
                <Card.Header as="h5" className="title">Fans appeal</Card.Header>
            </Card>
            <hr></hr>
            <div className="articles">
                <Card className="article">
                    <Card.Body>
                        <Card.Text className="content">
                            With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Body className="time">
                        <Card.Text className="content data">
                            10.10.2010, 20:30
                    </Card.Text>
                        <Card.Text className="content login">
                            My login
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="article">
                    <Card.Body>
                        <Card.Text className="content">
                            With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Body className="time">
                        <Card.Text className="content data">
                            10.10.2010, 20:30
                    </Card.Text>
                        <Card.Text className="content login">
                            My login
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <hr></hr>
            <div className={classes.root} className="loadingBlock">
                <form className={classes.root} noValidate autoComplete="off" className="addText">
                    <TextField
                        id="standard-textarea"
                        label="Your message"
                        placeholder="write here some text..."
                        multiline
                    />
                </form>
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className="addImg">
                        Send
                    </Button>
                </label>
            </div>
        </div>
    );
}


export default Fans;