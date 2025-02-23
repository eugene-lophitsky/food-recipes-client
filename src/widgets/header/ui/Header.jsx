import React, {useState} from "react";
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styles from "./Header.module.css";
import {styled} from "@mui/material";

export default function Header () {
    const[openPanel, setOpenPanel] = useState(false);

    const sideBarDrawer = (newOpen) => () => {
        setOpenPanel(newOpen);
    };

    const LinksList = (
        <Box sx={{width: 250}} role="presentation" onClick={sideBarDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>

                        <ListItemText primary={"Page1"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <header className={styles.header}>
                My test header
        </header>
    )
}