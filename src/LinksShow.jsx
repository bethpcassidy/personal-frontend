export function LinksShow(props) {
  return (
    <div>
      <h1> Post Info </h1>
      <p>Title: {props.link.title} </p>
      <p>Subline: {props.link.link} </p>
      <p>Body: {props.link.postid}</p>
    </div>
  );
}
