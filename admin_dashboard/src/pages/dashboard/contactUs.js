import { Helmet } from 'react-helmet-async';
// sections
import ContactUsView from 'src/sections/contactUs/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Contact Us</title>
      </Helmet>

      <ContactUsView />
    </>
  );
}
