import { Helmet } from 'react-helmet-async';
// sections
import StatusView from 'src/sections/status/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Status</title>
      </Helmet>

      <StatusView />
    </>
  );
}
