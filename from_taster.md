
### Adding the tweet button

Now that we've got the main functionality working, let's add the tweet button! Let's get the code for the button from Twitter. Go to google and search for "tweet button code". The first link should point to [Twitter Buttons](https://twitter.com/about/resources/buttons) page.

![twitter](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/twitter.png)

Select the first button (share a link) and leave all options default except the tweet text. Set it to "I built a 'Motivational Posters' page today here at @makersacademy!".

![twitter2](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/twitter_2.png)

On the right you'll see the resulting HTML code that you need. Copy it to the index.erb file right after `#controls` putting it into its own div element with the id of "twitter".

```html
<div id="twitter">
    <a href="https://twitter.com/share" class="twitter-share-button" data-text="I built Motivational Posters page today @makersacademy!">Tweet</a>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
</div>
```

Refresh the page. Now you should see the tweet button below.

## Last Task!

Now, this is where it gets interesting!

- Deploy the website to Heroku. You'll need to make sure it works locally, then add all files to git ("git add .", "git commit -m 'message'") and finally "git push heroku master". Once you made sure it works, tweet it, you've built something cool – let friends know :)
- If you just went through the tutorial copy-pasting the code and not thinking much about how it works, go back and try to understand why it works the way it does. Can you tell why the dashed border is red? Why it's thick and how thick it is? What piece of code is responsible for loading the image into the worskpace when you click a thumbnail? What's the difference between the input fields of type "text" and "number"? What makes the Makers Academy logo to be on the left of the text in the footer, and not above it?
- The exercises below are meant to challenge you to find answers to programming problems. Try to do them and it you can't find a solution!
- Some exercises are easier than the others. If one of them seems hard, try another one!

## Extra Exercises

Finally, once you are really comfortable with the existing codebase, do the following exercises. Many of them will involve some googling around to learn something new, others will involve going back to this tutorial, as well as HTML & CSS overview.

- Add more colours into the drop-down menu. Make sure there are lots of colours to choose from.
- Change the background colours of the sections to something new, don't use the colours we've just used. Play with the opacity values.
- When the thumbnails are shown, they look rather dull: all together, without borders or shadows, without any space in between. How can you make them look better?
- When you enter the keyword and press Enter, the search isn't performed by default. What if you add a Javascript event to listen for when you hit "Enter" in the keyword input field? Then, when this event happens, you could kick off the image search. You'll probably need to google a little bit to find out how to listen for this event (stackoverflow.com is the best source of programming tips).
- Right now we're using Helvetica as the font for the page. Find out how to use a different font. What fonts are available in every browser by default? Change the font to one of them.
- Can you find out how to download an exotic font, add it to the project and apply only to the h1 header on the page using CSS?
Right now the "Powered by Google" logo is right-aligned. Can you make it centred?
- Add your name to the footer, so that everyone knew who built this site!
- In the footer we're listing the technologies used. Can you find their websites and add the links in the footer?
- We've got the tweet button on the page that we've got from the Twitter website. Can you find the code for the Facebook like page? (This may be a bit tricky, it may involve creating an "application" on Facebook but it's actually much easier than it sounds).
- What other text properties, apart from position, colour, alignment and font size can you think of? Can you add them to the page and make them work with javascript?
- Find a website that allows you to generate a logo, create one for the page and add as an image to the header.
- Find a website that allows you to generate buttons, create a beautiful "Search" button and replace our plain and dull "Go" button.
