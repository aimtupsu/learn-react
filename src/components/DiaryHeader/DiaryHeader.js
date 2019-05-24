import React from "react";
import '../../styles/diary-styles.css';
import DatePicker from "react-datepicker/es";

const DiaryHeader = ({date, leftArrowHandle, rightArrowHandle, handleChange}) => {

  return (
      <div className="row ">
          <div className="col-3 col-md-2">
              <input className="btn diary-arrow" type="submit" onClick={leftArrowHandle} value="Стрелка влево"/>
          </div>
          <div className="col-5 mx-auto">
              <div className="row align-items-center">
                  <p className="diary-p">{"Перейти к дате: "}</p>
                  <DatePicker
                      dateFormat="dd.MM.yyyy"
                      selected={date}
                      onChange={handleChange}
                  />
              </div>
          </div>
          <div className="col-3 col-md-2">
              <input className="btn diary-arrow" type="submit" onClick={rightArrowHandle} value="Стрелка вправо"/>
          </div>
      </div>
  );
};

export default DiaryHeader;