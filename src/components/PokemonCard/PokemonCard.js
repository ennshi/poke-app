import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {getId} from '../../utils/getId';
import {useStyles} from './styles';
import AddIcon from '@material-ui/icons/Add';

export default ({pokemon: {name, url}}) => {
    const id = getId(url);
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={4} md={3} lg={4}>
            <Card>
                <CardActionArea>
                    <CardContent className={classes['pokemon-card__title']}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            color="primary"
                        >
                            {name.slice(0, 1).toUpperCase() + name.slice(1)}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                        title={name}
                        className={classes['pokemon-card__media']}
                    />
                </CardActionArea>
                <CardActions className={classes['pokemon-card__actions']}>
                    <Button
                        size="small"
                        color="primary"
                    >
                        <AddIcon color="primary" className={classes['pokemon-card__btn-icon']}/>
                        Compare
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
