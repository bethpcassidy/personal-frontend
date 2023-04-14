export function PostsShow(props) {
  return (
    <div>
      <h1> Post Info </h1>
      <p>Title: {props.post.title} </p>
      <p>Subline: {props.post.subline} </p>
      <p>Body: {props.post.body}</p>
      <p>link: {props.post.links[0].link}</p>
    </div>
  );
}
