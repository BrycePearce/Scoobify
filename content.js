// this file is where you can make functional changes to a page.
// For example if you wanted to:
// 1.) Change all the text color from black to orange
// 2.) Change all images into scooby doo images
// 3.) Add a "word count" to the page

// Here's some examples of things we can change.

// 1.) Lets change all the font colors to scooby doo brown!
const allElements = document.querySelectorAll("*"); // this selects everything on the page '*' is a wildcard that matches everything
allElements.forEach(() => (element.style.color = "#8e6345")); // #8e6345 is the hex color for scooby doo brown
// all done!


// 2.) Lets make all images into a scooby doo img
const pageImages = document.querySelectorAll("img"); // grab all the img elements

// store the scooby url in a variable
const scoobyImgUrl =
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Scooby-Doo.png/150px-Scooby-Doo.png";

// loop through each img on the page and change the source to a scooby image variable
pageImages.forEach((pageImg) => {
  pageImg.src = scoobyImgUrl; // pageImg.src is the image source
  pageImg.srcset = scoobyImgUrl; // srcset can sometimes be used for images, so change that too
});
