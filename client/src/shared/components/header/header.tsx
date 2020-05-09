import React from "react";
import "./header.css";
import { Navbar } from "react-bootstrap";
interface headerProps {
  title?: string;
  navigateToDashboard: VoidFunction;
}
export default function Header(props: headerProps) {
  const { title, navigateToDashboard } = props;

  return (
    <div className="header-container">
      <Navbar bg="light" variant="light">
        <div
          onClick={() => navigateToDashboard()}
          className="logo-and-brand-container"
        >
          <i className="fas fa-pizza-slice"></i>
          <Navbar.Brand>{title}</Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}
