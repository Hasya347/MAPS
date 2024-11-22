import { PieChart } from "@mui/x-charts/PieChart";
type PieData = { value: number; label: string; color: string };
export const Piechart = ({ data }: { data: PieData[] }) => {
  return (
    <PieChart
      series={[
        {
          data: [...data],
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -45,
          endAngle: 225,
          cx: 150,
          cy: 150,
        },
      ]}
    />
  );
};
