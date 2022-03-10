import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Searchon, SearchIconWrapper, StyledInputBase } from "./style";
import { SearchStyle } from "./style";

const Search = () => {
  const dispatch = useDispatch();

  const pageStyle = SearchStyle();

  const inputValue = (value: any) => {
    dispatch({
      type: "search",
      payload: value,
    });
  };

  return (
    <Box sx={{ background: "#0f64ff" }}>
      <Searchon>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          style={{ width: "100%" }}
          className={pageStyle.searchBox}
          onChange={(e: any) => {
            inputValue(e.target.value);
          }}
        />
      </Searchon>
    </Box>
  );
};

export default Search;
