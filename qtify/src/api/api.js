import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

// Top albums
export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (error) {
    return null;
  }
};

// New albums
export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (error) {
    return null;
  }
};

// Songs
export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (error) {
    return null;
  }
};