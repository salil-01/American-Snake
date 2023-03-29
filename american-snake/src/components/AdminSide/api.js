import axios from "axios";

export const getData = async (url) => {
  try {
    let res = await axios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
