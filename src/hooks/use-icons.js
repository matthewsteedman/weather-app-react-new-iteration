import {
  WiDaySunny,
  WiCloud,
  WiDayCloudy,
  WiRain,
  WiSnow,
} from "react-icons/wi";

export const getIcon = (iconCode) => {
  switch (iconCode) {
    case 1: // Sunny
      return <WiDaySunny />;
    case 2: // Mostly sunny
      return <WiDayCloudy />;
    case 3: // Partly sunny
      return <WiDayCloudy />;
    case 4: // Intermittent clouds
      return <WiCloud />;
    case 5: // Hazy sunshine
      return <WiCloud />;
    case 6: // Mostly cloudy
      return <WiCloud />;
    case 7: // Cloudy
      return <WiCloud />;
    case 8: // Dreary (overcast)
      return <WiCloud />;
    case 11: // Fog
      return <WiCloud />;
    case 12: // Showers
      return <WiRain />;
    case 13: // Mostly cloudy with showers
      return <WiRain />;
    case 14: // Partly sunny with showers
      return <WiRain />;
    case 15: // T-storms
      return <WiRain />;
    case 16: // Mostly cloudy with t-storms
      return <WiRain />;
    case 17: // Partly sunny with t-storms
      return <WiRain />;
    case 18: // Rain
      return <WiRain />;
    case 19: // Flurries
      return <WiSnow />;
    case 20: // Mostly cloudy with flurries
      return <WiSnow />;
    case 21: // Partly sunny with flurries
      return <WiSnow />;
    case 22: // Snow
      return <WiSnow />;
    case 23: // Mostly cloudy with snow
      return <WiSnow />;
    case 24: // Ice
      return <WiSnow />;
    case 25: // Sleet
      return <WiSnow />;
    case 26: // Freezing rain
      return <WiRain />;
    case 29: // Rain and snow
      return <WiRain />;
    case 30: // Hot
      return <WiDaySunny />;
    case 31: // Cold
      return <WiSnow />;
    case 32: // Windy
      return <WiCloud />;
    case 33: // Clear
      return <WiDaySunny />;
    case 34: // Mostly clear
      return <WiDayCloudy />;
    case 35: // Partly cloudy
      return <WiDayCloudy />;
    default:
      return <WiCloud />;
  }
};
