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
          <div class="imagec">
            <CImage
              className="d-block w-100"
              src={"https://i.ytimg.com/vi/0xqkksHov58/maxresdefault.jpg"}
              alt="slide 1"
            />
          </div>
          <CCarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <div class="imagec">
            <CImage
              className="d-block w-100"
              src={
                "https://camo.githubusercontent.com/aa9de25a4cde1fd5aac3e17be7daad8e8637b6723c9f81efe475e4392dc9a20b/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4d4f4c36684f354e5a55474a35334d5169682f67697068792e676966"
              }
              alt="slide 2"
            />
          </div>
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <div class="imagec">
            <CImage
              className="d-block w-100"
              src={
                "https://camo.githubusercontent.com/d02b627d0b93dac571955fc8cca8adf22583c0f08647de0adefe2af9c35f1211/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f783972354d586c73714a5a423631316e35372f67697068792e676966"
              }
              alt="slide 3"
            />
          </div>
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
