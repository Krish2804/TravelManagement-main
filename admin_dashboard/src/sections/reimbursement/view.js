// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import ReimbursementTextfieldPage from 'src/pages/components/mui/reimbursementtextfield'

// ----------------------------------------------------------------------

export default function ReimbursementView() {
    const settings = useSettingsContext();

    return (
        <Container maxWidth={settings.themeStretch ? false : 'xl'}>
            <Typography variant="h4"> Reimbursement </Typography>

            <Box
                sx={{
                    mt: 5,
                    width: 1,
                    borderRadius: 2,
                    bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
                    border: (theme) => `dashed 1px ${theme.palette.divider}`,
                }}
            >
                <ReimbursementTextfieldPage />

            </Box>
        </Container>
    );
}
