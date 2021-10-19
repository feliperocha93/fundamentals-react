import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      <Post 
        likes={11}
        post={{
          title: 'Oi né',
          subtitle: 'subtítulo da noticia 01'
        }}
      />
      <Post 
        likes={5}
        post={{
          title: 'Oi né',
          subtitle: 'subtítulo da noticia 02'
        }}
      />
      <Post 
        likes={18}
        post={{
          title: 'Oi né',
          subtitle: 'subtítulo da noticia 03'
        }}
      />
    </>
  );
}

export default App;