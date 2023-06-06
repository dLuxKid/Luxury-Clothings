// REACT
import React, { useEffect } from "react";

const Contact = () => {
  document.title = "contact";

  useEffect(() => {
    document.body.style.zoom = "100%";
    window.scrollTo(0, 0);
  });

  return <div>Contact</div>;
};

export default Contact;
