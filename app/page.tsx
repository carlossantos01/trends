"use client";
import Header from "@/components/header/header";
import Post from "@/components/post/post";

export default function Home() {
  const fakePosts = [
    {
      id: 1,
      username: "caduurochaa",
      avatar: "https://avatars.githubusercontent.com/u/68526948?v=4",
      verified: true,
      content:
        "Cena pós-créditos de Superman não deve ser muito importante para o futuro do DCU. James Gunn diz que será algo engraçado para os fãs, e que ele não pretende fazer das cenas pós-créditos apenas uma preparação para o que vem a seguir no universo DC.",
      likes: 10000,
      comments: 10,
    },
    {
      id: 2,
      username: "caduurochaa",
      avatar: "https://avatars.githubusercontent.com/u/68526948?v=4",
      verified: true,
      content: "Quero entender mais como funciona essa nova rede social!!!",
      likes: 5490,
      comments: 10,
    },
    {
      id: 3,
      username: "caduurochaa",
      avatar: "https://avatars.githubusercontent.com/u/68526948?v=4",
      verified: true,
      content: "Sorry Elon, but here is the real social network",
      likes: 32,
      comments: 10,
    },
  ];
  return (
    <main className="w-full h-screen">
      <Header />
      <div className="max-w-[590px] min-w-[320px] p-4 rounded-t-xl md:pt-[92px] pt-16 mx-auto">
        {fakePosts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            avatar={post.avatar}
            verified={post.verified}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </main>
  );
}
