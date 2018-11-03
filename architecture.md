## Component styles main design principles

- Props as a single source of truth.
- Functional CSS.
- Provide semantical class names for easy customization.
- The system is going to be influenced by boostrap4 framework.

## Design primitives

### Box

A box is a basic html element which has the following props:


## Color

intention | color = primary | secondary | etc
bgColor
textColor

## Text alignment

textAlign = left|center|right
textNowrap = boolean
textTransform =  lowercase | uppercase | capitalize
fontWeight = bold | normal | light | italic

```html
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
```


## Display

As such, the classes are named using the format:

.d-{value} for xs
.d-{breakpoint}-{value} for sm, md, lg, and xl.

```bash
none
inline
inline-block
block
table
table-cell
table-row
flex
inline-flex
```


## Alignment
align=\left



## **** Border

border
borderRadious 
borderColor


### Sizing

https://getbootstrap.com/docs/4.0/utilities/sizing/

Spacing

```
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
```

### Spacing

he classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

Where property is one of:

m - for classes that set margin
p - for classes that set padding
Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto




## Vertical alignment

```
Choose from .align-baseline, .align-top, .align-middle, .align-bottom, .align-text-bottom, and .align-text-top as needed.
```

## Visibility

visibility


## Elements

### Button

color
textColor
bgColor
outline | true | false
size: sm | large