import { Helmet } from 'react-helmet-async';

// sections
import AddTripView from 'src/sections/addTrip/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Dashboard: Add Trip</title>
            </Helmet>

            <AddTripView />
        </>
    );
}
