import Image from "next/image";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Cards from "./components/Cards";
export default function Home() {
  return (
    <div > 
      <Header />
      <Marquee />
      <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Cards title="📅 Placement Drives" description="Upcoming company drives and schedules." />
                <Cards title="🎓 Training Sessions" description="List of technical and soft skills training." />
                <Cards title="📆 Calendar of Events" description="Placement-related events and deadlines." className="bg-[#FF9C9C] row-span-2" />
                <Cards title="🏢 HRD Initiatives" description="MoUs, collaborations, and HR announcements." />
                <Cards title="📢 Notice Board" description="Important notices and alerts." />

            </div>
        </div>
    </div>
  );
}
