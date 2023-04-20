import Header from "@components/Header";
import {SidebarCard} from "@components/SidebarCard";
import {Post} from "@components/Post";

export default function Home() {
  return (
    <main className="">
        <Header/>
      <div className="container mx-auto py-8 flex gap-7">
          {/*<div className="">*/}
              <SidebarCard/>
              <Post/>
          {/*</div>*/}

      </div>
    </main>
  )
}
