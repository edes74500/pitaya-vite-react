export function RandomColorProvider() {
  const randomColor = [Math.floor(Math.random() * 100 + 100), Math.floor(Math.random() * 130 + 70), Math.floor(Math.random() * 100 + 130)];

  const colorString = `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7)`;
  console.log(colorString);
  return colorString;
}
