class DiaryService {

    /*getStudent = ({studentName}) => {

    };*/

    static getGrades(student, dateFrom, dateTo) {

        const schoolId = student.schoolId;
        const schoolGroupId = student.schoolGroupId;
        const studentId = student.id;

        const url = `/schools/${schoolId}/school-groups/${schoolGroupId}/students/${studentId}/`
            +`grade-book-rows?date-from=${dateFrom.toLocaleDateString()}&date-to=${dateTo.toLocaleDateString()}`;

        const data = fetch(url).then(res => res.json());

        console.log(data);

        return [[{
            no: 1,
            subjectTime: '08:15',
            subjectName: 'История',
            grade: ''
        },{
            no: 2,
            subjectTime: '10:10',
            subjectName: 'Русский язык',
            grade: ''
        }], [{
            no: 1,
        }, {
            no: 2,
        }, {
            no: 3,
            subjectTime: '11:15',
            subjectName: 'Физика',
            grade: '4'
        },{
            no: 4,
            subjectTime: '12:20',
            subjectName: 'Математика',
            grade: ''
        }], [

        ], [

        ], [

        ], [

        ]
        ];
    }
}

export default DiaryService;