const button = document.getElementById("button");
const h2 = document.getElementById("h2");
// let time = new Date().getTimezoneOffset() * 60000; /
// let timenow = new Date().getTime() - time;         /
// let Day = Math.floor(timenow / 86400000)           / Here is another way how to display day or data to show the quotes
// let quotes = 31;                                   /
// let qdisplay = Day % quotes;                       /

let therealtime = new Date().getDate();

//const test = 31; //I made it for testing switch to see every case :)

button.addEventListener("click", () => {
  switch (therealtime) {
    case 1:
      h2.innerHTML =
        "Some days are just bad days, that's all. <br>You have to experience sadness to know happiness, <br>and I remind myself that not every day is going to be a good day, <br>that's just the way it is! <br> &copy; Dita Von Teese";
      break;
    case 2:
      h2.innerHTML =
        "Every day is a new day, and you'll never be <br>able to find happiness if you don't move on. <br>&copy; Carrie Underwood";
      break;
    case 3:
      h2.innerHTML =
        "Every day, I like to wake up and remind myself <br>to be grateful of the simple things. <br>&copy; Miranda Kerr";
      break;
    case 4:
      h2.innerHTML =
        "Plan your work for today and every day, <br>then work your plan. <br>&copy; Margaret Thatcher";
      break;
    case 5:
      h2.innerHTML =
        "Be true to yourself, help others, make each day your masterpiece, <br>make friendship a fine art, drink deeply from good books - especially the Bible, <br>build a shelter against a rainy day, give thanks for your blessings and pray for guidance every day. <br>&copy; John Wooden";
      break;
    case 6:
      h2.innerHTML =
        "If you learn something new every day, you can teach something new every day. <br> &copy;Martha Stewart";
      break;
    case 7:
      h2.innerHTML =
        "Our life is the sum total of all the decisions we make every day, and those decisions are determined by our priorities. <br>&copy;Myles Munroe";
      break;
    case 8:
      h2.innerHTML =
        "You have competition every day because you set such high standards for yourself <br>that you have to go out every day and live up to that. <br>&copy; Michael Jordan";
    case 9:
      h2.innerHTML =
        "People see God every day, they just don't recognize him. <br>&copy; Pearl Bailey";
      break;
    case 10:
      h2.innerHTML =
        "Start living now. Stop saving the good china for that special occasion. <br>Stop withholding your love until that special person materializes. <br>Every day you are alive is a special occasion. <br>Every minute, every breath, is a gift from God. <br> &copy; Mary Manin Morrissey";
      break;
    case 11:
      h2.innerHTML =
        "The whole secret of a successful life is to find out what is one's destiny to do, and then do it. <br> &copy; Henry Ford";
      break;
    case 12:
      h2.innerHTML =
        "I'm always thinking about creating. <br> My future starts when I wake up every morning... <br> Every day I find something creative to do with my life. <br> &copy; Miles Davis";
      break;
    case 13:
      h2.innerHTML =
        "Some days are like this. <br> And the only way to get through them is to remember <br> that they are only one day, and that every day ends.  <br> &copy; David Levithan";
      break;
    case 14:
      h2.innerHTML =
        "Every day is a good day. <br> There is something to learn, care and celebrate. <br> &copy; Amit Ray";
      break;
    case 15:
      h2.innerHTML =
        "Everyday we are at war. <br> Peaceful mind is earned. <br> &copy; Toba Beta";
      break;
    case 16:
      h2.innerHTML =
        "The easiest way to be reborn is to live and feel life everyday. <br> &copy; Munia Khan";
      break;
    case 17:
      h2.innerHTML =
        "Learn to create your internal joy everyday and pass this joy to the world. <br> &copy; Purvi Raniga";
      break;
    case 18:
      h2.innerHTML =
        "It's not just about being better. It's about being different. <br> You need to give people a reason to choose your business.  <br> &copy; Tom Abbott";
      break;
    case 19:
      h2.innerHTML =
        "Someday is not a day of the week.  <br> &copy; Denise Brennan-Nelson";
      break;
    case 20:
      h2.innerHTML =
        "If you cannot do great things, <br> do small things in a great way. <br> &copy; Napoleon Hill";
      break;
    case 21:
      h2.innerHTML =
        "Nothing is really work unless you would <br> rather be doing something else. <br> &copy; J.M. Barrie";
      break;
    case 22:
      h2.innerHTML =
        "Working hard for something <br> we don't care about is called stressed; <br> working hard for something we love is called passion. <br> &copy; Simon Sinek";
      break;
    case 23:
      h2.innerHTML =
        "I'd rather regret the things <br> I've done   than regret the things  I haven't done. <br> &copy; Lucille Ball";
      break;
    case 24:
      h2.innerHTML =
        "Always do your best. <br>  What you plant now, you will harvest later. <br> &copy; Og Mandino";
      break;
    case 25:
      h2.innerHTML =
        "The key to life is accepting challenges. <br> Once someone stops doing this, he's dead. <br> &copy; Bette Davis";
      break;
    case 26:
      h2.innerHTML =
        "Move out of your comfort zone. <br> You can only grow if you are willing to feel  awkward <br> and uncomfortable when you try something new. <br> &copy; Brian Tracy";
      break;
    case 27:
      h2.innerHTML =
        "Challenges are what make life interesting and <br> overcoming them is what makes life meaningful. <br> &copy; Joshua J. Marine";
      break;
    case 28:
      h2.innerHTML =
        "Failure after long perseverance is much grander than <br> never to have a striving good enough to be called a failure. <br> &copy; George Eliot";
      break;
    case 29:
      h2.innerHTML =
        "Action is the foundational key to all success. <br> &copy; Pablo Picasso";
      break;
    case 30:
      h2.innerHTML =
        "Obstacles are those frightful things you see <br> when you take your eyes off your goal. <br> &copy; Henry Ford";
      break;
    case 31:
      h2.innerHTML =
        "Don't ask if your dream is crazy, <br> ask if it's crazy enough. <br> &copy; Lena Waithe";
      break;
  }

  // console.log(qdisplay); //to make sure that switch works correctly and days have changed : )
});

 