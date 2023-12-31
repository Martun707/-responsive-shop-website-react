import {Box, CardContent, CardMedia, Typography} from "@mui/material";


const Card = ({cardImage}) =>{
    return(
        <Box>
        <CardMedia
            component="img"
            alt="green iguana"
            height="100%"
            image={cardImage}
        />
    <CardContent>
        <Typography gutterBottom variant="body1" align="center" component="div" color="tomato">
            PERFUMES
        </Typography>
        <Typography gutterBottom variant="h5" align="center" component="div">
            Wearing this will make everyone love you
        </Typography>
        <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondary">
            It's womens love
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>
    </CardContent>
        </Box>
    )
}
export default Card