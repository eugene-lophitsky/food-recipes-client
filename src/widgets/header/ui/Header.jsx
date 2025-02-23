import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styles from "./Header.module.css";

export default function Header() {
  const [openPanel, setOpenPanel] = useState(false);

  console.log(openPanel);

  const sideBarDrawer = (newOpen) => () => {
    setOpenPanel(newOpen);
  };

  const LinksList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={sideBarDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Page1"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  console.log(LinksList);
  return <header className={styles.header}>My test header</header>;
}
