import {Link} from 'react-router-dom';
import StudiesList from '../components/StudiesList';
import ScrollToTop from '../components/ScrollToTop';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

//vjv cemo izbacit razlikovni, diplomski i poslijediplomski

const preddiplomski = [
    {Kod: '110', Ime: 'Elektrotehnika i informacijska tehnologija', Url: 'https://data.fesb.unist.hr/documents/public/EIT_110.pdf'},
    {Kod: '111', Ime: 'Automatika i sustavi', Url: 'https://data.fesb.unist.hr/documents/public/EIT_110.pdf'},
    {Kod: '112', Ime: 'Elektronika i računalno inženjerstvo', Url: 'https://data.fesb.unist.hr/documents/public/EIT_110.pdf'},
    {Kod: '113', Ime: 'Elektrotehnika', Url: 'https://data.fesb.unist.hr/documents/public/EIT_110.pdf'},
    {Kod: '114', Ime: 'Komunikacijska i informacijska tehnologija', Url: 'https://data.fesb.unist.hr/documents/public/EIT_110.pdf'},
    {Kod: '120', Ime: 'Računarstvo', Url: 'https://data.fesb.unist.hr/documents/public/Racunarstvo_120.pdf'},
    {Kod: '130', Ime: 'Strojarstvo', Url: 'https://data.fesb.unist.hr/documents/public/Strojarstvo_130_2019.pdf'},
    {Kod: '140', Ime: 'Brodogradnja', Url: 'https://data.fesb.unist.hr/documents/public/140_ElaboratPreddiplomskiBrodogradnja.pdf'},
    {Kod: '150', Ime: 'Industrijsko inženjerstvo', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Industrijsko_150.pdf'}
];

const diplomski = [
    {Kod: '210', Ime: 'Automatika i sustavi', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Automatika_210.pdf'},
    {Kod: '220', Ime: 'Elektronika i računalno inženjerstvo', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Elektronika_220.pdf'},
    {Kod: '221', Ime: 'Elektronika', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Elektronika_220.pdf'},
    {Kod: '222', Ime: 'Računalno inženjerstvo', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Elektronika_220.pdf'},
    {Kod: '230', Ime: 'Elektrotehnika', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Energetika_230.pdf'},
    {Kod: '231', Ime: 'Automatizacija i pogoni', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Energetika_230.pdf'},
    {Kod: '232', Ime: 'Elektroenergetski sustavi', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Energetika_230.pdf'},
    {Kod: '241', Ime: 'Bežične komunikacije', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/KIT_240.pdf'},
    {Kod: '242', Ime: 'Telekomunikacije i informatika', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/KIT_240.pdf'},
    {Kod: '250', Ime: 'Računarstvo', Url: 'https://data.fesb.unist.hr/documents/public/Racunarstvo_250.pdf'},
    {Kod: '261', Ime: 'Konstrukcijsko-energetsko strojarstvo', Url: 'https://data.fesb.unist.hr/documents/public/Strojarstvo_260_2019.pdf'},
    {Kod: '262', Ime: 'Računalno projektiranje i inženjerstvo', Url: 'https://data.fesb.unist.hr/documents/public/Strojarstvo_260_2019.pdf'},
    {Kod: '263', Ime: 'Proizvodno strojarstvo', Url: 'https://data.fesb.unist.hr/documents/public/Strojarstvo_260_2019.pdf'},
    {Kod: '270', Ime: 'Industrijsko inženjerstvo', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Industrijsko_270.pdf'},
    {Kod: '271', Ime: 'Proizvodni management', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Industrijsko_270.pdf'},
    {Kod: '272', Ime: 'Upravljanje životnim ciklusom proizvoda', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Industrijsko_270.pdf'},
    {Kod: '280', Ime: 'Brodogradnja', Url: 'https://data.fesb.unist.hr/documents/public/Brodogradnja_280_2019.pdf'}
];

const poslijediplomski = [
    {Kod: '310', Ime: 'Elektrotehnika i informacijska tehnologija', Url: 'https://www.fesb.unist.hr/wp-content/uploads/2021/09/A.1_Elaborat_o_studijskom_programu_EIT_travanj_2021.pdf'},
    {Kod: '330', Ime: 'Strojarstvo', Url: 'https://elearning.fesb.unist.hr/pluginfile.php/22971/mod_resource/content/4/Elaborat-poslijediplomski-strojarstvo-travanj-2021-hrv.pdf'}
];


const strucni = [
    {Kod: '510', Ime: 'Elektrotehnika', Url: 'https://data.fesb.unist.hr/documents/public/EIT_510.pdf'},
    {Kod: '511', Ime: 'Elektroenergetika', Url: 'https://data.fesb.unist.hr/documents/public/EIT_510.pdf'},
    {Kod: '512', Ime: 'Elektronika', Url: 'https://data.fesb.unist.hr/documents/public/EIT_510.pdf'},
    {Kod: '530', Ime: 'Strojarstvo', Url: 'https://data.fesb.unist.hr/documents/public/ELABORAT_STUDIJSKI_PROGRAM_530.pdf'},
    {Kod: '540', Ime: 'Brodogradnja', Url: 'http://testhr-wp.fesb.unist.hr/wp-content/uploads/2018/01/Brodogradnja_540.pdf'},
    {Kod: '550', Ime: 'Računarstvo', Url: 'https://data.fesb.unist.hr/documents/public/Racunarstvo_550.pdf'}
];

const razlikovni = [
    {Kod: '910', Ime: 'Automatika i sustavi'},
    {Kod: '920', Ime: 'Elektronika i računalno inženjerstvo'},
    {Kod: '930', Ime: 'Elektrotehnika'},
    {Kod: '940', Ime: 'Komunikacijska i informacijska tehnologija'},
    {Kod: '950', Ime: 'Računarstvo'},
    {Kod: '960', Ime: 'Strojarstvo'},
    {Kod: '970', Ime: 'Brodogradnja'}
]

const Info = () => {
    return (
        <>
            <ScrollToTop/>
            <Container>
                <Box sx={{ margin: '50px 0px 50px 0px' }}>
                    <Typography variant='h5'>Što su ECTS bodovi i koja je njihova vrijednost?</Typography>
                    <Typography variant='subtitle1'>Svaki studij ima svoju ‘težinu’ iskazanu kroz broj ECTS bodova koji se ‘sakupljaju’ odabirom predmeta koji čine taj studij. Svaki predmet nosi određeni broj ECTS bodova(zbroj bodova za svaki od oblika nastave). ECTS bod ‘vrijedi’ 30 sati rada. U većini slučajeva radno opterećenje redovitoga studenta u jednoj godini iznosi 1800 sati.</Typography>
                </Box>
                <Box sx={{ marginTop: '30px', marginBottom: '20px'}}>
                    <Typography variant='h5'>Preddiplomski sveučilišni studiji</Typography> 
                    <Typography variant='body2'>Prva razina naziva se preddiplomski studij i traje 3 godine (180 ECTS bodova), a njegovim završetkom stječe se akademski naziv sveučilišni prvostupnik odnosno baccalaureus s naznakom struke. Završetkom preddiplomskog studija stječu se znanja potrebna za obavljanje određenih stručnih poslova koji se traže na tržištu rada, a s druge strane preduvjet je za upis u sljedeći obrazovni stupanj ili diplomski studij.</Typography>
                </Box>
                <StudiesList studies={preddiplomski}/>
                <Box sx={{ marginTop: '30px', marginBottom: '20px'}}>
                    <Typography variant='h5'>Diplomski studiji</Typography>
                    <Typography variant='body2'>Završetkom diplomskog studija, koji traje dvije godine stječe se 120 ECTS bodova, formira se cjelovito obrazovan stručnjak sposoban za rješavanje najsloženijih inženjerskih zadataka i sudjelovanje u znanstvenoistraživačkom radu. Završetkom diplomskog studija stječe se diploma i akademski naziv magistar s naznakom struke.</Typography> 
                </Box>
                <StudiesList studies={diplomski}/>
                <Box sx={{ marginTop: '30px', marginBottom: '20px'}}>
                    <Typography variant='h5'>Poslijediplomski studiji</Typography> 
                    <Typography variant='body2'>Treća razina sveučilišnog obrazovanja je poslijediplomski studij (doktorski studij), koji se upisuje po završetku diplomskog studija. Poslijediplomski studiji na FESB-u traju tri godine i stječe se akademski stupanj doktora znanosti.</Typography>
                </Box>
                <StudiesList studies={poslijediplomski}/>
                <Box sx={{ marginTop: '30px', marginBottom: '20px'}}>
                    <Typography variant='h5'>Preddiplomski stručni studiji</Typography> 
                    <Typography variant='body2'>Na stručnim studijima koji traju tri godine stječe se 180 ECTS bodova, studenti se osposobljavaju za praktična znanja koja im omogućavaju zapošljavanje na određenim stručnim poslovima. Završetkom stručnog studija stječe se stručni naziv stručni prvostupnik s naznakom struke.</Typography>
                </Box>
                <StudiesList studies={strucni}/>
                {/*<StudiesList studies={razlikovni}/>*/}
            </Container>
            <Container sx={{ marginTop: '3em' }}>
                <Grid container justifyContent='center' textAlign='center'>
                    <Grid item xs={12} md={12}>
                        <Typography variant='h4'>Započni već danas</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant='body1'>Brzo i efikasno razmotri svoje opcije u daljnjem obrazovanju.</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ marginTop: '1rem' }}>
                        <Link to='../calculate' style={{ textDecoration: 'none' }} onClick={ () => { window.scrollTo(0, 0) }}>
                            <Button variant='contained' color='primary'>Kreni</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Info;