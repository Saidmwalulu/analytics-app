import ChartArea from "@/components/chart-area";
import ChartComponent from "@/components/chart-component";
import { ChartPieInteractive } from "@/components/chart-pie-interactive";
import { ChartPieLabel } from "@/components/chart-pie-label";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-[60%] max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ChartPieInteractive />
          <ChartPieLabel />
        </div>

        <ChartComponent />
        <ChartArea />
      </div>
      <div className="w-full h-[400px]"></div>
    </div>
  );
}
