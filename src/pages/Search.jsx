import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchtextContext";
import { options } from "../utils/Options";
import MovieDetailCard from "../components/MovieDetailCard";

const Search = () => {
  const { searchText } = useContext(SearchContext);
  const [movieJson, setMovieJson] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchMovieFetch = async () => {
      if (!searchText.trim()) return;
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            searchText
          )}&include_adult=false&language=en-US&page=1`,
          options
        );

        const json = await response.json();
        const firstResult = json.results?.[0];

        setMovieJson(firstResult || null);
      } catch (error) {
        console.error("Error in Searching Movie", error);
      } finally {
        setLoading(false);
      }
    };

    searchMovieFetch();
  }, [searchText]);

  return (
    <div className="min-h-screen md:py-10 md:px-25 p-8">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : movieJson ? (
        <MovieDetailCard movie={movieJson} />
      ) : (
        <p className="text-center text-gray-500">
          No movie found for "<strong>{searchText}</strong>"
        </p>
      )}
    </div>
  );
};

export default Search;
