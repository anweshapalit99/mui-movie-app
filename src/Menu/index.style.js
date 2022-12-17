import { styled } from "@mui/material/styles";
import { ListItemButton } from "@mui/material";

export const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    borderRight: `3px solid ${theme.palette.neutral.main}`,
    color: theme.palette.neutral.main,
  },
  "&:focus": {
    borderRight: `3px solid ${theme.palette.neutral.main}`,
    color: theme.palette.neutral.main,
  },
}));
