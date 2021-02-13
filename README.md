
# Colors

I think you would agree that the result is interesting if not aesthetically pleasing. I didn't know what it would look like till the code ran.

You can visit the deployed code here: [Colors](https://colors-piyush.netlify.app/)

## More info
- Integrated hooks in the code.
- Didn't write tests as I am not familiar with them.

## Solution:
- Iterate between values **8 to 256** for R, G and B values in nested loops.
- Increment 8 steps at a time. Translate to *rgb()* string but with 1 subtracted from the values since RGB values ar valid from 0 to 255 instead of 1 to 256.
- Insert the values in a matrix of **256 * 128** elements to be rendered as a pixel matrix.
- Carry out this logic inside a promise to have asynchronous execution so the app doesn't slow down.
- Render the matrix row by row and pixel by pixel, with each pixel being 4x4 pixels and with the respective RGB string as background color. So the output is essentially 1024x512 pixels.
