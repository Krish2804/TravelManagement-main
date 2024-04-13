import { Helmet } from 'react-helmet-async';
// sections
import ReimbursementView from 'src/sections/reimbursement/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Dashboard: Reimbursement</title>
            </Helmet>

            <ReimbursementView />
        </>
    );
}
