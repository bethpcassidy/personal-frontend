export function PostsIndex(props) {
  return (
    <div className="card text-center">
      <h1 className="text-center">All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <div className="card-header">
            <h2>{post.title}</h2>
          </div>
          <div className="card-body">
            <h5 class="card-title">{post.subline}</h5>
            <p class="card-text">{post.body}</p>
            <button className="btn btn-dark" onClick={() => props.onShowPost(post)}>
              More info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
