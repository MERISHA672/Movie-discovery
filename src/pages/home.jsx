
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

const movies = [
  {
    title: "Interstellar",
    year: "2014",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Inception",
    year: "2010",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    title: "The Dark Knight",
    year: "2008",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  }
];

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#0b1120", minHeight: "100vh", color: "white", pb: 5 }}>
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(135deg, #172554, #581c87)"
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Discover Movies
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, color: "#e2e8f0" }}>
            Find your next favorite movie.
          </Typography>

          <Button
            variant="contained"
            href="/search"
            sx={{ backgroundColor: "#facc15", color: "#111827", fontWeight: "bold" }}
          >
            Explore Movies
          </Button>
        </Container>
      </Box>

      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Popular Movies 🎬
        </Typography>

        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid key={movie.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ backgroundColor: "#1e293b", color: "white", borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="380"
                  image={movie.image}
                  alt={movie.title}
                />

                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {movie.title}
                  </Typography>

                  <Typography sx={{ color: "#cbd5e1" }}>
                    Release year: {movie.year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
