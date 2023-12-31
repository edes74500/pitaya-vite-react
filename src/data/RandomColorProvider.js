export function RandomColorProvider() {
  const randomColor = [Math.floor(Math.random() * 50 + 180), Math.abs(Math.floor(Math.random() * 100 + 100)), Math.floor(Math.random() * 100 - 20)];

  const colorString = `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7)`;
  console.log(colorString);
  return colorString;
}
