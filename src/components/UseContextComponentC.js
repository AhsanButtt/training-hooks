import React, { useContext } from "react";
import { ChannelContext, NameContext } from "../App";

export default function UseContextComponentC() {
  const myName = useContext(NameContext);
  const myChannelName = useContext(ChannelContext);

  return (
    <div>
      <h1>This is UseContext Of Component C.......</h1>
      <h3>{myName}</h3>
      <h3>{myChannelName}</h3>
    </div>
  );
}
