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

### Day 5 - Challenge 3

- No starter files this time.
- Build a given design.
- The button is a link, which looks like a button.

### Notes Day 6 - Review

- use percentages for width
- avoid setting height
- use max-width to limit space content can take up

**Why you shouldn't use `em's` for fontsize**
--> em's compound on each other --> they look at parent font-size to know what to be set to. If the parent is 1.125em and the child is 1.125em these values get compounded: 1.125 \* 1.125.
--> use rems instead for fontsize --> refers to root em (html) --> no compounding.

**A tale of width and max-width**

- `width: 600px; max-width: 100%`
- `width: 100%; max-width: 600px`
  --> same thing

### Notes Day 7

**BEM**: Block Element Modifier - CSS naming convention to prevent specificity issues.
Example: card is _block_. It get's the class `.card`.
Card image, title and content are _elements_ of the card, and get classes: `.card__image`, `.card__title`, `.card__content`. Light and dark are _modifiers_ and they get the classes: `.card--dark`, `.card--light`.

**Box-sizing**
Defaults to `content-box` --> padding, margin and border are added outside.
`border-box` --> padding, margin and border are inside the element.

### Notes Day 8 - Flexbox basics

`display: flex`, creates a flex-container with `flex-direction: row`. It orders the items in the flex-container next to eachother in a row.
--> Flex items shrink to smallest possible size: they take up as least space as they can.
`width: 100%` makes flex-items take up the same size.

**Adding space between columns**
`gap: 100px` --> not yet supported.
`.col + .col` --> _combinator_ --> selects col with col before it. You can use it together with margin-left to create space between the columns in your flex-row.

### Flexbox challenge 1

- Build design from design spec, starting with starter files.

Requirements

1. The headings in the first row must be
   a different color
2. The two .col at the bottom must go next
   to one another
3. The section at the bottom should have
   a dark background color and a different
   color of text
4. I've removed the "gap" that I created,
   so you'll have to add it back in
5. Columns should be center aligned.

### Day 9 - A deeper dive into flexbox

**Reducing the amount of HTML needed**

```css
<div class="container">
   <div class="row">
      <div class="col>
         content
      </div>
   </div>
</div>
```

can be reduced to:

```css
<div class="container row">
   <div class="col>
      content
   </div>
