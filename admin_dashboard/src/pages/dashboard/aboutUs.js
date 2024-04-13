import { Helmet } from 'react-helmet-async';
// sections
import AboutUsView from 'src/sections/aboutUs/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: About Us</title>
      </Helmet>

      <AboutUsView />
    </>
  );
}
