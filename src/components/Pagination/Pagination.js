import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';
import Box from '@material-ui/core/Box';
import {useDispatch} from 'react-redux';
import {setNextPage, setNumberPage, setPreviousPage} from '../../redux/actions/pagination';

export default ({page, totalPage}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Box
            className={classes.pagination__container}
            boxShadow={1}
        >
            <IconButton
                disabled={page === 1}
                onClick={() => dispatch(setNumberPage(1))}
            >
                <Typography
                    variant="h6"
                    component="p"
                    color="primary"
                >
                    {(page !== 1) && 1}
                </Typography>
            </IconButton>
            <IconButton
                color="secondary"
                disabled={page === 1}
                onClick={() => dispatch(setPreviousPage())}
            >
                <ChevronLeft />
            </IconButton>
            <IconButton disabled>
                <Typography
                    variant="h6"
                    color="primary"
                >
                    {page}
                </Typography>
            </IconButton>
            <IconButton
                color="secondary"
                disabled={page === totalPage}
                onClick={() => dispatch(setNextPage())}
            >
                <ChevronRight />
            </IconButton>
            <IconButton
                disabled={page === totalPage}
                onClick={() => dispatch(setNumberPage(totalPage))}
            >
                <Typography
                    variant="h6"
                    component="p"
                    color="primary"
                >
                    {totalPage}
                </Typography>
            </IconButton>
        </Box>
    )
}
