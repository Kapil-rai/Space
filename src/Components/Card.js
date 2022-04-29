import React, { useState } from 'react'
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cardone() {
    const [text, setText] = useState("moon is moon");

    return (
        <Card sx={{ maxWidth: 300 }} className='cardone'>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="140"
                    image="./moon.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {text}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        As part of human exploration of the Moon, numerous space missions have been undertaken to study Earth's natural satellite.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
