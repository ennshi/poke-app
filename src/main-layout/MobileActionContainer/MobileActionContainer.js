import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import SearchField from '../../components/SearchField/SearchField';
import FiltersBlock from '../../components/FiltersBlock/FiltersBlock';
import ComparisonBlock from '../../components/ComparisonBlock/ComparisonBlock';
import {useStyles} from './styles';
import {Hidden} from '@material-ui/core';

export default () => {
    const classes = useStyles();
    const modal = (
        <Hidden only={['lg']}>
            <Grid item component="section" xs={12} sm={8} md={6} className={classes['mobile-actions__container']}>
                <SearchField/>
                <FiltersBlock/>
                <ComparisonBlock/>
            </Grid>
        </Hidden>
    );
    return ReactDOM.createPortal(
        modal,
        document.getElementById('modal')
    );
};
