import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {COLOR_CHIPS, TYPE_CHIPS} from '../../constants/chips';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import {useStyles} from './styles';
import {useDispatch} from 'react-redux';
import {addSearchFilter} from '../../redux/actions/search';
import {closeMobileActions} from '../../redux/actions/toggle_mobile_actions';

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const colorChips = COLOR_CHIPS.map((chip, i) => (
        <Chip
            key={i}
            label={`${chip.label}`}
            clickable
            style={{backgroundColor: `${chip.color}`}}
            onClick={() => dispatch(
                addSearchFilter({
                    property: 'color',
                    value: chip.label,
                    color: chip.color
                })
            )}
        />
    ));
    const typeChips = TYPE_CHIPS.map((chip, i) => (
        <Chip
            key={i}
            label={`${chip.label}`}
            clickable
            style={{backgroundColor: `${chip.color}`}}
            onClick={() => dispatch(
                addSearchFilter({
                    property: 'type',
                    value: chip.label,
                    color: chip.color
                })
            )}
        />
    ));;
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
                    Filters
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.filters__container}>
                <Typography variant="h6" color="primary"> Colors </Typography>
                <Container
                    className={classes.filters__chips}
                    onClick={() => dispatch(closeMobileActions())}
                >
                    {colorChips}
                </Container>
                <Typography variant="h6" color="primary"> Types </Typography>
                <Container
                    className={classes.filters__chips}
                    onClick={() => dispatch(closeMobileActions())}
                >
                    {typeChips}
                </Container>
            </AccordionDetails>
        </Accordion>
    );
};
