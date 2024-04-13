// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//
import ReimbursementTextfield from './reimbursementtextfield';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'outlined',
    label: 'Outlined',
    component: <ReimbursementTextfield variant="outlined" />,
  },
];

// ----------------------------------------------------------------------

export default function ReimbursementTextfieldView() {
  const currentTab = "outlined";

  return (
    <Container>
      <form noValidate autoComplete="off">
        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{my: 5}}>
                {tab.component}
              </Box>
            )
        )}
      </form>
    </Container>
  );
}
