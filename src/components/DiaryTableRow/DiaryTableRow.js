import React from "react";
import '../../styles/diary-styles.css';

const DiaryTableRow = ({no, subjectTime, subjectName, grade}) => {
    return (
        <tr className="row">
            <td className="col-1">{no ? no : ''}</td>
            <td className="col-3">{subjectTime ? subjectTime : ''}</td>
            <td className="col-5">{subjectName ? subjectName : ''}</td>
            <td className="col-3 text-center">{grade ? grade : ''}</td>
        </tr>
    );
};

export default DiaryTableRow;