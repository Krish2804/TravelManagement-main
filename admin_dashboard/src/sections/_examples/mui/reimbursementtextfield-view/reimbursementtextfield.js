import PropTypes from 'prop-types';
// @mui
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ComponentBlock from '../../component-block';

export default function ReimbursementTextfield({ variant }) {
  const navigate = useNavigate();

  const handleSave = () => {
    alert("Your Reimbursement Request is Submitted Successfully !!!");
    navigate('/', { replace: true });
  };

  const handleCancel = () => {
    navigate('/', { replace: true });
  };

  return (
    <form>
      <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
        <ComponentBlock title="Personal Details">
          <TextField
            variant={variant}
            fullWidth
            label="First Name"
            defaultValue=""
          />
          <TextField
            variant={variant}
            fullWidth
            label="Middle Name"
            defaultValue=""
          />
          <TextField
            variant={variant}
            fullWidth
            label="Last Name"
            defaultValue=""
          />
          <TextField
            variant={variant}
            fullWidth
            label="Employee I'd"
            defaultValue=""
          />
          <TextField
            variant={variant}
            fullWidth
            label="Employee Role"
            defaultValue=""
          />
          <TextField
            variant={variant}
            fullWidth
            label="Department"
            defaultValue=""
          />
        </ComponentBlock>

        <ComponentBlock title="Project Details">
          <TextField
            variant={variant}
            fullWidth
            label="Project Name"
          />
          <TextField
            variant={variant}
            fullWidth
            label="Project I'd"
          />
          <TextField
            variant={variant}
            fullWidth
            multiline
            label="Purpose"
          />
          <TextField
            variant={variant}
            fullWidth
            label="Starting Date"
          />
          <TextField
            variant={variant}
            fullWidth
            label="Ending Date"
          />
          <TextField
            variant={variant}
            fullWidth
            label="From"
          />
          <TextField
            variant={variant}
            fullWidth
            label="To"
          />
        </ComponentBlock>

        <ComponentBlock title="Files">
          <div>
            <p>Upload Project Report</p>
            <input
              type="file"
              name="projectReport"
              accept=".pdf,.docx,.xlsx" 
              multiple
            />
          </div>
          <div>
            <p>Upload Ticket PDF</p>
            <input
              type="file"
              name="ticketPDF"
              accept=".pdf"
              multiple
            />
          </div>
        </ComponentBlock>
      </Masonry>
      <Box>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" mb={3}>
          <Button variant="contained" onClick={handleSave}>
            Submit
          </Button>
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </form>
  );
}

ReimbursementTextfield.propTypes = {
  variant: PropTypes.string,
};
