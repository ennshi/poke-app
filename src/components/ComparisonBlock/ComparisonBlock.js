import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Container from '@material-ui/core/Container';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import {useStyles} from './styles';
import Button from '@material-ui/core/Button';

const mockPokes = [
    {
        id: 1,
        name: 'Bulbasaur',
    },
    {
        id: 2,
        name: 'Some Other Poke',
    },
];
export default () => {
    const classes = useStyles();
    const pokemons = mockPokes.map((poke, i) => {
        return (
            <Container component="article" className={classes.compare__pokemon}>
                <Typography variant="h6" color="primary">
                    {poke.name}
                </Typography>
                <IconButton
                    color="secondary"
                    size="small"
                >
                    <CancelIcon />
                </IconButton>
            </Container>
        );
    });
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
                    Compare
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes['compare__pokemons-list']}>
                {pokemons}
                <Container className={classes.compare__button}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                    >
                        Compare!
                    </Button>
                </Container>
            </AccordionDetails>
        </Accordion>
    );
}
