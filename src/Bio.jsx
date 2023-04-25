import { CTooltip } from "@coreui/react";
import "./bio.css";
import Snowfall from "react-snowfall";

export function Bio() {
  return (
    <div style={{ background: "#282c34", position: "relative" }}>
      <Snowfall speed={[0.1, 0.15]} color="#808080" snowflakeCount={80} wind={[-0.0, 0.02]} radius={[0.5, 0.8]} />
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        {" "}
        <main class="px-3">
          <h1 class="name">Name goes here</h1>
          <p class="lead">Cover Cover Cover Cover</p>
          <p class="lead">
            <CTooltip content="Go straight to posts">
              <a href="" class="btn btn-lg btn-secondary fw-bold border-white bg-dark">
                Posts
              </a>
            </CTooltip>
          </p>
        </main>
      </div>
    </div>
  );
}
