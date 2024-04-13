import { Helmet } from 'react-helmet-async';
// sections
import AddTripTextfieldView from 'src/sections/_examples/mui/addtriptextfield-view';

// ----------------------------------------------------------------------

export default function AddTripTextfieldPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Add Trip</title>
      </Helmet>

      <AddTripTextfieldView />
    </>
  );
}
