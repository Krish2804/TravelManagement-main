// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import AddTripTextfieldPage from 'src/pages/components/mui/addTriptextfield'

// ----------------------------------------------------------------------

export default function AddTripView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Add Your Trip Here </Typography>

      <Box
        sx={{
          mt: 2,
          width: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <AddTripTextfieldPage />

      </Box>
    </Container >
  );
}
