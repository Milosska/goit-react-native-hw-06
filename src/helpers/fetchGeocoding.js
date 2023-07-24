import axios from "axios";

const GEOCODING_API_KEY = "930c680544094e769f012774f7b6509e";

export const fetchReverseGeocoding = async ({ latitude, longitude }) => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&language=en&key=${GEOCODING_API_KEY}`
    );

    return response.data.results[0].formatted;
  } catch (e) {
    console.error(e);
    return;
  }
};
