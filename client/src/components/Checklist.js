import { useEffect, useState, useContext } from "react";
import { SubjectContext } from '../SubjectsContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Checklist = ({subjects, index, disableButton}) => {
    const [gradeList, setGradeList] = useState(new Array(subjects.length).fill({ grade: "",  state: true}));

    let title = '';

    if (index !== 6) {
        title = `${index + 1}. Semestar`;
    } else {
        title = `Izborni predmeti`;
    }

    //sredi kod
    gradeList.map((grade, index) => {
        if (['1', '2', '3', '4', '5'].includes(grade.grade)) {
            subjects[index]["Ocjena"] = grade.grade;
        } else {
            subjects[index]["Ocjena"] = "1";
        }
    })
    

    const handleChange = (event) => {
        const value = event.target.value;
        const position = event.target.id;
        
        const updatedGradeList = gradeList.map((subject, index) => {
            if (['1', '2', '3', '4', '5', ''].includes(value)) {
                if (index == position) {
                    disableButton(false)
                    return { grade: value,  state: true}
                }
            } else {
                if (index == position) {
                    disableButton(true)
                    return { grade: value,  state: false}
                }
            }
            
            return subject;
        });
        
        setGradeList(updatedGradeList);
    }

    return (
        <>
            <TableContainer sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex'}} component={Paper}>
                <Table fullwidth='true' aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                            fontWeight: 'bold'}}>{title}</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                            fontWeight: 'bold' }} align="right">Ocjena</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                            fontWeight: 'bold' }} align="right">ECTS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subjects.map((subject, index) => (
                            <TableRow
                            key={subject.Ime}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='left' component="th" scope="row">
                                    {subject.Ime}
                                </TableCell>
                                <TableCell align="right">
                                    <TextField
                                        error={gradeList[index].state === false}
                                        value={gradeList[index].grade}
                                        id={`${index}`}
                                        label="Ocjena"
                                        //type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={handleChange}
                                        sx={{ marginTop: '25px'}}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    {subject.Ects}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Checklist;