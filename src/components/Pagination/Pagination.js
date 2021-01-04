import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';
import Box from '@material-ui/core/Box';

export default () => {
    const classes = useStyles();
    return (
        <Box
            className={classes.pagination__container}
            boxShadow={1}
        >
            <IconButton>
                <Typography
                    variant="h6"
                    component="p"
                    color="secondary"
                >
                    1
                </Typography>
            </IconButton>
            <IconButton color="secondary">
                <ChevronLeft/>
            </IconButton>
            <IconButton disabled>
                <Typography
                    variant="h6"
                    color="primary"
                >
                    6 of 1110
                </Typography>
            </IconButton>
            <IconButton color="secondary">
                <ChevronRight />
            </IconButton>
            <IconButton>
                <Typography
                    variant="h6"
                    component="p"
                    color="secondary"
                >
                    10
                </Typography>
            </IconButton>
        </Box>
    )
}
