import { useEffect, useContext } from 'react';
import { useLocation  } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { SubjectContext } from '../SubjectsContext';
import axios from 'axios';
import ResultComponent from '../components/Result';
import ScrollToTop from '../components/ScrollToTop';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Result = () => {
    const {subjectList, setSubjectList} = useContext(SubjectContext);

    const location = useLocation()
    const { from } = location.state
    
    const [fromStudy, toStudy] = [...from];
    
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post('/subject', {fromStudy, toStudy, subjectList}).then((res) => {
            const subjects = res.data;
            //console.log(subjects);
            setSubjectList(subjects);
        })
    }, [])

    return(
        <>
            {subjectList.length === 0 ?
                <Container>
                    <Grid container textAlign='center' spacing={1}>
                        <Grid item xs={12} md={12}>
                            <Divider sx={{ marginTop: '7em', marginBottom: '3em' }} />
                            <SentimentVeryDissatisfiedIcon sx={{ color: '#677788', fontSize: '3em' }}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h5' sx={{ color: '#677788', fontWeight: 'normal'}}>Nažalost taj prijelaz ne postoji.</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Link to="/calculate" style={{ textDecoration: 'none' , color: "white"}} onClick={() => { window.scrollTo(0, 0); }}>
                                <Typography variant='h4' sx={{ color: '#677788', fontWeight: 'normal'}}>Probaj ponovno!</Typography>
                            </Link>
                            <Divider sx={{ marginTop: '3em', marginBottom: '5em' }} />
                        </Grid>
                    </Grid>
                </Container> : 
                <Container>
                    <Typography variant='h3' sx={{ marginTop: '1em', marginBottom: '1em', textAlign: 'center' }}>Priznati kolegiji</Typography>
                    {subjectList.map((subjects, index) => {
                    return(
                        <ResultComponent subjectList={subjects} index={index}/>
                    )})}
                </Container>
            }   
        </>
    )
}

export default Result;