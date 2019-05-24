import React, {Fragment} from "react";
import '../../styles/diary-styles.css';
import DiaryTable from "../DiaryTable";

const DiaryWeek = ({lessonsCount, date, lessons}) => {

    let dates = new Array(6).fill(date);

    dates = dates.map((date, index) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + index);
        return newDate.toLocaleDateString();
    });

    return (
        <Fragment>
            <div className="row">
                <div className="col-6">
                    <DiaryTable dateStr={"Понедельник " + dates[0]} lessonsCount={lessonsCount} diaryTableRows={lessons[0]}/>
                </div>
                <div className="col-6">
                    <DiaryTable dateStr={"Вторник " + dates[1]} lessonsCount={lessonsCount} diaryTableRows={lessons[1]}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <DiaryTable dateStr={"Среда " + dates[2]} lessonsCount={lessonsCount} diaryTableRows={lessons[2]}/>
                </div>
                <div className="col-6">
                    <DiaryTable dateStr={"Четверг " + dates[3]} lessonsCount={lessonsCount} diaryTableRows={lessons[3]}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <DiaryTable dateStr={"Пятница " + dates[4]} lessonsCount={lessonsCount} diaryTableRows={lessons[4]}/>
                </div>
                <div className="col-6">
                    <DiaryTable dateStr={"Суббота " + dates[5]} lessonsCount={lessonsCount} diaryTableRows={lessons[5]}/>
                </div>
            </div>
        </Fragment>
    );
};

export default DiaryWeek;