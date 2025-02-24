import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from "./Header.module.css";

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <div className={styles.drawerWrapper}>
            <Box className={styles.box} sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
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
                <div className={styles.header__title}>My test header</div>
                <div className={styles.burger}>
                    <span></span>
                </div>
            </header>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}