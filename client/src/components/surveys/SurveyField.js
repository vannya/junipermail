import React from "react";

const SurveyField = ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div style={{margin: "0 0 20px 0"}}>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} style={{ marginBottom: "5px" }} />
      <div className="red-text error">{touched && error}</div>
    </div>
  );
};

export default SurveyField;
