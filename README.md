# conquering-responsive-layouts

21 days challenge course by Kevin Powell

### Challenge-01

Change the starter files so that:

- Text only comes to midpoint of the page
- Text does not overflow on bottom on smaller screens

### Notes day 1 - Using percentages and avoiding heights

Html is responsive by nature (which doesn't means that it looks great). You can break responsiveness with css. If you set a fixed width (like: `width: 500px`) or height, you can create text overflow.

### Notes day 2

_em_ --> in relation to elements parent
**problem:** compounding on top of eachohter.
_rem_: root em --> relative to html (or ::root) font-size.

Use rem for font-size.
For padding and margin: If you use em units, they will be relative to the font-size of that element.

If you want your padding to adjust based on your font-size, for example for a button (small, normal, large), use rem for font-size and em for padding.

If you want _consistent spacing_ use rem for padding/margin.

### Challenge 2

- At the moment the text goes from left to right across the whole page --> align text on left with text from the header.
- Blue part of the header should span the entire width of the page.
- Page should be responsive.

### Notes day 3 - Enter max-width

Adding a fixed max-width can help make design on bigger screen look better. You can combine it with a width in percentage.

### Notes day 4 - Extra-curricular: Viewport units

vh: viewport height --> 100vh = 100% of the viewport height --> can cause issues on mobile.
vw: viewport width --> percentage of the full viewport width.
vmin: viewport minimum --> percentage of viewport width or height, whichever is smaller.
vmax: viewport maximum --> percentage of viewport width or height, whichever is larger.

### Challenge 3

- No starter files this time.
- Build a given design.
- The button is a link, which looks like a button.

For more info: https://courses.kevinpowell.co/courses/conquering-responsive-layouts
