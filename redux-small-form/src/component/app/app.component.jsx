import React from "react";

import Posts from "../posts/posts.component";
import PostForm from "../post-form/post-form.component";

function App() {
  return (
    <div className="App">
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
