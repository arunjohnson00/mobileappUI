import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import PosterGrid from "./components/postergrid/PosterGrid";
import InfiniteScroll from "react-infinite-scroll-component";
import { sendGetRequest } from "./utilities/apiCall";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [pageLoad, setpageLoad] = useState(true);

  const filmData: any = useSelector((filmData) => filmData);

  const fetchData = () => {
    if (page === 2) {
      setpageLoad(false);
    } else {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    sendGetRequest(page, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="App">
      <Topbar />
      <InfiniteScroll
        dataLength={filmData.allData.length}
        next={fetchData}
        hasMore={pageLoad}
        style={{
          background: "black",
          color: "white",
        }}
        loader={
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <b> {filmData.searchCount.length === 0 ? "Load more..." : null}</b>
          </Typography>
        }
        endMessage={
          <p
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            {filmData?.getData?.length !== 0 && <b> You have seen it all</b>}
          </p>
        }
      >
        <Box sx={{ marginTop: 10 }}>
          <PosterGrid />
        </Box>
      </InfiniteScroll>
    </div>
  );
}

export default App;
