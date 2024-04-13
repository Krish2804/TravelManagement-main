import { Helmet } from 'react-helmet-async';
// sections
import ContactusTextfieldView from 'src/sections/_examples/mui/ContactusTextfieldView';

// ----------------------------------------------------------------------

export default function ContactusTextfieldPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Contact Us</title>
      </Helmet>

      <ContactusTextfieldView />
    </>
  );
}