</div>
```

You could rename class row to flex.

**Adding a hero image**
Images are distorted/strechted by flexbox.
You could solve this by wrapping the image in a div, or adding a class to the image with `align-self: flex-start` on it.

**Column widths and flexbox**
`width: 100%` --> flex-items will take up available space and are same size.
If you have 2 flex-items, and one has a width of 30% and the other a width of 60% there is 10% space left.
You can change the position of this space by adding `justify-content: space-between` (or something else) to flex-parent.

**Ensuring the image is responsive**

```css
img {
  max-width: 100%;
}
```

will make image responsive. The image will never be bigger than 100% and shrink in size on smaller screens.

### Flexbox challenge 2

- Build design from design spec. Starter file is given, but only the hero contains code. The rest of the page needs to be build from scratch. The text for the website can be found in text.md file.

Requirements

1. Refer to the design specs for the
   overall layout
2. Add responsive image to the hero section.
3. The image should line up with
   the sidebar in the section
   below

### Notes day 10 Extra curricular - A deeper dive into flexbox

**Flex-containers**

- `flex-direction: row-reverse` --> reverses row order
- `flex-direction` --> default = `row`
- `flex-wrap` --> default = `no-wrap`
- `flex-wrap: wrap` --> flex items stack on top of each other.
- `flex-flow: row nowrap` --> shorthand for `flex-direction: row nowrap`
- `justify-content` --> default = `flex-start` --> aligns content along the _main_ axis: left to right when `flex-direction: row`, top to bottom when `flex-direction: column`
- `align-items` --> default = `stretch` --> aligns items along the \*cross-axis\*\*
- `align-items: baseline` --> text lines up on same line on bottom of the text --> handy if font-size of items differs. Can help with aligning main area and aside.
- `align-content` --> only works when there are multiple lines of content on cross-axis --> `align-items` aligns items one at a time, while `align-content` works more like `justify-content`

**Flex-items** --> everything in flex-container

- `flex-grow` --> default = 0 --> determines how big item is compared to other items
- `flex-grow: 1` --> item grows max available space
- `flex-shrink` --> default = 1 --> determines how small it is compared to other items
- `flex-basis` --> how much room an item should take up --> behaves like max-width.
- `flex: 0 1 250px` --> shorthand for

```css
flex-grow: 0;
flex-shrink: 1;
flex-basis: 250px;
```

- `flex: 250px` --> converts to `flex: 0 1 250px`
- `align-self` --> aligns item on cross-axis
- `order: 1` --> places item on the end
- `order: 0` --> natural place of item (no change)
- `order : -1` --> places item at the beginning

### Notes day 11 Using flexbox for navigation

--> use semantic markup --> main, section, aside for accessibility

### Flexbox challenge 3

Requirements

1.  Get all the navigation items next to one another
2.  Add a space between all the items

### Notes day 12 Getting fancy with navigations

To push one of the listitems to the side (like for example signup/signin), put class on the item and use `margin-left: auto`. Other solution: Put listitems you want to display on the right in a second ul. Give the nav:

```css
.nav {
  display: flex;
  justify-content: space-between;
}
```

To have a navigation with logo on left, links on the left next to the logo and signin/signup on the right you can use `flex-grow: 1` on the nav. Logo is separate from the nav. The nav will be as big as it can be when there is room, and it will shrink when there is no room. `width: 100%` gives same result.
To display logo on the left, links in the middle and signin/signup on the right, use margin: 0 auto to center the elements.

### Notes day 16 What breakpoints to use

Design should dictate breakpoints: start with small screen and make it bigger to define breakpoints.

### Notes day 21 Recap

- websites are responsive without css
- you can break responsiveness with css
- often desktop-first approach breaks native HTML responsiveness
- mobile-first approach is easier for making a website responsive --> you don't have to reset things to default, like you will have to do often when using desktop-first approach.

### Flexbox challenge 4

Build a given design starting from scratch. You can find the design and specs in the pdf in the flexbox-challenge-04 directory.

### Nav challenge

Make the navigation layout work on both mobile and large screens.
Mobile-first, so mobile styles first,then add the large screen styles inside the existing media query

### Final challenge

Build a given design starting from scratch. Make it responsive, using mobile first approach. This time we use all what we have learned during the course to build a page with (responive) navigation, header, sections and footer.

## Course Review

### 21 day challenge

I followed the course Conquering Responsive Layouts by Kevin Powelll during the first iteration. This course is a 21 challenge to learn to create responsive websites, and is aimed at beginners. You will get an email to remind you when there is new course content. The course consists of small videos on the course website, and challenges with design specs to help you apply what you have learned. Not every day has a challenge. Some days you can use to catch up if you have fallen behind, and other days are to look at the solution of an earlier challenge.

### Practice, practice, practice

There is a Discord Channel in which you can share your challenge solutions, and ask questions. If you might fall behind for whatever reason, you can later pick up the course at your own time.
The course is structured as a 21 day challenge to give you time to learn and practice, and not just binge-watch some content to forget about it later.

### Course content

The course is targeted at beginners, and explains fundamentals like percentages, max-width an the basics of flexbox. The quality of the content is great, and the challenges make sure you understand and practice what you have learned during the video lectures. The challenges let you build a given design (they are not code along). At the end of the course you will get some tips about where you can learn more and how to advance your knowledge.

### New iteration

At the moment (may 2020) Kevin Powell is adjusting the course content for future iterations. Keep an eye on the webiste if you are interested in future enrollment.

### Summary

Hands-on course to learn to build responsive layouts using flexbox. In the course challenges you will build (parts of) responsive websites yourself.

For more info: https://courses.kevinpowell.co/courses/conquering-responsive-layouts
