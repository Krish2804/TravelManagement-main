import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
// @mui
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//
// import AddTripRadioButtonPage from 'src/pages/components/mui/addtripradio-button';
// eslint-disable-next-line import/no-unresolved
// import AddTripRadioButtonPage from 'src/pages/components/mui/addtripradio-button';
import ComponentBlock from '../../component-block';

// ----------------------------------------------------------------------

const validationSchema = yup.object({
  projectName: yup.string().required('Project Name is Required'),
  projectId: yup.string().required('Project ID is Required'),
  purpose: yup.string().required('Purpose is Required'),
  startDate: yup.date().required('Starting Date is Required'),
  endDate: yup.date().required('Ending Date is Required').min(
    yup.ref('startDate'),
    'Ending Date must be after Starting Date'
  ),
  from: yup.string().required('Enter the starting place of journey'),
  to: yup.string().required('Enter the ending place of journey'),
  clientName: yup.string().required('Client Name is Required'),
  companyName: yup.string().required('Company Name is Required'),
  clientEmail: yup.string().email('Invalid email format').required('Client Email is Required'),
  clientContact: yup.number().required('Client Contact is Required'),
  // accommodation: yup.string().oneOf(['byCompany', 'bySelf']).required().oneOf(['byCompany', 'bySelf']),
});

export default function AddTripTextfield({ variant }) {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema), // Apply Yup validation schema
  });

  const handleSave = (data) => {
    // Handle form submission logic (e.g., send data to server)
    console.log('Form data:', data);
    alert('Your Data has been successfully saved !!!');
    navigate('/', { replace: true });
  };

  const handleCancel = () => {
    navigate('/', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
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

          <TextField
            variant={variant}
            fullWidth
            label="Date of Birth"
            defaultValue=""
          />

          <TextField
            variant={variant}
            fullWidth
            label="Age"
            defaultValue=""
          />

          <TextField
            variant={variant}
            fullWidth
            label="Gender"
            defaultValue=""
          />

          <TextField
            variant={variant}
            fullWidth
            label="Email"
            defaultValue=""
          />

          <TextField
            variant={variant}
            fullWidth
            label="Contact"
            defaultValue=""
          />

        </ComponentBlock>

        <ComponentBlock title="Project Details">

          <TextField
            {...register('projectName')}
            variant={variant}
            id='projectName'
            name='projectName'
            required="abc"
            fullWidth
            label="Project Name"
          />
          {errors.projectName && (
            <Box sx={{ color: 'red' }}>{errors.projectName.message}</Box>
          )}

          <TextField
            {...register('projectId')}
            variant={variant}
            id='projectId'
            name='projectId'
            required=" "
            fullWidth
            label="Project I'd"
          />
          {errors.projectId && (
            <Box sx={{ color: 'red' }}>{errors.projectId.message}</Box>
          )}

          <TextField
            {...register('purpose')}
            variant={variant}
            id='purpose'
            name='purpose'
            required=" "
            fullWidth
            multiline
            label="Purpose"
          />
          {errors.purpose && (
            <Box sx={{ color: 'red' }}>{errors.purpose.message}</Box>
          )}

          <TextField
            {...register('startDate')}
            variant={variant}
            id='startDate'
            name='startDate'
            required=" "
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Starting Date"
            type='date'
          />
          {errors.startDate && (
            <Box sx={{ color: 'red' }}>{errors.startDate.message}</Box>
          )}

          <TextField
            {...register('endDate')}
            variant={variant}
            id='endDate'
            name='endDate'
            required=" "
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Ending Date"
            type='date'
          />
          {errors.endDate && (
            <Box sx={{ color: 'red' }}>{errors.endDate.message}</Box>
          )}

          <TextField
            {...register('from')}
            variant={variant}
            id='from'
            name='from'
            required=" "
            fullWidth
            label="From"
          />
          {errors.from && (
            <Box sx={{ color: 'red' }}>{errors.from.message}</Box>
          )}

          <TextField
            {...register('to')}
            variant={variant}
            id='to'
            name='to'
            required=" "
            fullWidth
            label="To"
          />
          {errors.to && (
            <Box sx={{ color: 'red' }}>{errors.to.message}</Box>
          )}

        </ComponentBlock>

        <ComponentBlock title="Client Details">

          <TextField
            {...register('clientName')}
            variant={variant}
            id='clientName'
            name='clientName'
            required
            fullWidth
            label="Client Name"
          />
          {errors.clientName && (
            <Box sx={{ color: 'red' }}>{errors.clientName.message}</Box>
          )}

          <TextField
            {...register('companyName')}
            variant={variant}
            id='companyName'
            name='companyName'
            required
            fullWidth
            label="Company Name"
          />
          {errors.companyName && (
            <Box sx={{ color: 'red' }}>{errors.companyName.message}</Box>
          )}

          <TextField
            {...register('clientEmail')}
            variant={variant}
            id='clientEmail'
            name='clientEmail'
            required
            fullWidth
            label="Client's Email"
          />
          {errors.clientEmail && (
            <Box sx={{ color: 'red' }}>{errors.clientEmail.message}</Box>
          )}

          <TextField
            {...register('clientContact')}
            variant={variant}
            id='clientContact'
            name='clientContact'
            required
            fullWidth
            label="Client's Contact Number"
          />
          {errors.clientContact && (
            <Box sx={{ color: 'red' }}>{errors.clientContact.message}</Box>
          )}

        </ComponentBlock>

        <ComponentBlock title="Accommodation">
          <FormControl component="fieldset">
            <RadioGroup
              {...register('accommodation')}
              row
              id="accommodation"
              name="accommodation"
              spacing={2}
              // error={!!errors.accommodation}
            >
              <FormControlLabel
                value="byCompany"
                control={<Radio />}
                label="By Company"
                name="byCompany"
              />
              <FormControlLabel
                value="bySelf"
                control={<Radio />}
                label="By Self"
                name="bySelf"
              />
            </RadioGroup>
          </FormControl>
          {/* {errors.accommodation && (
            <Box sx={{ color: 'red' }}>{errors.accommodation.message}</Box>
          )} */}
        </ComponentBlock>

      </Masonry>

      <Box>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" mb={3}>
          <Button variant="contained" type="submit" onClick={handleSubmit(handleSave)}>
            Save
          </Button>
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </form>
  );
}

AddTripTextfield.propTypes = {
  variant: PropTypes.string,
};
