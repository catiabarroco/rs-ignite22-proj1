import Header from "@components/Header";
import {SidebarCard} from "@components/SidebarCard";
import {Post} from "@components/Post";
import {posts} from "@constants/Post";

export default function Home() {
  return (
    <main >
        <Header/>
      <div className="container mx-auto py-8 flex flex-col lg:flex-row gap-7">

              <SidebarCard/>
          <div>
              {posts.map(post => {
                  return (
                      <Post
                          key={post.id}
                          post={post}
                      />
                  )
              })}
          </div>
      </div>
    </main>
  )
}
