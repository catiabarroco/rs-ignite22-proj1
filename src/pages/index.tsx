import Header from "@components/Header";
import {SidebarCard} from "@components/SidebarCard";

export default function Home() {
  return (
    <main className="">
        <Header/>
      <div className="container mx-auto py-8">
<SidebarCard/>
      </div>
    </main>
  )
}
