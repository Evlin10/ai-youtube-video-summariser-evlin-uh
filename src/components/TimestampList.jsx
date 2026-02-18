
import React from "react";

const TimestampList = ({ timestamps }) => {
  return (
    <ul>
      {timestamps.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.time} - {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TimestampList;
