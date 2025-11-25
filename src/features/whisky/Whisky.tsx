import { useParams, Link } from "react-router-dom";
import structures from "../../data";
import Navbar from "../../core/presentation/components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../../core/presentation/components/Footer";

function Whisky() {
  const { id } = useParams();
  const index = Number(id);
  const whisky = structures[index];

  return (
    <div>
      <Navbar active="1" />

      <Container sx={{ mt: 3 }}>

        <Typography sx={{ mb: 2 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Главная
          </Link>{" "}
          / {whisky.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          {/* Картинка */}
          <Box sx={{ flex: 1 }}>
            <img
              src={whisky.img}
              alt={whisky.title}
              style={{ height: "400px", margin: "auto", borderRadius: "12px", display: "block" }}
            />
          </Box>

          {/* Описание */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {whisky.title}
            </Typography>

            {whisky.description.map((text, i) => (
              <Typography key={i} variant="body1" sx={{ mb: 2 }}>
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Whisky;
