/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

data.push({
  title: 'Big Brain Tech Company',
  date: 'Aug 13, 2019',
  firstParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin, nunc vel interdum ultrices, justo erat 
  placerat sem, quis sagittis neque urna sed risus. Nullam ut imperdiet arcu. Sed vitae urna eget nisl tempor euismod in vitae quam. 
  Nulla quis ornare odio, eget tincidunt tortor. Vivamus aliquam turpis sit amet mi porta, ac convallis mi posuere. Vestibulum eu cursus sem. 
  Aliquam quis fringilla sem. Aliquam fermentum ex eu turpis posuere ornare. Nam quis metus molestie, aliquam justo et, ultricies erat. 
  Nunc ut justo ullamcorper, feugiat sem in, sagittis nulla. Sed in iaculis libero, iaculis tempus neque. Maecenas at neque consectetur, 
  facilisis justo ut, ultricies leo. Aenean luctus quis nibh vel ultrices. In posuere, nibh eget iaculis accumsan, diam nisi venenatis felis,
   at lobortis urna odio ullamcorper erat. Sed id odio quis lectus scelerisque mattis quis id ante. Donec tincidunt felis tellus, in pellentesque 
   turpis tincidunt vitae.`,

  secondParagraph: `Proin sed nulla dignissim, aliquam magna id, finibus tortor. Quisque felis leo, sollicitudin ac ullamcorper eget, 
  ultrices eget quam. Sed viverra consectetur vestibulum. Nullam et orci pulvinar, lobortis metus fermentum, tincidunt lorem. Donec dignissim ut 
  neque blandit sagittis. Sed non purus a arcu scelerisque pulvinar. Nullam porttitor, orci ac dignissim blandit, augue diam consectetur ipsum, 
  nec sodales tortor quam at magna. Cras vel odio eget sem venenatis tincidunt. Curabitur in volutpat purus, vitae gravida turpis. Aenean porttitor 
  euismod urna, sit amet pellentesque massa commodo at. Sed ac nisi faucibus nisl pulvinar sagittis. Nullam velit massa, sagittis ut odio suscipit, 
  vulputate sodales ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sagittis ex eget 
  arcu feugiat commodo. Curabitur volutpat pretium mollis. Integer aliquet tortor ex, ac iaculis odio facilisis a.`,

  thirdParagraph: `Duis vel varius arcu, ac congue ligula. Sed luctus ac tortor interdum mattis. Proin sed pharetra nisi, sit amet ultricies neque.
   Maecenas vel massa sit amet tortor volutpat vestibulum. Ut sollicitudin ligula turpis, non commodo ex porttitor eu. Nunc ut risus eget orci pharetra
    blandit id at elit. In ultrices neque vitae eros lacinia, quis elementum risus suscipit. Sed iaculis et elit vel interdum. Duis venenatis feugiat 
    libero, sit amet euismod justo blandit sed. Praesent velit leo, finibus quis ultrices vel, hendrerit in ligula.`
  });

  console.log(data);

// Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
//   <div class="article">
//     <h2>{title of the article}</h2>
//     <p class="date">{date of the article}</p>

//     {three separate paragraph elements}

//     <span class='expandButton'></span>
//   </div>

  // Hint: You will need to use createElement more than once here!

  // Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

function articleH2(title){
  const articleH2 = document.createElement('h2');
  articleH2.textContent = title;

  return articleH2;
}
// console.log(articleH2());

function articleDate(date){
  const aDate = document.createElement('p');
  aDate.classList.add('date');
  aDate.textContent = date;

  return aDate;
}
// console.log(articleDate());

function articlePara1(firstParagraph){
  const newPara1 = document.createElement('p');
  newPara1.textContent = firstParagraph;
  
  return newPara1;
}
// console.log(articlePara1());

function articlePara2(secondParagraph){
  const newPara2 = document.createElement('p');
  newPara2.textContent = secondParagraph;
  
  return newPara2;
}
// console.log(articlePara2());

function articlePara3(thirdParagraph){
  const newPara3 = document.createElement('p');
  newPara3.textContent = thirdParagraph;
  
  return newPara3;
}
// console.log(articlePara3());

// Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

function expandButton(){
  const expandButton = document.createElement('span');
  expandButton.classList.add('expandButton');

  return expandButton;
}

console.log(expandButton());

// Step 3: return the entire component.

function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph){
  const newArticle = document.createElement('section')
    newArticle.classList.add('article')
    
    newArticle.appendChild(articleH2(title));
    newArticle.appendChild(articleDate(date));
    newArticle.appendChild(articlePara1(firstParagraph));
    newArticle.appendChild(articlePara2(secondParagraph));
    newArticle.appendChild(articlePara3(thirdParagraph));
    
    newArticle.appendChild(expandButton());
    newArticle.addEventListener('click', e => e.currentTarget.classList.toggle('article-open'));
    newArticle.addEventListener('toggle', expandButton);

  return newArticle;
}

console.log(createArticle());

const body = document.querySelector('body');

data.forEach((newArticle) => {
  body.appendChild(createArticle(newArticle.title, newArticle.date, newArticle.firstParagraph, newArticle.secondParagraph, newArticle.thirdParagraph));
})

// Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

const dataComponents = data.map((data) => {
  return createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph, expandButton());
})

  // Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible