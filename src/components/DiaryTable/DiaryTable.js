import React from "react";
import '../../styles/diary-styles.css';
import DiaryTableRow from "../DiaryTableRow";


const DiaryTable = (props) => {

    const renderDiaryTableRows = props.diaryTableRows.map(
        ({no, subjectTime, subjectName, grade}, index) => (
            <DiaryTableRow
                key={index}
                no={no ? no: ''}
                subjectTime={subjectTime ? subjectTime: ''}
                subjectName={subjectName ? subjectName: ''}
                grade={grade ? grade: ''}
            />
        ));
    let emptyRowsCount = props.lessonsCount - renderDiaryTableRows.length;


    let no = renderDiaryTableRows.length + 1;
    let index = 0;

    const emptyTableRows = [];

    while (emptyRowsCount-- > 0) {
        emptyTableRows.push(<DiaryTableRow key={index++} no={no++}/>);
    }

    return (
        <div className="diary-day-wrapper">
            <div className="row diary-day-header">{props.dateStr}</div>
            <table className="table table-hover">
                <thead>
                    <tr className="row">
                        <th className="col-1">№</th>
                        <th className="col-3">Время</th>
                        <th className="col-5">Предмет</th>
                        <th className="col-3">Оценка</th>
                    </tr>
                </thead>
                <tbody>
                {renderDiaryTableRows}
                {emptyTableRows}
                </tbody>
            </table>
        </div>
    );
};

export default DiaryTable;