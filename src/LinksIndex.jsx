export function LinksIndex(props) {
  return (
    <div className="card text-center">
      <h1 className="text-center">All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <div className="card-header">
            <h2>{post.title}</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">{link.title}</h5>
            <p className="card-text">{link.link}</p>
            <button className="btn btn-dark" onClick={() => props.onShowPost(post)}>
              More info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
