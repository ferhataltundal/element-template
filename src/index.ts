import element from "./create-element";
import createStyle from "./create-style";

const rootElement = document.getElementById("root") as HTMLDivElement;

//EXAMPLE
const styles = createStyle({
  display: "flex",
  "flex-direction": "column",
  border: "1px solid red",
});

//EXAMPLE
const createElement = element("div", {
  attributes: `class="all-page" style="${styles}"`,
  children: [
    element("p", {
      attributes: 'style="color:white"',
      children: "Test 1",
    }),
    element("br", {}),
    element("p", {
      attributes: 'style="color:white"',
      children: "Test 2",
    }),
  ],
});

rootElement.innerHTML = createElement;
