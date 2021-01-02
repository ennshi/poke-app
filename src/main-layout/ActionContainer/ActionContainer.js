import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchField from '../../components/SearchField/SearchField';
import {useStyles} from './styles';
import FiltersBlock from '../../components/FiltersBlock/FiltersBlock';
import ComparisonBlock from '../../components/ComparisonBlock/ComparisonBlock';

export default () => {
    const classes = useStyles();
    return (
        <Grid item component="section" lg={4} className={classes.actions__container}>
            <SearchField/>
            <FiltersBlock/>
            <ComparisonBlock/>
        </Grid>
    );
};
