# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

(./screenshot.png)


### Links

- Live Site URL: [Add live site URL here](https://jonathon-eng.github.io/FrontEndMentorChallenge2/)

## My process

The very first thing I did was getting the design ready from the outside in. However, I also had to make sure mobile was a priority, so I started with that. 

Next was building out the layout. I had a basic idea of what to do, but usually positioning of elements takes time and tends to be on the difficult side.

The major overlying issue was the buttons. Originally built with a list and buttons, I was informed that was wrong. Even though I had to remake them with radio buttons, I was able to use the designs I had built for the list items seemlessly.

The next big issue was JS and it took a while to figure what would be the best action to take. I started off by figuring out how to take the data given from the radio buttons and pass them into the console. I was previously unaware that you can pass in input[name="something"] into the querySelector, which actually helped out a lot. 

Finally trying to pass said data back into the html file was challenging as my syntax was wrong and I couldn't figure it out early on. It turns out that passing the previous data into a new variable with a new name, I can directly pass it into the html easily by specifying what I was looking for in the markup.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Vanilla javascript
- Some help from a seemingly annoyed person from the help Slack page.

### What I learned


```html
 <div class="radios">
          <label>
            <input type="radio" name="select" value="1" />
            <span>1</span> 
          </label>
          <label>
            <input type="radio" name="select" value="2" />
            <span>2</span> 
          </label>
          <label>
            <input type="radio" name="select" value="3" />
            <span>3</span> 
          </label>
          <label>
            <input type="radio" name="select" value="4" />
            <span>4</span> 
          </label>
          <label>
            <input type="radio" name="select" value="5" />
            <span>5</span> 
          </label>
  </div>
        

```
```css
CSS is whatevers.. I like it way more than JS
```
```js
function displayData() {
    data = document.querySelector('input[name="select"]:checked').value;
    document.getElementById("selection1").innerHTML = data;
    event.preventDefault();
    document.getElementById("card1").style.display="none";
    document.getElementById("card2").style.display="block";
}
```



### Continued development

I realized shortly after getting the results I wanted, that my monitor isn't displaying colors correctly, so I needed to redo some of it.

### Useful resources

Lots of online resources. I can't remember most of them, but they were helpful with learning what to do with JS.

## Author

TBA

## Acknowledgments

Thanks to Kevin Powell for recommending this site and providing advice through his videos.
