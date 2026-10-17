
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid
} from "@mui/material";

const favoriteMovies = [
  {
    title: "Interstellar",
    year: 2014,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Inception",
    year: 2010,
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  }
];

export default function Favorites() {
  return (
    <Box sx={{ backgroundColor: "#0b1120", minHeight: "100vh", color: "white", py: 5 }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          ❤️ My Favorite Movies
        </Typography>

        <Typography sx={{ mb: 4, color: "#cbd5e1" }}>
          Your favorite movies in one place.
        </Typography>

        <Grid container spacing={3}>
          {favoriteMovies.map((movie) => (
            <Grid key={movie.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ backgroundColor: "#1e293b", color: "white", borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="350"
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
