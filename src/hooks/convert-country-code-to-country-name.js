function countryNameFromCode(countryCode) {
  try {
    const countryName = new Intl.DisplayNames(["en"], { type: "region" }).of(
      countryCode
    );
    return countryName;
  } catch (error) {
    console.error(`Error: ${error}`);
    return null;
  }
}

export default countryNameFromCode;
