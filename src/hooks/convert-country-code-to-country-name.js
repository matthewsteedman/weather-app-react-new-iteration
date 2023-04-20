const countryCodes = {
  US: "United States",
  GB: "United Kingdom",
  FR: "France",
  DE: "Germany",
  ZA: "South Africa",
  MX: "Mexico",
  FR: "France",
  IT: "Italy",
  ES: "Spain",
  JP: "Japan",
  CN: "China",
  // Add more country codes and names as needed
};

function countryNameFromCode(countryCode) {
  if (!countryCode) {
    console.error("Error: No country code provided");
    return null;
  }
  const countryName = countryCodes[countryCode];
  if (countryName) {
    return countryName;
  } else {
    console.error(`Error: Invalid country code "${countryCode}"`);
    return null;
  }
}

export default countryNameFromCode;
