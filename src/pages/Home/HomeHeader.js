import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import {COLORS} from '../../constants/colors';
import {COLOR_CHIPS, TYPE_CHIPS} from '../../constants/chips';
import {useDispatch} from 'react-redux';
import {resetSearch} from '../../redux/actions/search';
import {useStyles} from './styles';
import AlbumIcon from '@material-ui/icons/Album';

export default ({filter, searchName}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let chipData = {
        icon: true,
        label: '',
        backgroundColor: COLORS.WHITE,
        reset: false
    };
    if(searchName) {
        chipData = {
            backgroundColor: COLORS.RED,
            label: searchName,
            reset: true
        };
    }
    if(filter) {
        const bgColor = filter.property === 'color' ?
            COLOR_CHIPS.find(ch => ch.label === filter.value).color :
            TYPE_CHIPS.find(ch => ch.label === filter.value).color;
        chipData = {
            label: filter.value,
            backgroundColor: bgColor,
            reset: true
        }
    }
    return (
        <Container className={classes['home-header__container']}>
            <Chip
                icon={chipData.icon && <AlbumIcon className={classes['home-header__icon']}/>}
                label={`${chipData.label}`}
                clickable={chipData.reset}
                style={{backgroundColor: `${chipData.backgroundColor}`}}
                onDelete={chipData.reset ?
                    () => (dispatch(resetSearch())) :
                    null
                }
                className={classes['home-header__chip']}
            />
            <Typography variant="h1" color="primary">Pok&eacute;mons</Typography>
        </Container>
    )
};
