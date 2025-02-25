import {useState} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from "./Header.module.css";
import buttonDefault from "./buttonDefault.jpg";
import buttonPressed from "./buttonPressed.jpg";

export default function Header() {
    const [open, setOpen] = useState();

    const toggleDrawer = () => {
        // open ? setOpen(false) : setOpen(true)
        setOpen(!open);
    }

    const DrawerList = (
        <div className={styles.drawerWrapper}>
            <Box className={styles.box} sx={{width: 250}} role="presentation"
                 onClick={() => {
                     setOpen(!open)
                 }}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );

    return (
        <div className={styles.drawerBody}>
            <header className={styles.header}>
                <button style={open ? {cursor: "pointer"} : {cursor: "default"}} id="burgerButton" onClick={toggleDrawer}>
                    <img src={open ? buttonDefault : buttonPressed} alt=""/>
                </button>
                <div className={styles.header__title}>My test header</div>
            </header>

            <Drawer open={open}>{DrawerList}</Drawer>
        </div>
    );
}