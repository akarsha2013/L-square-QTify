import React from "react";
import styles from "./FilterSection.module.css";
import BasicTabs from "../BasicTabs/BasicTabs";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";

const FilterSection = ({
  type,
  title,
  value,
  filteredData = [],   // ✅ default empty array (prevents null error)
  handleChangeIndex,
}) => {
  return (
    <div className={styles.wrapper}>
      
      {/* Heading */}
      <div className={styles.heading}>
        <h3>{title}</h3>
      </div>

      {/* Tabs */}
      <BasicTabs handleChangeIndex={handleChangeIndex} />

      {/* Content */}
      {filteredData?.length > 0 ? (
        <div className={styles.cardsWrapper}>
          <Carousel
            data={filteredData}
            renderCardComponent={(item) => (
              <Card data={item} type={type} />
            )}
          />
        </div>
      ) : (
        <div className={styles.progressBar}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default FilterSection;