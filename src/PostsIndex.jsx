import "./index.css";
export function PostsIndex(props) {
  return (
    <div className="card text-center">
      <h1 className="text-center">All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <div className="card-header">
            <h2>{post.title}</h2>
          </div>
          <div className="images-container">
            <img className="card-img" src={post.links[1].link} alt="Card image" />
            <img className="card-img" src={post.links[2].link} alt="Card image" />
            <img className="card-img" src={post.links[3].link} alt="Card image" />
            <div className="images-container" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.subline}</h5>
            <p className="card-text">{post.body}</p>
            <button className="btn btn-dark" onClick={() => props.onShowPost(post)}>
              More info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
