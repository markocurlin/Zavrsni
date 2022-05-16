import { useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const studies = [
    {
      value: '130',
      label: '130',
    },
    {
      value: '150',
      label: '150',
    },
    {
      value: '530',
      label: '530',
    },
  ];

const StudiesForm = ({direction, onSelectStudy}) => {
    const [study, setStudy] = useState("");
    
    const handleChange = (event) => {
        const data = event.target.value;
        onSelectStudy(data);
        setStudy(data)
    }

    return(
        <Box>
            <TextField
                id="outlined-select-currency"
                select
                fullWidth
                label={direction}
                value={study}
                onChange={handleChange}
                helperText=""
            >
                {studies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    )
}

export default StudiesForm;