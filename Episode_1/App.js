// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react!"
// );

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "heading" }, "Hello world from react!")
  ),
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "heading" }, "Hello world from react!")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
