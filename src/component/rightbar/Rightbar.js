import {Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import postImages1 from '../../image/image1.jpg'
import postImages2 from '../../image/image2.jpg'
import postImages3 from '../../image/image3.jpg'
import postImages4 from '../../image/image4.jpg'
import Card from "../card/Card";
const Rightbar = () =>{
    return(
    <Box>
        <Typography align="center" bgcolor={"black"} color="white">
            Popular
        </Typography>
            <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={{height:80, width:80}}
                                variant="square"
                                alt="Remy Sharp"
                                src={postImages1} />
                    </ListItemAvatar>
                    <ListItemText

                        secondary={" — I'll be in your neighborhood doing errands this…"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={{height:80, width:80}}
                                variant="square"
                                alt="Remy Sharp"
                                src={postImages2} />
                    </ListItemAvatar>
                    <ListItemText

                        secondary={" — I'll be in your neighborhood doing errands this…"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={{height:80, width:80}}
                                variant="square"
                                alt="Remy Sharp"
                                src={postImages4} />
                    </ListItemAvatar>
                    <ListItemText

                        secondary={" — I'll be in your neighborhood doing errands this…"}
                    />
                </ListItem>
<Divider variant="inset" component={"li"} />
        </List>
        <Typography align="center" bgcolor={"black"} color="white">
            About Us
        </Typography>
        <Card cardImage={postImages3} />
    </Box>
    )
}

export default Rightbar