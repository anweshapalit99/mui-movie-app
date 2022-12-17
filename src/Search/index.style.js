import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  marginLeft: 0,
  width: "100%",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flexGrow: "1",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    /* transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "40ch",
      },
    }, */
  },
}));

export const customBackgroundColor = {
  backgroundColor: "#1F2A3C",
};
export const noBackgroundColor = {
  backgroundColor: "transparent",
};

export const SearchClickStyle = styled(StyledInputBase)`
  transition: "all 1s ease-out";
`;
