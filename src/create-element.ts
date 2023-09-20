import { ElementType } from "./types";
export default function element(
  el: string,
  { attributes, children }: ElementType
) {
  if (el === "br") {
    return `<br/>`;
  }
  return `<${el} ${attributes != null ? attributes : ""}>${
    attributes != null
      ? Array.isArray(children)
        ? children.join("")
        : children
      : ""
  }</${el}>`;
}
