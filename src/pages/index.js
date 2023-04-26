import DynamicHead from "@/components/dynamic-head";
import HomeContainer from "@/containers/home";

export default function Home() {
  return (
    <div>
      <DynamicHead
        title={"Weather-app"}
        description={
          "Weather-app has local and international weather forecasts from the most accurate weather forecasting technology featuring up to the minute weather reports"
        }
      />
      <HomeContainer />
    </div>
  );
}
