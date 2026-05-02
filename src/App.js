import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import FilterSection from "./components/FilterSection/FilterSection";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
} from "./api/api";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  // Albums
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);

  // Songs
  const [songsData, setSongsData] = useState([]);       // ✅ always array
  const [filteredData, setFilteredData] = useState([]); // ✅ always array

  // Tabs
  const [value, setValue] = useState(0);

  // 🔹 Fetch Top Albums
  const generateTopAlbumSongs = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumSongs(res || []); // ✅ safe
    } catch (error) {
      console.log(error);
      setTopAlbumSongs([]); // ✅ fallback
    }
  };

  // 🔹 Fetch New Albums
  const generateNewAlbumSongs = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbumSongs(res || []);
    } catch (error) {
      console.log(error);
      setNewAlbumSongs([]);
    }
  };

  // 🔹 Fetch Songs
  const generateSongs = async () => {
    try {
      const res = await fetchSongs();
      const safeData = res || [];

      setSongsData(safeData);
      setFilteredData(safeData);
    } catch (error) {
      console.log(error);
      setSongsData([]);
      setFilteredData([]);
    }
  };

  // 🔹 Filter Songs based on tab
  const generateNewSongs = (index) => {
    let key = "";

    if (index === 0) {
      // Show all songs
      setFilteredData(songsData || []);
      return;
    } else if (index === 1) key = "rock";
    else if (index === 2) key = "pop";
    else if (index === 3) key = "jazz";
    else if (index === 4) key = "blues";

    const newSongsArray = (songsData || []).filter(
      (song) => song?.genre?.key === key // ✅ extra safe
    );

    setFilteredData(newSongsArray);
  };

  // 🔹 Handle tab change
  const handleChangeIndex = (newValue) => {
    setValue(newValue);
    generateNewSongs(newValue);
  };

  // 🔹 Initial API calls
  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className={styles.sectionWrapper}>
        <Section
          type="album"
          title="Top Albums"
          data={topAlbumSongs}
        />

        <Section
          type="album"
          title="New Albums"
          data={newAlbumSongs}
        />

        <FilterSection
          type="song"
          title="Songs"
          value={value}
          filteredData={filteredData}
          handleChangeIndex={handleChangeIndex}
        />
      </div>
    </div>
  );
}

export default App;