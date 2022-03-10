import axios from "axios";

const rootURL = process.env.REACT_APP_URL;
const urls = [`${rootURL}1.json`, `${rootURL}2.json`, `${rootURL}3.json`];

export const sendGetRequest = async (page: number, dispatch: any) => {
  try {
    const resp = await axios.get(`${urls[page]}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    dispatch({
      type: "initialPage",
      payload: resp.data.page["content-items"].content,
    });
  } catch (err) {
    console.error(err);
  }
};
