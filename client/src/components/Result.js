import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Result = ({subjectList, index}) => {
    const [subjects, setSubjects] = useState([])
    
    useEffect(() => {
        setSubjects(subjectList);
    })

    return (
        <div>
            <TableContainer sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex'}} component={Paper}>
                <Table sx={{ maxWidth: 1300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 400, backgroundColor: '#fcfdff',
                                         fontWeight: 'bold'  }}>{index + 1}. Semestar</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                         fontWeight: 'bold' }} align="right">Ocjena</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                         fontWeight: 'bold' }} align="right">ECTS</TableCell>
                            <TableCell sx={{ width: 400, backgroundColor: '#fcfdff',
                                         fontWeight: 'bold'  }}>Kolegij 1</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                         fontWeight: 'bold' }} align="right">Ocjena</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                         fontWeight: 'bold' }} align="right">ECTS</TableCell>
                            <TableCell sx={{ width: 400, backgroundColor: '#fcfdff',
                                         fontWeight: 'bold'  }}>Kolegij 2</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                         fontWeight: 'bold' }} align="right">Ocjena</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff',
                                         fontWeight: 'bold' }} align="right">ECTS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subjects.map((subject) => {
                            return(
                                <TableRow
                                    key={subject.Ime}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {subject.Ime}
                                    </TableCell>
                                    <TableCell align="right">
                                        {subject.Ocjena}
                                    </TableCell>
                                    <TableCell align="right">
                                        {subject.Ects}
                                    </TableCell>
                                    { (typeof subject.Polozeno === 'undefined') ? (
                                        <>
                                            <TableCell/>
                                            <TableCell/>
                                            <TableCell/>
                                            <TableCell/>
                                            <TableCell/>
                                            <TableCell/>
                                        </>
                                    ) : ( (subject.Polozeno.length === 1) ? (
                                        <>
                                            <TableCell>{subject.Polozeno[0].Ime}</TableCell>
                                            <TableCell align='right'>{subject.Polozeno[0].Ocjena}</TableCell>
                                            <TableCell align='right'>{subject.Polozeno[0].ECTS}</TableCell>
                                            <TableCell/>
                                            <TableCell/>
                                            <TableCell/>
                                        </> 
                                    ) : ( subject.Polozeno.map(sub => {
                                        return(
                                            <>
                                                <TableCell>{sub.Ime}</TableCell>
                                                <TableCell align='right'>{sub.Ocjena}</TableCell>
                                                <TableCell align='right'>{sub.ECTS}</TableCell>
                                            </>
                                        )
                                    })) )}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Result