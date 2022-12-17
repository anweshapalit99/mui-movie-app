import { Card, CardMedia, IconButton, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { styled } from "@mui/material/styles";

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "8rem",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 40,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: 11,
  height: "258px",
  maxWidth: "178px",
  padding: "10px",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    outline: "none",
    border: "1px solid #00e0ff",
  },
}));

export const CustomCardMedia = styled(CardMedia)`
  object-fit: fill;
  height: 188px;
  width: 155px;
  border-radius: 6px;
`;

export const CustomGrid = styled(Card)(({ theme }) => ({
  marginTop: "16px",
  borderRadius: 11,
  backgroundColor: theme.palette.primary.light,
  cursor: "pointer",
  "&:focus": {
    border: "1px solid #00e0ff",
  },
}));

export const CustomTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 400;
  line-height: 20.43px;
  margin-top: 10px;
`;

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  paddingLeft: 0,
  color: theme.palette.primary.contrastText,
}));

export const customBorder = { border: "2px solid #00e0ff" };
export const noBorder = {
  border: "none",
  borderRadius: "0px",
};
