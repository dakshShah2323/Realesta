import axios from "axios";

export const bayutUrl = "https://bayut.p.rapidapi.com";
// headers: {
//   'X-RapidAPI-Key': 'b15d43025fmshcc003840bafbce9p1c2da6jsn589f4e77c7a0',
//   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "b15d43025fmshcc003840bafbce9p1c2da6jsn589f4e77c7a0",
    },
  });
  return data;
};
