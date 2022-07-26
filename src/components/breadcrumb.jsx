import React from "react";

import "./breadcrumb.scss";

const Breadcrumb = (props) => {
  
  const { step } = props;
  
  return (
    <>
     <section className="breadcrumb">
        Step {step} of 3
      </section>
   </>
  );
}

export default Breadcrumb;