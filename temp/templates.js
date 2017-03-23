angular.module('mySite').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/about/partial/about/about.html',
    "<div class=col-md-12 ng-controller=AboutCtrl><h1>Who is Ryan Milstead?</h1><hr><p>I was born and raised in Mississippi. My dad instilled in me a huge curiosity about how things worked and how they were put together. I spent many nights as a teenager taking apart random electronics in the house just looking at the complicated inter-workings and fixing whatever might be wrong. Then we got our first computer...</p><p>Even using the old dos prompt computer that we had in the 90s, I was totally hooked by the magic of that machine. I knew that I loved computers at that point and they have always been a hobby of mine. My plan in high school was to go into video game design but life had something else in store for me.</p><div class=row><div class=col-md-4><img src=img/Rigoletto.jpg id=rigoletto></div><div class=col-md-8><p>Yeah that's me in a production of Rigoletto in Miami, Florida. I found music when I was a junior in high school and followed that bug all the way to the operatic stage. I've had the amazing fortune to sing on stages all over the US as well as Italy but I never lost that fire for computers.</p><p>In February of 2014, I decided to transition out of performing into the world of web development. I considered my options: going back to school to get a computer science degree, certifications or self training. Then a friend told me to take a look at this web development training school called Dev Bootcamp. As soon as I visited their website, I knew that was the place for me.</p></div></div><p class=top-space>I spent 6 months learning everything I could about the basics of web development to prepare for the grueling 18 weeks of Dev Bootcamp. But nothing I could read or try out could prepare me for the life changing experience that I would go through in Chicago. I spent 9 weeks going through the pre-traning phase, completing exercises and personal reflection remotely and then the real test began when my wife and I moved to Chicago in September.</p><p>Now Dev Bootcamp doesn't promise to cram an entire computer science degree into 18 weeks. That's impossible. But what it did teach me is how to hit the ground running and adapt to fast paced work environments. That is definitely something that you don't learn in college. Also something amazing that Dev Bootcamp does is teach you the interpersonal skills that help to make you an invaluable part of any web development team. It doesn't just make you a better web developer, it makes you a better person.</p><p class=top-space>Now I'm a full fledged web developer. I've worked with lots of different compananies in teams of many different sizes. I've been the only person in charge of rebuilding the entire frontend of a client's web application (while learning Angular mind you) and I've also worked in highly agile teams that utilized short sprints, retrospectives and intricate subtasking. I've learned several different frontend frameworks at this point, all while working on client projects, and still managed to make those projects profitable. I've got a big thirst for knowledge, I love learning new things and I would love the chance to work with you.</p></div>"
  );


  $templateCache.put('app/contact/partial/contact/contact.html',
    "<div class=col-md-12 ng-controller=ContactCtrl><h1>Contact Me</h1><hr><p>Thanks for visiting my site.</p><p>If you would like to get in touch with me about a potential project, talk about my experience at Dev Bootcamp, or to talk about anything really, please feel free to contact me via email: <a href=mailto:ryanmilstead1@gmail.com>ryanmilstead1@gmail.com</a>.</p><p>Also, if you're curious to see any of my old opera performances, they can be found <a href=\"https://www.youtube.com/results?search_query=ryan+milstead&page=1\">here</a> via YouTube.</p><p>And of course, if you feel so inclined, please follow me on social media.</p><img src=img/curved_arrow.png alt=\"\" id=arrow></div>"
  );


  $templateCache.put('app/home/partial/home/home.html',
    "<div class=col-md-12 ng-controller=HomeCtrl><h1>Be the change you wish to see in the world</h1><h4>- Gandhi</h4><hr><p>Thanks for visiting my site. I'm a former opera singer turned web developer currently living in Pittsburgh, PA with my wonderful wife and our dog, Winston.</p><div class=col-md-4><img src=img/family_photo.jpg id=family-photo></div><div class=col-md-8><p>My site serves as an amalgamation of things I find interesting, projects that I've been a part of and all of the various ways you can get in touch with me. Take a look around and feel free to contact me if you're interesting in working on a project together.</p><p>Below you can find a collection of interesting blogs, websites, books, and videos about development that I have come across in the past few years. Hopefully they can be as helpful to you as they have been to me.</p></div><div class=col-md-12><h3>Interesting Things:</h3><ul class=col-md-6><li><h4><a href=\"http://devbootcamp.com/\" target=blank>Dev Bootcamp</a></h4></li><li><h4><a href=http://amzn.to/1kQJCRv target=blank>The Well-Grounded Rubyist</a></h4></li><li><h4><a href=http://bit.ly/1TbvIor target=blank>Why's (Poignant) Guide to Ruby</a></h4></li></ul><ul class=col-md-6><li><h4><a href=http://bit.ly/21ddIzd target=blank>Angular Material</a></h4></li><li><h4><a href=http://amzn.to/1R2aY3a target=blank>Eloquent Javascript</a></h4></li><li><h4><a href=http://bit.ly/1XmWxGG target=blank>Griffin Caprio's Blog</a></h4></li></ul><youtube-video video-id=empathy></youtube-video><youtube-video video-id=rubyConf></youtube-video></div></div>"
  );


  $templateCache.put('app/projects/partial/projects/projects.html',
    "<div class=col-md-12 ng-controller=ProjectsCtrl><h1>Portfolio</h1><h4><a href=http://www.seventeendaysweb.org>Seventeen Days</a></h4><img src=img/seventeen_days.png alt=\"Seventeen Days\" class=\"portfolio-image\"><p class=portfolio-info>Seventeen Days Interactive is a theory-based interactive film created by Carnegie Mellon University designed to educate young women about contraception and sexually transmitted infections (STIs). The film experience is interactive, allowing viewers to choose what they want to watch and tracks potential viewers progress through the app for analytics and usage. The application was built as a hybrid web/mobile application utilizing Ionic/Angular for the frontend and RoR api backend</p><h4><a href=https://sortbox.co/sortbox>Sortbox</a></h4><img src=img/sortbox.jpg alt=Sortbox class=\"portfolio-image\"><p class=portfolio-info>Sortbox is a web-based applicant review and organization system enabling small businesses to promote, collect and screen applications. This site is built with Ruby on Rails and utilizes Stripe for payment processing and management.</p><h4><a href=http://www.rbcs.com>RBCS</a></h4><img src=img/RBCS.png alt=RBCS class=\"portfolio-image\"><p class=portfolio-info>Red Book Credit Services provides access to a comprehensive, continually updated database of the Fresh Produce Industry that helps users monitor companies business habits and helps them make connections to those companies. The frontend of the site was built entirely in Angular with a RoR api backend.</p></div>"
  );

}]);
