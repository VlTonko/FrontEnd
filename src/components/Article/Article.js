import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const goodDate = (date) => new Date(date).toLocaleString();

const Article = ({ image ,title, webTitle, webUrl, data }) => {
    return (
        <Card sx={{ maxWidth: 400, padding: 2, margin:"20px" }}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt="news"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {webTitle}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={webUrl} target="_blank">More</Link>
                <Typography variant="caption" display="block" align="right" gutterBottom>
                    {goodDate(data)}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Article;




