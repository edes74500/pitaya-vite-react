export function RandomColorProvider() {
  const randomColor = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];

  const colorString = `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7)`;
  console.log(colorString);
  return colorString;
}
