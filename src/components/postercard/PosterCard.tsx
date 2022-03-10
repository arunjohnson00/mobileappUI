import { Box, ImageListItem, ImageListItemBar } from "@mui/material";

const PosterCard = (props: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 150,
          height: 180,
          mb: 8,
        },
      }}
    >
      <ImageListItem>
        <img
          src={
            props["poster-image"] === "posterthatismissing.jpg"
              ? process.env.PUBLIC_URL +
                "/json/Slices/placeholder_for_missing_posters.png"
              : process.env.PUBLIC_URL + "/json/Slices/" + props["poster-image"]
          }
          alt=""
          loading="lazy"
        />
        <ImageListItemBar title={props.name} position="below" />
      </ImageListItem>
    </Box>
  );
};

export default PosterCard;
