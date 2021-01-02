import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useStyles} from './styles';


export default () => {
    const classes = useStyles();
    return (
        <Accordion component="section">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary"/>}
                aria-controls="search-field"
            >
                <Typography
                    color="primary"
                    variant="h5"
                >
                    Search
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.search__details}>
                    <TextField
                        label="Pokemon name"
                        variant="outlined"
                        size="small"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                    >
                        Find!
                    </Button>
            </AccordionDetails>
        </Accordion>
    );
};
