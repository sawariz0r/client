import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./History.scss";

interface Props {}

const History = (props: Props) => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    let socket = io(":4002");

    socket.on("history", (res: any) => {
      setHistory(res.data.reverse());
    });
  }, []);
  if (history.length < 1) return null;
  return (
    <div className="history">
      <span className="history__title">
        Last 5 user calculations
        <br />
        (live from server)
      </span>
      {history.map((item) => (
        <span className="history__item">{item}</span>
      ))}
    </div>
  );
};

export default History;
