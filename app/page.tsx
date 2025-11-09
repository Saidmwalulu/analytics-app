import ChartArea from "@/components/chart-area";
import ChartComponent from "@/components/chart-component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-[70%]">
        <ChartComponent />
        <ChartArea />
      </div>
      <div className="w-full h-[400px]">
        
      </div>
    </div>
  );
}
