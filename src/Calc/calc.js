import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./calc.css";

export default function Calculator() {
  const [plan, setPlan] = useState("");
  const [volume, setVolume] = useState(0);
  const [total,setTotal]=useState(0)
  const Calculate = (e) => {
      if(plan==="A"){

      }
  };
  return (
    <div>
      <Row></Row>
    </div>
  );
}
