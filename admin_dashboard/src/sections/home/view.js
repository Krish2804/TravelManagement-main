// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import SimpleSlider from 'src/components/carousel/custom-carousel';
import Hero from 'src/components/home/hero';

export default function HomeView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>

      <Typography variant="h4" > Home Page </Typography>

      <Box
        sx={{
          mt: 2,
          width: 1,
          height: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `1px dashed ${theme.palette.divider}`,
        }}
      >

        <Box sx={{ p: 5, borderRadius: 2, color: "text.secondary" }}>

          <SimpleSlider imgArr={[
            "/assets/images/home/Elecon/banner-1.jpg",
            "/assets/images/home/Elecon/banner-2.jpg",
            "/assets/images/home/Elecon/banner-3.jpg",
          ]} > </SimpleSlider>
          <Hero />
        </Box>
      </Box>
    </Container>
  );
}
