import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/diary-styles.css";
import DiaryHeader from "../../components/DiaryHeader";
import DiaryWeek from "../../components/DiaryWeek";
import DiaryService from "../../services/DiaryService";


export default class SchoolDiary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props.date ? this.props.date : new Date()
        };

        this.leftArrowHandle = this.leftArrowHandle.bind(this);
        this.rightArrowHandle = this.rightArrowHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    leftArrowHandle() {
        const newDate = this.state.date;
        newDate.setDate(this.state.date.getDate() - 7);
        console.log(newDate);

        this.setState({
            date: newDate
        });
    }

    rightArrowHandle() {

        const newDate = this.state.date;
        newDate.setDate(this.state.date.getDate() + 7);
        console.log(newDate);

        this.setState({
            date: newDate
        });
    }

    handleChange(date) {
        if (Object.prototype.toString.call(date) === "[object Date]") {
            if (!isNaN(date.getTime())) {
                this.setState({
                    date: date
                });
            }
        }
    }

    static getMondayDate(date) {

        const currDate = new Date(date);
        // Понедельник имеет номер 1, а не 0 (Номер Воскресения = 0)
        const dayNo = currDate.getDay() - 1;
        currDate.setDate(currDate.getDate() - dayNo);
        return currDate;
    }

    render() {

        const dateMonday = this.getMondayDate(this.state.date);
        const dateSaturday = new Date(dateMonday);
        dateSaturday.setDate(dateSaturday.getDate() + 6);
        const student = {
                id: 1,
                schoolId: 1,
                schoolGroupId: 1
            };

        return (
            <div className="diary-wrapper">
                <div className="container">
                    <DiaryHeader
                        date={this.state.date}
                        leftArrowHandle={this.leftArrowHandle}
                        rightArrowHandle={this.rightArrowHandle}
                        handleChange={this.handleChange}
                    />
                    <DiaryWeek
                        lessonsCount={8}
                        date = {dateMonday}
                        lessons= {DiaryService.getGrades(
                            student,
                            dateMonday,
                            dateSaturday
                        )}
                    />
                    <div className="row diary-footer">
                    </div>
                </div>
            </div>
        );
    }
}