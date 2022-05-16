import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinkIcon from '@mui/icons-material/Link';
import LaunchIcon from '@mui/icons-material/Launch';

const StudiesList = ({studies}) => {
    return (
        <>
            <TableContainer sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex'}} component={Paper}>
                <Table fullwidth='true' aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' sx={{ backgroundColor: '#fcfdff',
                                            fontWeight: 'bold' }}>Kod</TableCell>
                            <TableCell align='left' sx={{ backgroundColor: '#fcfdff',
                                            fontWeight: 'bold' }}>Ime</TableCell>
                            <TableCell sx={{ backgroundColor: '#fcfdff' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studies.map((study) => (
                            <TableRow key={study.Ime} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align='center' component="th" scope="row">
                                    {study.Kod}
                                </TableCell>
                                <TableCell align='left'>
                                    {study.Ime}
                                </TableCell>
                                <TableCell align='center'>
                                    <Link href={`${study.Url}`} /*color='inherit'*/ underline='none' target='_blank' rel='noopoener'>
                                        <LaunchIcon/>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default StudiesList;