import DynamicHead from "@/components/dynamic-head";
import HourlyContainer from "@/containers/hourly";
const Hourly = () => {
  return (
    <div>
      <DynamicHead
        title={"Hourly Page"}
        description={
          "Hourly weather forecast. Check current conditions in  hourly, and more."
        }
      />
      <HourlyContainer />
    </div>
  );
};

export default Hourly;
