import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Content = ({ company, dates, duties, title }) => {
  return (
    <article>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{dates}</p>
      <ul>
        {duties
          ? duties.map((info, index) => {
              return (
                <li key={index}>
                  <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                  {info}
                </li>
              );
            })
          : undefined}
      </ul>
    </article>
  );
};

export default Content;
