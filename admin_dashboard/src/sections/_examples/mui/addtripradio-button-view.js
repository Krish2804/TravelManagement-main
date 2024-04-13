import React from 'react';
// @mui
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export default function AddTripRadioButtonView() {
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Container>
            <FormControl component="fieldset">
                <RadioGroup row value={selectedValue} onChange={handleChange}>
                    <FormControlLabel
                        value="byCompany"
                        control={<Radio size="medium" />}
                        label="By Company"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="bySelf"
                        control={<Radio size="medium" />}
                        label="By Self"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl>
        </Container>
    );
}
