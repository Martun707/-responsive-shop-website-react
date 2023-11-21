import {AppBar, Box, InputBase, styled, Typography} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Menu from '@mui/icons-material/Menu';
import React from "react";


const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })
    const SocialBox = styled(Box)({
        display:"flex",
        gap:10,
    })

    const MenuBox = styled(Box)({
        display:"flex",
        gap:30,
    })

    const SearchBox = styled(Box)({
        display:"flex",
        gap:5,
    })

    const MenuItems = [
        {Name:'Home', Link:'/'},
        {Name:'Products', Link:'#'},
        {Name:'Portfolio', Link:'#'},
        {Name:'Blog', Link:'#'},
        {Name:'Contact Us', Link:'#'},
    ]
    return(
        <AppBar sx={{background:"black"}} position={"static"}>
            <StyledToolbar>
                <SocialBox>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </SocialBox>
                <MenuBox sx={{display:{xs:"none", sm:"none", md:"flex"} }}>
                    {MenuItems.map((item)=>(
                        <Typography sx={{cursor:"pointer", fontSize:"14px"}}>{item.Name}</Typography>
                    ))}

                </MenuBox>
                <SearchBox>
                    <InputBase placeholder="Search..." sx={{color:"white"}}/>
                    <Menu sx={{color:'white', display:{xs:"block", sm:"block", md:"none"} }}/>
                </SearchBox>

            </StyledToolbar>
        </AppBar>
    )
}
export default Navbar