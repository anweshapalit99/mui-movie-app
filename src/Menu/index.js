import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AirplayIcon from "@mui/icons-material/Airplay";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CustomListItemButton } from "./index.style";
import SearchAppBar from "../Search";
import MainDisplay from "../Display";

const ResponsiveDrawer = (props) => {
  const { container, drawerWidth } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchParam, setSearchParam] = React.useState("");
  const focusHelper = React.useRef(null);

  const handleInput = (value) => setSearchParam(value);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  React.useEffect(() => {
    focusHelper?.current.focus();
  }, [focusHelper]);

  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "primary.contrastText",
            color: "primary.main",
            height: "100px",
            width: "100px",
            marginTop: "2rem",
          }}
        >
          EF
        </Avatar>
      </Toolbar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" component="h6" noWrap={true}>
          Eric Hoffman
        </Typography>
      </Toolbar>
      <Divider
        sx={{
          borderColor: "primary.light",
        }}
      />
      <List>
        <ListItem disablePadding>
          <CustomListItemButton ref={focusHelper}>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Discover"} />
          </CustomListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary={"Playlist"} />
          </CustomListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <LiveTvIcon />
            </ListItemIcon>
            <ListItemText primary={"Movie"} />
          </CustomListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <AirplayIcon />
            </ListItemIcon>
            <ListItemText primary={"TV Shows"} />
          </CustomListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={"My List"} />
          </CustomListItemButton>
        </ListItem>
      </List>

      <Divider
        sx={{
          borderColor: "primary.light",
        }}
      />
      <List>
        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <UpdateIcon />
            </ListItemIcon>
            <ListItemText primary={"Watch Later"} />
          </CustomListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary={"Recommended"} />
          </CustomListItemButton>
        </ListItem>
      </List>
      <Divider
        sx={{
          borderColor: "primary.light",
        }}
      />
      <List>
        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </CustomListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <CustomListItemButton disabled>
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </CustomListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: "block" },
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color: "secondary.contrastText",
              }}
            />
          </IconButton>
          <SearchAppBar handleInput={handleInput}></SearchAppBar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <MainDisplay
        drawerWidth={drawerWidth}
        searchParam={searchParam}
      ></MainDisplay>
    </Box>
  );
};
export default ResponsiveDrawer;
