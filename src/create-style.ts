export default function createStyle(style: object) {
  let data = [];
  for (const [key, value] of Object.entries(style)) {
    let values = `${key}: ${value};`;
    data.push(values);
  }
  return data.join(" ");
}
