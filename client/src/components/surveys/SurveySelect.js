import _ from "lodash";
import React from "react";
import { Row, Input } from "react-materialize";
import surveyTemplateList from "./surveyTemplateList";

const SurveySelect = ({ input, label, meta: { error, touched } }) => {
  function renderOptions() {
    return _.map(surveyTemplateList, ({ label, name, value }) => {
      return (
        <option key={value} value={value}>
          {label}
        </option>
      );
    });
  }

  return (
    <div>
    <Row>
      <Input {...input} s={12} type="select" label={label} name="surveyChoice">
        <option />
        {renderOptions()}
      </Input>
      </Row>
      <div className="red-text error">{touched && error}</div>
      </div>
  );
};

export default SurveySelect;
