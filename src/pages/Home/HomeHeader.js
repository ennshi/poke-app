import React from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import {COLORS} from '../../constants/colors';
import {useDispatch} from 'react-redux';
import {useStyles} from './styles';
import AlbumIcon from '@material-ui/icons/Album';
import {Box} from '@material-ui/core';
import FilterChip from '../../components/FilterChip/FilterChip';

export default ({filter, searchName}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Box className={classes['home-header__container']} boxShadow={1}>
            {(filter || searchName) ?
                <FilterChip
                    chip={{
                        color: filter ? filter.color : COLORS.RED,
                        label: filter ? filter.value : searchName
                    }}
                    type=""
                    dispatch={dispatch}
                    filter={filter}
                    searchName={searchName}
                    className={classes['home-header__chip']}
                /> :
                <Chip
                    icon={<AlbumIcon className={classes['home-header__icon']}/>}
                    style={{backgroundColor: 'white'}}
                />
            }
            <Typography variant="h1" color="primary">Pok&eacute;mons</Typography>
        </Box>
    )
};
