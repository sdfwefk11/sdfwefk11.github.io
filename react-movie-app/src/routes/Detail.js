import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moviequal from "../components/Moviequal";
function Detail() {
  const [Loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img alt={movies.id} src={movies.medium_cover_image}></img>
          <h2>{`[year :${movies.year}] [rating: ${movies.rating}] [runtime: ${movies.runtime}minutes] [download count: ${movies.download_count}] [like count: ${movies.like_count}]`}</h2>
          {movies.torrents.map((item) => (
            <div key={item.url}>
              <Moviequal url={item.url} quality={item.quality} />
            </div>
          ))}
          <p>
            {movies.description_intro === ""
              ? "this movie has no description"
              : movies.description_intro}
          </p>
          <ul>
            {movies.genres.map((genres, index) => (
              <li key={index}>{genres}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
