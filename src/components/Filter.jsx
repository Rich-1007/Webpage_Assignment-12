import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import MultiRangeSlider from "multi-range-slider-react";
import { statueData } from "../data";
import "../styles/Filter.css";

const Filter = ({ isShowFilter, setIndianGods }) => {
  const [minValue, set_minValue] = useState(100);
  const [maxValue, set_maxValue] = useState(500);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const applyFilter = () => {
    const filteredArr = statueData.filter((item) => {
      if (item?.yearOfOrigin >= minValue && item?.yearOfOrigin <= maxValue) {
        return true;
      }
      return false;
    });
    console.log(filteredArr);
    setIndianGods(filteredArr);
  };
  return (
    <>
      {isShowFilter && (
        <div className="filter-modal-overlay">
          <div className="filter-modal-content">
            <div className="filter-modal-inner">
              <span className="filter-modal-title">Search by filter</span>

              <div className="filter-section">
                <span className="filter-label">Select Dynasty</span>
                <div className="filter-option">
                  <span>All</span>
                  <FaSortDown />
                </div>
              </div>

              <div className="filter-period-section">
                <span className="filter-label">Select Period</span>
                <div className="multi-range-slider-container">
                  <MultiRangeSlider
                    labels={[100, 300, 500, 700, 900, 1100, 1300, 1500, 1700]}
                    min={100}
                    max={1700}
                    step={200}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => handleInput(e)}
                  />
                </div>
              </div>

              <div className="filter-section">
                <span className="filter-label">Select Material</span>
                <div className="filter-option">
                  <span>All</span>
                  <FaSortDown />
                </div>
              </div>

              <div className="filter-section">
                <span className="filter-label">Select Region</span>
                <div className="filter-option">
                  <span>All</span>
                  <FaSortDown />
                </div>
              </div>
            </div>

            <div className="filter-modal-actions">
              <button
                className="clear-filter-button"
                onClick={() => setIndianGods(statueData)}
              >
                <span className="clear-filter-text">Clear All</span>
              </button>
              <button className="apply-filter-button" onClick={applyFilter}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
