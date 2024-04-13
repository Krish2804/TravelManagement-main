// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import SimpleSlider from 'src/components/carousel/custom-carousel';

// ----------------------------------------------------------------------

export default function AboutUsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" > About Us </Typography>

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
            "/assets/images/about/hero.jpg",
            "/assets/images/about/testimonials.jpg",
            "/assets/images/about/vision.jpg",
          ]} > </SimpleSlider>
          <Typography variant="body1" color="text.primary " sx={{marginTop:5}}>
            <p>
              Tech Elecon stands as the distinguished IT arm of the illustrious Elecon group, with an impressive track record spanning over 25 years in the domain of hardware, software, and networking solutions. Nestled strategically in Vitthal Udyognagar, within close proximity to the esteemed educational enclave of Vallabh Vidyanagar, Tech Elecon is uniquely positioned to pioneer advancements in the realm of IT solutions.
            </p>
            <Typography variant="h6" mt={2} color="text.primary">
              Core Offerings:
            </Typography>
            <ol>

              <li>Tailored Solutions: Tech Elecon prides itself on its ability to deliver bespoke web-based applications meticulously designed to seamlessly integrate into clients&apos; existing business frameworks. These solutions are not just software applications; they are dynamic tools crafted to adapt to evolving business processes, enabling clients to exercise real-time control and optimization of their operations. </li>
              <li>Product Portfolio: With a diverse array of offerings, Tech Elecon caters to a broad spectrum of industries, including industrial, military, and government sectors. From OEM level products to packaged solutions and ready-to-install systems, the company serves clients ranging from radio integrators to multibillion-dollar defense contractors. Each product undergoes rigorous quality assurance measures, ensuring reliability, efficiency, and compliance with industry standards. </li>
              <li>Commitment to Quality and Relationships: At Tech Elecon, fostering enduring partnerships is paramount. The company&apos;s unwavering commitment to delivering high-quality solutions and services is the cornerstone of its success. Through consistent investment in cutting-edge technology, robust infrastructure, and stringent quality control processes, Tech Elecon ensures that its clients receive solutions that not only meet but exceed their expectations. By nurturing long-term relationships built on trust, integrity, and mutual growth, Tech Elecon establishes itself as a trusted ally in the journey towards success. </li>
              <li>Customer-Centric Approach: Tech Elecon&apos;s ethos revolves around placing the customer at the heart of its operations. Through a single-window and collaborative approach, the company collaborates closely with clients to understand their unique challenges, objectives, and IT strategies. By leveraging its technical prowess and industry insights, Tech Elecon crafts tailored solutions that address clients&apos;x specific needs, empowering them to achieve their business goals with confidence and efficiency. </li>
              <li>Comprehensive Consultation: The adept team of analysts and consultants at Tech Elecon offers comprehensive consultancy services, providing clients with a 360-degree view of their IT landscape. From conducting in-depth feasibility studies and evaluations to overseeing the seamless implementation and ongoing maintenance of IT solutions, Tech Elecon ensures that clients receive holistic support at every stage of their journey. </li>


            </ol>

          </Typography>
        </Box>
      </Box>

    </Container >
  );
}
