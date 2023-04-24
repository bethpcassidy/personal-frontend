import "./Carousel.css";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CImage } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";

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
          <CCarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={"https://i.ytimg.com/vi/0xqkksHov58/maxresdefault.jpg"}
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={"https://i.ytimg.com/vi/0xqkksHov58/maxresdefault.jpg"}
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
