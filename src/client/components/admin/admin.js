import React from 'react';
import './admin.css';
import { Card } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
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



function Admin() {
    const classes = useStyles();
    return (
        <div >
            <Card>
                <Card.Header as="h5" className="title">Add news</Card.Header>
            </Card>
            <div className="adminPanel">
                <div className={classes.root} className="loadingBlock">
                    <div className="loadingImg"></div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span" className="addImg">
                            Add image
                    </Button>
                    </label>
                    {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label> */}
                </div>
                <hr></hr>
                <div className={classes.root} className="loadingBlock">
                <form className={classes.root} noValidate autoComplete="off" className="addText">
                    <TextField id="standard-basic" label="News title" />
                    <TextField
                        id="standard-textarea"
                        label="News text"
                        placeholder="write here some text..."
                        multiline
                    />
                </form>
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className="addImg">
                        Add news
                    </Button>
                </label>
                </div>
            </div>

        </div>
    );
}


export default Admin;