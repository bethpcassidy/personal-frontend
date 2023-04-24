import "./Carousel.css";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CImage } from "@coreui/react";

export function Carousel(props) {
  return (
    <div>
      <CCarousel controls>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={"https://i.ytimg.com/vi/0xqkksHov58/maxresdefault.jpg"}
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={"https://i.ytimg.com/vi/0xqkksHov58/maxresdefault.jpg"}
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          xs
          <CImage
            className="d-block w-100"
            src={"https://i.ytimg.com/vi/0xqkksHov58/maxresdefault.jpg"}
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
