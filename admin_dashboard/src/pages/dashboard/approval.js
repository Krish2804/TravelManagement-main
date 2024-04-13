import { Helmet } from 'react-helmet-async';
// sections
import ApprovalView from 'src/sections/approval/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Approval</title>
      </Helmet>

      <ApprovalView />
    </>
  );
}
