import { useContext } from "react";
import { Drawer, Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { UIContext } from "../../context/ui";

const menuItems = [
  { text: "Inbox", icon: <InboxOutlinedIcon /> },
  { text: "Starred", icon: <BookmarksOutlinedIcon /> },
  { text: "Send Email", icon: <ForwardToInboxOutlinedIcon /> },
  { text: "Draft", icon: <DraftsOutlinedIcon /> },
];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <Divider />

        <List>
          {menuItems.map((e) => (
            <ListItem button key={e.text}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItem>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  );
};
