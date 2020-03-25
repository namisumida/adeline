let max = 12;
let imgFiles = [
  'imgFile0.jpeg',
  'imgFile1.webp',
  'imgFile2.jpg',
  'imgFile3.jpg',
  'imgFile4.png',
  'imgFile5.png',
  'imgFile6.png',
  'imgFile7.jpg',
  'imgFile8.jpg',
  'imgFile9.png',
  'imgFile10.png',
  'imgFile11.png',
  'imgFile12.jpg'
]

setTimeout(() => {
  generateRandomImg();
}, 2000);


function generateRandomImg() {
  let randomNumber1 = Math.round(Math.random()*max);
  let randomNumber2 = Math.round(Math.random()*max);
  let randomNumber3 = Math.round(Math.random()*max);
  let randomNumber4 = Math.round(Math.random()*max);
  $(`#img1`).attr('src', `imgs/${imgFiles[randomNumber1]}`);
  $(`#img2`).attr('src', `imgs/${imgFiles[randomNumber2]}`);
  $(`#img3`).attr('src', `imgs/${imgFiles[randomNumber3]}`);
  $(`#img4`).attr('src', `imgs/${imgFiles[randomNumber4]}`);
  setTimeout(() => {
    generateRandomImg()
  }, 2000)
}
