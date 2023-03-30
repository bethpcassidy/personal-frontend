export function PostsIndex(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h2>{post.subline}</h2>
          <button onClick={() => props.onShowPost(post)}>More info</button>
        </div>
      ))}
    </div>
  );
}
