import { useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, IconButton, Typography } from "@mui/material";

import { StyledToolbar } from "./style";
import { topbarStyle } from "./style";
import Search from "./search/Search";

const Topbar = () => {
  const pageStyle = topbarStyle();
  const [searchToggle, setToggle] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "transparent" }}>
        <StyledToolbar className={pageStyle.topbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
          >
            <ArrowBack />
            <Typography
              sx={{ flexGrow: 1, ml: 2 }}
              className={pageStyle.topbarTitle}
            >
              abcd
            </Typography>
          </IconButton>
          <IconButton
            size="large"
            aria-label="search"
            color="inherit"
            onClick={() => {
              setToggle(!searchToggle);
            }}
          >
            <SearchIcon />
          </IconButton>
        </StyledToolbar>
        {searchToggle && <Search />}
      </AppBar>
    </Box>
  );
};

export default Topbar;
