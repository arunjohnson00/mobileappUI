import { Box, Grid} from "@mui/material";
import { useSelector} from "react-redux";

import PosterCard from "../postercard/PosterCard";
import { gridStyle } from "./style";

const PosterGrid = () => {
  const filmData: any = useSelector((filmData) => filmData);

  const pageStyle = gridStyle();
  return (
    <Box>
      <Grid className={pageStyle.gridContainer}>
        {!filmData.searchCount &&
          filmData.allData.map((getRequest: any, index: number) => {
            return (
              <Grid item xs={4} key={index}>
                <PosterCard {...getRequest} />
              </Grid>
            );
          })}

        {filmData.searchCount.length !== 0 &&
        (filmData.searchCount.length !== undefined &&
          filmData?.getData?.length === 0) ? (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              height: "100px",
              marginTop: "150px",
              textAlign: "center",
            }}
          >
            <span>
              <b> No datas fround...</b>
            </span>
          </Grid>
        ) : (
          filmData.getData.map((getRequest: any, index: number) => {
            return (
              <Grid item xs={4} key={index}>
                <PosterCard {...getRequest} />
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default PosterGrid;
