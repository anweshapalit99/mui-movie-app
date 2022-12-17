import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Grow,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import {
  BorderLinearProgress,
  CustomCard,
  CustomCardMedia,
  CustomTitle,
  CustomIconButton,
  CustomGrid,
  customBorder,
  noBorder,
} from "./index.style";
import data from "../preview/data.json";
import { search } from "fast-fuzzy";

const MainDisplay = (props) => {
  const { drawerWidth, searchParam } = props;
  const [displayData, setDisplayData] = React.useState(data);
  const [cardIndex, setCardIndex] = React.useState(null);
  const [gridIndex, setGridIndex] = React.useState(null);
  const [cardItem, setCardItem] = React.useState(null);

  const gridArrRef = React.useMemo(
    () =>
      Array(displayData.length)
        .fill(0)
        .map((i) => React.createRef(null)),
    []
  );
  React.useEffect(() => {
    if (!searchParam) {
      setDisplayData(data);
    } else
      setDisplayData(
        search(searchParam, data, { keySelector: (obj) => obj.Title })
      );
  }, [searchParam, data]);

  const displayCard = (index, item) => {
    const element = document.getElementById(`${index}and${item.Title}`);
    const elementY = element.getBoundingClientRect().y;

    let prevElement = element.previousSibling;
    let prevElementY = prevElement?.getBoundingClientRect().y;
    while (prevElement && prevElement.id && elementY === prevElementY) {
      prevElement = prevElement?.previousSibling;
      prevElementY = prevElement?.getBoundingClientRect().y;
    }
    if (prevElement) {
      const cardIndex = Number(prevElement.nextSibling.id.split("and")[0]);
      setCardIndex(cardIndex);
    } else setCardIndex(0);
    setCardItem(item);
    setGridIndex(index);
  };

  const handleCloseButtonClick = () => {
    setCardIndex(null);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        minHeight: "100vh",
      }}
      bgcolor="primary.main"
      color="primary.contrastText"
    >
      <Toolbar sx={{ minHeight: { xs: "40px", sm: "72px" } }} />
      <Grid
        display="flex"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "space-between",
          },
        }}
        alignItems="center"
        container
      >
        {displayData && displayData.length > 0 ? (
          displayData.map((item, index) => {
            return (
              <React.Fragment key={`${index}and${item.Title}`}>
                {index === cardIndex && (
                  <Grow in timeout={1000}>
                    <Grid
                      container
                      sx={{
                        borderRadius: "11px",
                        backgroundColor: "primary.light",
                        margin: "16px 0px 0px 0px",
                        padding: 0,
                      }}
                    >
                      <Grid item xs={12} sm={12} md={3}>
                        <CardMedia
                          component="img"
                          image={cardItem.Images[0]}
                          alt={cardItem.Title}
                          loading="lazy"
                          sx={{
                            height: "100%",
                            objectFit: "fill",
                            borderRadius: {
                              md: "11px 0px 0px 11px",
                              sm: "11px 11px 0px 0px",
                              xs: "11px 11px 0px 0px",
                            },
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={9}
                        sx={{
                          padding: {
                            md: "32px",
                            sm: "16px",
                            xs: "16px",
                          },
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{ mb: 2 }}
                            variant="h4"
                            component="div"
                          >
                            {cardItem.Title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                            }}
                          >
                            <BorderLinearProgress
                              value={Number(cardItem.imdbRating) * 10}
                              variant="determinate"
                              aria-valuemax="10"
                              sx={{ margin: "5px 10px 0px 0px" }}
                            />
                            <Typography>{`${Number(
                              cardItem.imdbRating
                            )}/10`}</Typography>
                          </Box>
                          <Box sx={{ display: "flex inline", mt: 2, mb: 2 }}>
                            <Box sx={{ mr: 4 }}>
                              <CustomTitle>{`Year:`}</CustomTitle>
                              <CustomTitle>{`Running time:`}</CustomTitle>
                              <CustomTitle>{`Directed by:`}</CustomTitle>
                              <CustomTitle>{`Language:`}</CustomTitle>
                            </Box>
                            <Box>
                              <CustomTitle>{cardItem.Year}</CustomTitle>
                              <CustomTitle>{cardItem.Runtime}</CustomTitle>
                              <CustomTitle>{cardItem.Director}</CustomTitle>
                              <CustomTitle>{cardItem.Language}</CustomTitle>
                            </Box>
                          </Box>
                          <CustomTitle>{`${cardItem.Plot}`}</CustomTitle>
                        </CardContent>
                        <CardActions>
                          <Button
                            sx={{
                              backgroundColor: "neutral.main",
                              color: "neutral.contrastText",
                              "&:hover": {
                                backgroundColor: "neutral.contrastText",
                                color: "neutral.main",
                              },
                              mr: 2,
                            }}
                            variant="contained"
                          >
                            Play Movie
                          </Button>
                          <Button
                            variant="outlined"
                            sx={{
                              borderColor: "neutral.main",
                              color: "neutral.main",
                              "&:hover": {
                                backgroundColor: "neutral.contrastText",
                                color: "neutral.main",
                              },
                            }}
                          >
                            Watch Trailer
                          </Button>
                        </CardActions>
                      </Grid>
                      <IconButton
                        sx={{ position: "absolute", right: "25px" }}
                        color="inherit"
                        onClick={handleCloseButtonClick}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                  </Grow>
                )}
                <CustomGrid
                  onFocus={console.log("HI")}
                  sx={{ marginRight: { xs: "16px", sm: "0px" } }}
                  id={`${index}and${item.Title}`}
                  onClick={() => {
                    displayCard(index, item);
                    gridArrRef[gridIndex]?.current.focus();
                  }}
                  ref={gridArrRef[index]}
                >
                  <CustomCard variant="outlined">
                    <CustomCardMedia
                      component="img"
                      image={item.Images[0]}
                      alt={item.Title}
                    />
                    <CustomTitle
                      sx={{ maxWidth: "155px" }}
                      variant="h5"
                      component="div"
                      noWrap={true}
                    >
                      {item.Title}
                    </CustomTitle>
                    <CustomIconButton size="large">
                      <PlayCircleOutlineIcon size="large" />
                    </CustomIconButton>
                    <CustomIconButton size="large">
                      <AddCircleOutlineIcon size="large" />
                    </CustomIconButton>
                  </CustomCard>
                </CustomGrid>
              </React.Fragment>
            );
          })
        ) : (
          <Grid item>
            <Typography sx={{ mt: 4 }}>
              No results found for your search.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default MainDisplay;
