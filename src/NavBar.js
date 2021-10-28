import React from "react";

const NavBar = ({ data, handleClick, value }) => {
  return (
    <nav>
      {data.map((company, index) => {
        return (
          <li
            className={index === value ? "active-li" : undefined}
            key={company.id}
            onClick={() => {
              handleClick(company.id);
            }}
          >
            {company.company}
          </li>
        );
      })}
      <ul></ul>
    </nav>
  );
};

export default NavBar;
