import { DatePicker } from "@/components/ui/date-picker";
import TimelineLayout from "@/components/ui/timeline-layout";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Shadcn/ui Datepicker Customization With Month & Year Selects</h1>
      <DatePicker />
      <TimelineLayout />
    </div>
  );
}
