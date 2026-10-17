
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box
} from "@mui/material";

const movies = [
  {
    title: "Interstellar",
    year: 2014,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Inception",
    year: 2010,
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  }
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ backgroundColor: "#0b1120", minHeight: "100vh", color: "white", py: 5 }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Search Movies 🔎
        </Typography>

        <TextField
          fullWidth
          label="Enter a movie title"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          sx={{
            mb: 4,
            backgroundColor: "white",
            borderRadius: 1
          }}
        />

        <Grid container spacing={3}>
          {filteredMovies.map((movie) => (
            <Grid key={movie.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ backgroundColor: "#1e293b", color: "white" }}>
                <CardMedia
                  component="img"
                  height="350"
                  image={movie.image}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="h6">{movie.title}</Typography>
                  <Typography>Release year: {movie.year}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredMovies.length === 0 && (
          <Typography sx={{ mt: 3 }}>
            No movies found. Try another title.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
