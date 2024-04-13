import { Helmet } from 'react-helmet-async';
// sections
import AddTripRadioButtonView from 'src/sections/_examples/mui/addtripradio-button-view';

// ----------------------------------------------------------------------

export default function AddTripRadioButtonPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Add Trip</title>
      </Helmet>

      <AddTripRadioButtonView />
    </>
  );
}
