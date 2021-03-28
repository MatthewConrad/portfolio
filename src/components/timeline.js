import * as React from "react";

const Timeline = () => {
  return (
    <section>
      <h2>Timeline</h2>
      <div className="timeline">
        <div className="timeline-item tl-row1-column1-5">
          <div>Undergrad</div>
          <div>OSU</div>
        </div>
        <div className="timeline-item tl-row2-column3-7">
          <div>Software Engineer</div>
          <div>Verizon Wireless</div>
        </div>
        <div className="timeline-item tl-row3-column8-11">
          <div>Senior Developer</div>
          <div>Nationwide</div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
