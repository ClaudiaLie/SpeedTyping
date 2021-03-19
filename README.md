![alt text](https://i.imgur.com/6Pc3h16.jpg)

# Overview
This project is the submission of the second Milestone Project for Code Institute Full Stack Development course.

The project focuses on the use of JavaScript as main technology to create an Interactive Front-End website.
The website has to respond to the users' actions, allowing users to actively engage with data.
To reach the project requirements I have decided to create a speed-typing video game with a simple but eye-catching style and intuitive navigation for the user.


# Table of Content
* [UX](#ux)
    * [Objective](#objective)
    * [Features](#features)
    * [Colors](#colors)
    * [Wireframes](#wireframes)
* [Strategy](#strategy)
    * [Goal of the Business](#goalbusiness)
    * [Goal of the User](#goaluser)
* [Game Logic](#gamelogic)
* [Testing](#testing)
    * [Testing Details](#testingdetails)
    * [Bugs](#bugs)
    * [User Stories Testing](#storiestesting)
* [Credits](#credits)
    * [Images](#images)
    * [External Credits](#externalcredits)
    * [Deployment](#deployment)
    * [Acknowledgements](#acknowledgements)
* [Links](#links)

# UX <a name="ux"></a>
## Objective <a name="objective"></a>
 The overall interaction of the user with the product we are building is an important key for User Experience. 
 The User Interface has to be clear and intuitive, while the design has to be simple in order to be approachable also for who is not familiar with the product we are creating.
 Specifically in a game application, even the emotional engagement is an important point to consider, because if the product is not well build it will create frustration, and the user won't come back, failing both enjoyability and effective usability.
 To create an appealing experience, immersion and gameplay consistency, the game has to be stripped of everything unnecessary (excessive design, mechanics and goals).
 

 ## Features <a name="features"></a>
 * Navbar with a "Refresh game" icon and a direct link to the Repository of the project on GitHub;
 * Instructions to the game;
 * Score and Time section;
 * A selection of quotes taken from an external API;
 * A header with a JavaScript animation.
 
 ## Colors <a name="colors"></a>
 The color scheme wants to resemble a Dark Screen Mode, to be more likeable for the user.

 <img src="https://i.imgur.com/5dEpSJR.jpg" width="600px" style="margin: 15px;">

  * #FFFFFF - Font color for the instructions' box, time & score box and header animation;
  * #808080 - Background color for the instructions' box, time & score box and navbar icons;
  * #000000 - Header and footer background, font color for the displayed quotes;
  * #9A98B4 - Main section background.

 ## Wireframes <a name="wireframes"></a>
 The initial hand sketched wireframes show a multi-section webpage idea, with a page dedicated to learning how to type faster:
 <img src="https://i.imgur.com/pZS5EIB.jpg?1" width="600px" style="margin: 15px;">

 In order to create a game-focused webpage, the "About" section has been deleted:
 <img src="https://i.imgur.com/dAY0VsZ.jpg" width="600px" style="margin: 15px;">
 
 In favour of a responsive design for all devices:

 <img src="https://i.imgur.com/SlcvcTl.jpg" width="600px" style="margin: 15px;">

 # Strategy <a name="strategy"></a>
 
 ## Goal of the Business <a name="goalbusiness"></a>
 * Create a fun and engaging game;
 * Create an intuitive website, user centered;
 * Create a responsive website so the user is able to play from any device. 

 ## User Stories/ Goal of the User <a name="goaluser"></a>
 * As user, I want to have fun and enjoy the game;
 * As user, I want to test my typing ability;
 * As user, I want to improve my typing ability.

# Game Logic <a name="gamelogic"></a>
<b>For pc users</b> is important to build a game logic that makes the user not to touch the mouse or any other device but the keyboard.
That is the reason why the only engaging activity with the mouse is the refresh button, in case it's needed to start the game again.
The page features also a score and timer of 30 seconds; the timer will reset as soon as the user will match the quote displayed, scoring one point.

<b>For mobile users</b> is important to create a game that is visible on the screen while typing.
<img src="https://i.imgur.com/UfjrNJ8.jpg" width="600px" style="margin: 15px;">

The website is indeed playable even when the keyboard is showing.

# Testing <a name="testing"></a>

## Testing Details <a name="testingdetail"></a>
I had the chance to test the game with some Code Institue students and friends, the feedback I had was extremely interesting:
 * The timer has been increased from the initial 20 seconds amount, because some sentences were too long to be typed in such a short time;
 * A visual feedback (<i>Correct! / Game Over!</i>) if the user scores a point or loses the game has been added, visual feedbacks make any event or action more enjoyable;
 * More detailed instructions were necessary, in order to make the game approachable for who is not familiar with typing games;
 * In order to make the game visible on a mobile screen, the height of the sections have been reduced along with the font size and text style.

I have used the following websites to test the project:

* To see how the website performs on different devices
    * [Am I Responsive](http://ami.responsivedesign.is/#)

* To check the validity of the website's code
    * [W3C HTML Validator](https://validator.w3.org/)
    * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    * [JSlint](http://jslint.com/)

* To audit the quality of the webpage
    * [Lighthouse](https://developers.google.com/web/tools/lighthouse/?utm_source=devtools)

## Bugs <a name="bugs"></a>
* The starting idea of the project had an "About" section that had links to some typing learning guides:
<img src="https://i.imgur.com/1Z7SDI1.jpg?1" width="600px" style="margin: 15px;">

    I felt that I was missing the focus on what was the project about, and I have deleted the learning section from the original idea, in favour of a game-focused webpage.
* I had in mind to create an if else function to convert green the correct words typed, unfortunately the lack of time didn't make possible for me to work on it before submission date.
* In order to avoid any "cheats" or shortcuts to score, the game container rejects copy/paste actions, drag/drop or selecting the text of the quote. 


## User Stories Testing <a name="storiestesting"></a>
 * <i>As user, I want to have fun and enjoy the game.</i>
    * The game is set to an intermediate difficulty, accessible to everyone, with smaller chance to have a longer or shorter quotes to type, in order to keep the user engaged in the challenge.
 * <i>As user, I want to test my typing ability.</i>
    * The score reached will prove the ability of the user.
 * <i>As user, I want to improve my typing ability.</i>
    * Typing games have been created as physical exercise to get better at typing. To give a chance to the user to improve, the game can be played as many times as the user wants to.


## External Credits <a name="externalcredits"></a>
* The typewriter effect animation on the header has been created following the tutorial of [Ania Kubów](https://github.com/kubowania) on her [Youtube Channel](https://youtu.be/mULM6KcF_mo?t=3); 
* The API code and the use of it has been written with the support of the tutorial of [Web Dev Simplified](https://github.com/WebDevSimplified) on his [Youtube Channel](https://youtu.be/R-7eQIHRszQ);
* The general structure of the webpage is inspired by [Traversy Media](https://github.com/bradtraversy) ([Youtube Channel](https://youtu.be/Yw-SYSG-028?t=22)).
* The main inspiration of this game is the typing test [Monkeytype](https://monkeytype.com/), a website with a simple design, extremely intuitive and easy to use.

## Acknowledgements <a name="acknowledgements"></a>
Special thanks to:
* My mentor [Adegbenga Adeye](https://github.com/deye9);
* The Code Institute Slack Community for the feedbacks and tips.

## Deployment <a name="deployment"></a>

* The website is hosted by GitHub Pages, a service offered by GitHub. 
To deploy a website from GitHub Pages the following steps must be followed:
    1. Create a GitHub Account;
    2. Create a Repository, an online storage for the content and files of your website, the name of your Repository must follow the naming convention of GitHub Pages (your-name.github.io);
    3. Use a Git Client (such as GitHub Desktop) to clone your repository and store it in a folder;
    4. Start coding creating an index.html file in your project;
    5. Add, commit and push your changes from your CLI terminal;
    6. After pushing your changes make sure your project is set to Public in the setting section and select a source branch to enable GitHub Pages to publish your repository;
    7. The website is now successfully deployed! The URL will be visible on your repository settings.

# Links <a name="links"></a>
* [README.md file](https://github.com/ClaudiaLie/SpeedTyping/blob/master/README.md)
* [Website on GitHub](https://github.com/ClaudiaLie/SpeedTyping)
* [See the Website](https://claudialie.github.io/SpeedTyping/)