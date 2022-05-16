import { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { SubjectContext } from '../SubjectsContext';
import axios from "axios";
import StudiesForm from '../components/StudiesForm';
import Checklist from '../components/Checklist';
import ResultComponent from '../components/Result';
import ScrollToTop from '../components/ScrollToTop';
import { Box, Button, IconButton, Container, Grid, Typography, TextField, MenuItem} from '@mui/material';
import './CalculatePage.css';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';

//ogranicenja
//ako prijelaz ne postoji vrati poruku i tuzni smajlic

const Calculate = () => {
    const {subjectList, setSubjectList} = useContext(SubjectContext);
    const [fromStudy, setFromStudy] = useState([]);
    const [toStudy, setToStudy] = useState([]);
    const [buttonState, setButtonState] = useState(true);
    const [buttonStateList, setButtonStateList] = useState(new Array(SubjectContext.length).fill(false));

    useEffect(() => {
        setSubjectList([]);
    }, []);

    const handleStudyForm = (data) => {
        setSubjectList([]);
        if (data) {
            axios.post('/subjects', {data}).then((res) => {
                const subjects = res.data;
                setSubjectList(subjects);
            })
            setFromStudy(data);
            if (toStudy.length !== 0) {
                setButtonState(false);
            }
        }
    }

    const handleStudyFormTo = (data) => {
        if (data) {
            setToStudy(data);
            if (fromStudy.length !== 0) {
                setButtonState(false);
            }
        }
    }

    const handleButton = (data) => {
        console.log(buttonStateList)
        /*if (buttonState) {
            setButtonState(data);
        } else {
            setButtonState(data);
        }*/
    }

    return(
        <>
        {/*
            <ScrollToTop/>
        */}
            <Container sx={{ marginTop: '3em'}}>
                <Grid container justifyContent='center' textAlign='center' spacing={2}>
                    <Grid item md={12}>
                        <Typography variant='h5'>Promjena u par koraka</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant='body2'>Razmotri opcije i gradi budućnost po želji, u par koraka saznaj koji će ti predmeti biti priznati u slučaju promjene studija.</Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <InfoIcon sx={{ color: '#677788', marginRight: '0.5rem' }}/>
                            <Link to="/info" style={{ textDecoration: 'none' , color: "white"}} onClick={() => { window.scrollTo(0, 0); }}>
                                <Typography variant='subtitle1'>Koji je moj smjer?</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ marginTop: '3em', marginBottom: '3em' }}/>
                <Grid container justifyContent='center' alignItems='center' spacing={0}>
                    <Grid item xs={8} md={3}>
                        <StudiesForm direction="Iz" onSelectStudy={handleStudyForm}/>
                    </Grid>
                    <Grid item textAlign='center' xs={8} md={3}>
                        <IconButton><SyncAltIcon color='primary' className='icon'/></IconButton>
                    </Grid>
                    <Grid item xs={8} md={3}>
                        <StudiesForm direction="U" onSelectStudy={handleStudyFormTo} />
                    </Grid>
                </Grid>
                <Divider sx={{ marginTop: '3em', marginBottom: '3em' }}/>
            </Container>
            <Container>
                {subjectList.map((subjects, index) => {
                    return(
                        (subjects.length === 0) ? ( <></> ) : (
                            <Box key={`div-${index}`} id={index}>
                                <Checklist subjects={subjects} index={index} disableButton={handleButton}/>
                            </Box>
                        )
                    )
                })}
            </Container>
            <Container sx={{ marginTop: '3em', textAlign: 'center' }}>
                <Link to="result" style={{ textDecoration: "none" }} state={{ from: [fromStudy, toStudy] }} disabled={buttonState && 'disabled'}>
                    <Button variant='contained' color='primary' disabled={buttonState}>Izračunaj</Button>
                </Link>
            </Container>
        </>
    )
}

export default Calculate;