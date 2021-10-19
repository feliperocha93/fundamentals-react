import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 11},
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 5},
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 20},
  ]);

  function handleRefresh() {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        title: `Title#0${posts.length + 1}`,
        subtitle: `Sub$0${posts.length + 1}`,
        likes: 50,
      },
    ]);
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>
      </Header>
      <button onClick={handleRefresh}>
        Atualizar
      </button>

      <hr />

      {posts.map(post => (
        <Post 
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;