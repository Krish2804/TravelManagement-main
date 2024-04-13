import { Helmet } from 'react-helmet-async';
// sections
import ReimbursementTextfieldView from 'src/sections/_examples/mui/reimbursementtextfield-view';

// ----------------------------------------------------------------------

export default function ReimbursementTextfieldPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Reimbursement</title>
      </Helmet>

      <ReimbursementTextfieldView />
    </>
  );
}
