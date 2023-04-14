export function PostsShow(props) {
  return (
    <div>
      <h1> Post Info </h1>
      <p>Title: {props.post.title} </p>
      <p>Subline: {props.post.subline} </p>
      <p>Body: {props.post.body}</p>
      <p>{props.post.links[0].title}</p>
      <p>{props.post.links[0].link}</p>
    </div>
  );
}

// export function PostsShow(props) {
//   return (
//     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//       <div class="carousel-inner">
//         <div class="carousel-item active">
//           <img class="d-block w-100" src={props.post.links[1].link} alt="First slide" />
//         </div>
//         <div class="carousel-item">
//           <img class="d-block w-100" src={props.post.links[2].link} alt="Second slide" />
//         </div>
//         <div class="carousel-item">
//           <img class="d-block w-100" src={props.post.links[3].link} alt="Third slide" />
//         </div>
//       </div>
//     </div>
//   );
// }
