import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { PictureInfo } from '../interfaces';
import { kittiesData } from '../KittiesData';


const useStyles = makeStyles({
    root: {
      minWidth: 200,
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


export default function Kitties() {
    const classes = useStyles();

    const generateCard = (array: PictureInfo[]): JSX.Element[] => {
        return array.map(pic => 
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={pic.picUrl}
                title={pic.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pic.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Checkbox color="primary" /> <Typography variant="caption" component="p">Add</Typography>
            </CardActions>
          </Card>
            )
    }

    return (
        <div className="picsContainer">
            {generateCard(kittiesData)}
        </div>
    )
}
