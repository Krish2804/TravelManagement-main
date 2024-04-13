import PropTypes from 'prop-types';
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import ComponentBlock from '../../component-block';


ContactusTextField.propTypes = {
    variant: PropTypes.string,
};

export default function ContactusTextField({ variant }) {

    const navigate = useNavigate();

    const handleSave = () => {
        alert("Your Data has been successfully saved !!!")
        navigate('/', { replace: true });
    }


    return (
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
            <ComponentBlock title="Contact Form">

                <TextField
                    variant={variant}
                    fullWidth
                    label="Name"
                    defaultValue=""
                    required
                    type="text"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Email"
                    defaultValue=""
                    required
                    type="email"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    label="Subject"
                    defaultValue=""
                    required
                    type="text"
                />

                <TextField
                    variant={variant}
                    fullWidth
                    multiline
                    required
                    minRows={3}
                    label="Message"
                    type="text"
                />

                <Button variant="contained" onClick={handleSave} type="submit">Save</Button>

            </ComponentBlock>

        </Masonry>
    );

}
