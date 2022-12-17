import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Fade } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Search,
  StyledInputBase,
  customBackgroundColor,
  noBackgroundColor,
} from "./index.style";

const SearchAppBar = (props) => {
  const { handleInput } = props;
  const [isVisible, setVisible] = React.useState(false);
  const handleSearchClick = () => {
    setVisible(true);
  };
  const handleCloseClick = () => {
    setVisible(false);
    handleInput("");
  };
  const handleChange = (e) => {
    setTimeout(() => handleInput(e.target.value), 500);
  };
  return (
    <Search sx={{ margin: { xs: "0px", sm: "32px 0px" } }}>
      <Box sx={{ display: "flex" }} flexGrow={1}>
        <Box
          backgroundColor={
            isVisible ? customBackgroundColor : noBackgroundColor
          }
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "100%", md: "75%", lg: "60%" },
            borderRadius: "6px",
          }}
        >
          <IconButton
            size="large"
            color="inherit"
            aria-label="Click to search"
            sx={{ mr: 2 }}
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </IconButton>
          {isVisible && (
            <>
              <StyledInputBase
                placeholder="Title, Movies, Keyword"
                inputProps={{
                  "aria-label": "Search Title or Movies or Keyword",
                }}
                name="Input search"
                onChange={handleChange}
              />
              <IconButton
                size="large"
                color="inherit"
                aria-label="Click to cancel search"
                sx={{ mr: 2 }}
                onClick={handleCloseClick}
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
      <IconButton color="inherit">
        <LightModeIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreVertIcon />
      </IconButton>
    </Search>
  );
};

export default SearchAppBar;
