import React from "react";
import "./subheading.css";
export default function Subheading(props: any) {
  const { title } = props;
  return (
    <div className="subheading-container">
      <span id="subheading-name">{title}</span>
    </div>
  );
}
