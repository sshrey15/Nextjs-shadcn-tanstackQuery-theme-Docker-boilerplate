import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardStat() {
  return (
    <Card className="w-full shadow-none md:w-[400px]">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>
          <span className="text-green-600">+20.1%</span> from last month
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold">$42.5k</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-muted rounded-md px-2 py-1 text-center text-xs">62.2%</div>
            <span className="text-sm">Orders</span>
          </div>
          <div className="flex items-center justify-end gap-2 text-sm">
            <div className="bg-muted rounded-md px-2 py-1 text-center text-xs">25.5%</div>
            <span className="text-sm">Visits</span>
          </div>
        </div>
        <div className="flex overflow-hidden rounded-lg">
          <span className="h-4 bg-lime-400 dark:bg-lime-700" style={{ width: "70%" }}></span>
          <span className="h-4 bg-indigo-400 dark:bg-indigo-700" style={{ width: "30%" }}></span>
        </div>
      </CardContent>
    </Card>
  );
}
