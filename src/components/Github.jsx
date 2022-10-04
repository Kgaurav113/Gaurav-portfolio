import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div style={{width:"80%",margin:"auto"}}>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" ,margin:"auto" ,color:"white"}} >
      <h1 className="project-heading" style={{ paddingBottom: "20px",color:"white" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="kgaurav113"
        blockSize={15}
        blockMargin={5}
        color="#0284C7"
        fontSize={16}
      />
    </Row>
    </div>
  );
}

export default Github;