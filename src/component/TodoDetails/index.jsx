import React from "react";

import "./index.scss";

export default function TodoDetails({ todo }) {
  return <aside>{todo.title}</aside>;
}
