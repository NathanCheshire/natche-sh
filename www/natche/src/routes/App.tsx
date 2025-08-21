import { Box, Typography } from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        gap: "16px",
        backgroundColor: "white",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Kanit",
          fontWeight: 700,
          color: "#0f0f0f",
          fontSize: "3.5rem",
        }}
      >
        Natche
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 500,
          color: "#505050",
          fontSize: "0.9rem",
        }}
      >
        Website in progress, check back soon!
      </Typography>
    </Box>
  );
}
