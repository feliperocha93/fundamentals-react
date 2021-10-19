import React from "react";

import Post from "./Post";

function App() {
  return (
    <>
      <h1>Componente App</h1>
      <h2>Subtítulo</h2>

      <hr />

      <Post 
        post={{
          title: 'Oi né',
          subtitle: 'subtítulo da noticia 01'
        }}
      />
      <Post 
        post={{
          title: 'Oi né',
          subtitle: 'subtítulo da noticia 02'
        }}
      />
      <Post 
        post={{
          title: 'Oi né',
          subtitle: 'subtítulo da noticia 03'
        }}
      />
    </>
  );
}

export default App;