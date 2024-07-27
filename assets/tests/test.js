
let px = parseInt(prompt('Enter a number in px'));
let rootFontSize = parseInt(prompt('Enter the root font size'));

function pxToRem(px) {
  let rem = px / rootFontSize;
  return rem;
}



console.log(`${px} pixels equals to ${pxToRem(px)} rem, considering that 1rem equals ${rootFontSize} pixels.`);
