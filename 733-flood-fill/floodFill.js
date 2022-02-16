/**
 * An image is represented by a m x n integer grid image, where image[i][j]
 * represents a pixel value of the image
 *
 * You are also given three integers, sr, sc, and newColor. You should perform
 * a flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color, plus
 * any pixels connected 4-directionally to those pixels also same color.
 * Replace the color of all aforementioned pixels with newColor.
 */

const floodFill = (image, sr, sc, newColor) => {
  const oldColor = image[sr][sc];
  const painter = (sr, sc) => {
    if (sr < 0 || sc < 0 || sr >= image.length || sc > image[sr].length || image[sr][sc] !== oldColor || image[sr][sc] === newColor) {
      return image;
    }
    image[sr][sc] = newColor;
    painter(sr - 1, sc);
    painter(sr, sc + 1);
    painter(sr + 1, sc);
    painter(sr, sc - 1);
  }
  painter(sr, sc);
  return image;
};

let image, sr, sc, newColor;

// Test #1
image =
[[1, 1, 1]
,[1, 1, 0]
,[1, 0, 1]];
sr = 1, sc = 1, newColor = 2;
const result1 = floodFill(image, sr, sc, newColor);
console.log(result1);
// [[2, 2, 2]
// ,[2, 2, 0]
// ,[2, 0, 1]]

// Test #2
image =
[[0, 0, 0]
,[0, 1, 1]];
sr = 1, sc = 1; newColor = 1;
const result2 = floodFill(image, sr, sc, newColor);
console.log(result2);
