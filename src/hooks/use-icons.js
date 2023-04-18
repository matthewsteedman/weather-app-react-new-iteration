import {
  WiCloudy,
  WiDaySunny,
  WiNightClear,
  WiDaySunnyOvercast,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export const getIcon = (iconCode) => {
  switch (iconCode) {
    case "01d":
      return <WiDaySunny />;
    case "01n":
      return <WiNightClear />;
    case "02d":
    case "02n":
      return <WiDaySunnyOvercast />;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return <WiCloudy />;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return <WiRain />;
    case "11d":
    case "11n":
      return <WiThunderstorm />;
    case "13d":
    case "13n":
      return <WiSnow />;
    case "50d":
    case "50n":
      return <WiFog />;
    default:
      return <WiCloudy />;
  }
};
