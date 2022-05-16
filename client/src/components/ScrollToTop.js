import { useState, useEffect } from 'react';
import { Box, SpeedDial } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleButton = () => {
       window.scrollTo({
           top: 0,
           behavior: 'smooth',
       }) 
    }
    
    return(
        <>
            <Box sx={{ position: 'fixed', bottom: -215, right: 40, height: 320, zIndex: 3 /*, transform: 'translateZ(0px)', flexGrow: 1*/}}>
                {showButton && <SpeedDial
                                    ariaLabel='scrollbtn'
                                    onClick={handleButton}
                                    icon={<KeyboardArrowUpIcon/>}
                                />
                }
            </Box>
        </>
    )
}

export default ScrollToTop;