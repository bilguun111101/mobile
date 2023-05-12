// import { NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN } from "@env";
import { NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN } from "@env";

export const fetchPlaces = async (searchInput: string) => {
  const searchResults = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchInput}.json?access_token=${NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN}`
  );
  const data = await searchResults.json();

  return data.features; // []
};
