import React, { useEffect, useState } from "react";
import { statueData } from "../data";
import { TbSchoolBell } from "react-icons/tb";
import { GoSearch } from "react-icons/go";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import Filter from "./Filter";
import Card from "./Card";
import "../styles/Home.css";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [indianGods, setIndianGods] = useState(statueData);

  useEffect(() => {
    setIsShowFilter(false);
  }, [indianGods]);

  const MatchedData = () => {
    const filteredArr = statueData?.filter((item) =>
      item?.name.toLowerCase().includes(searchItem?.toLowerCase())
    );
    setIndianGods(filteredArr);
  };

  useEffect(() => {
    MatchedData();
  }, [searchItem]);

  return (
    <>
      <div className="home-container">
        <div className="home-top-bar">
          <div className="home-search-filter-container">
            <div className="home-search-box">
              <GoSearch className="home-search-icon" />
              <input
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                type="text"
                className="home-search-input"
                placeholder="Search from the world's antique collection"
              />
            </div>
            <div
              onClick={() => setIsShowFilter(true)}
              className="home-filter-button"
            >
              <img
                src="download-filter-removebg-preview.png"
                className="home-filter-icon"
                alt=""
              />
              <span className="home-filter-text">FILTERS</span>
            </div>

            <Filter
              isShowFilter={isShowFilter}
              setIndianGods={setIndianGods}
              indianGods={indianGods}
            />
          </div>
          <div className="home-surprise-me-button">
            <TbSchoolBell className="home-surprise-me-icon" size={20} />
            <span className="home-surprise-me-text">SURPRISE ME</span>
          </div>
        </div>
        <div className="home-view-toggle">
          <div className="home-toggle-icon-container">
            <div className="home-toggle-icon">
              <GiHamburgerMenu size={26} />
            </div>
          </div>
          <div className="home-toggle-icon-container">
            <div className="home-toggle-icon">
              <HiMiniSquares2X2 size={26} />
            </div>
          </div>
        </div>

        <div className="home-card-grid">
          {!indianGods || indianGods.length === 0 ? (
            <div>
              <h1>No match found</h1>
            </div>
          ) : (
            indianGods?.map((item) => <Card item={item} key={item?.id} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
