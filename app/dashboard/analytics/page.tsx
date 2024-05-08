import AnalyticsStatistics from "./_components/AnalyticsStatistics";
import AnalyticsTable from "./_components/AnalyticsTable";

export default function Page() {
  return (
    <main className="px-10">
      <div className="h-5"></div>
      <div className="px-8">
        <AnalyticsStatistics />
      </div>
      <AnalyticsTable />
    </main>
  );
}
