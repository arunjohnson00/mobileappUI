import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import backgrounIMG from "../../assets/nav_bar.png";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),

  "@media all": {
    minHeight: 0,
    backgroundColor: "none",
  },
}));

export const topbarStyle = makeStyles((theme) => ({
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    background: `url(${backgrounIMG})`,
    backgroundSize: "contain",
  },
  topbarTitle: {
    marginLeft: "100px",
  },

  root: {
    "& .MuiTypography-root": {
      color: "black",
    },
  },
}));
