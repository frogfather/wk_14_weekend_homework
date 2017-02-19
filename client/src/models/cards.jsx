import Card from './Card';

var Cards = function(){
  
  var resultArray = [];

  var card1 = new Card({
    name: 'Alex',
    light_hair: false,
    male: true,
    bald: false,
    moustache: true,
    beard: false,
    hat: false,
    glasses: false,
    happy: true,
    url: "./images/alex.png"
  });

  resultArray.push(card1);

  var card2 = new Card({
    name: 'Alfred',
    light_hair: true,
    male: true,
    bald: false,
    moustache: true,
    beard: false,
    hat: false,
    glasses: false,
    happy: false,
    url: "./images/alfred.png"
  });
    
  resultArray.push(card2); 
  
  var card3 = new Card({
    name: 'Anita',
    light_hair: true,
    male: false,
    bald: false,
    moustache: false,
    beard: false,
    hat: false,
    glasses: false,
    happy: true,
    url: "./images/anita.png"
  });
    
  resultArray.push(card3); 

  var card4 = new Card({
    name: 'Anne',
    light_hair: false,
    male: false,
    bald: false,
    moustache: false,
    beard: false,
    hat: false,
    glasses: false,
    happy: true,
    url: "./images/anne.png"
  });
    
  resultArray.push(card4); 

  var card5 = new Card({
    name: 'Bernard',
    light_hair: false,
    male: true,
    bald: false,
    moustache: false,
    beard: false,
    hat: true,
    glasses: false,
    happy: false,
    url: "./images/bernard.png"
  });

  resultArray.push(card5);

  var card6 = new Card({
    name: 'Bill',
    light_hair: true,
    male: true,
    bald: true,
    moustache: false,
    beard: true,
    hat: false,
    glasses: false,
    happy: true,
    url: "./images/bill.png"
  });
    
  resultArray.push(card6); 
  
  var card7 = new Card({
    name: 'Charles',
    light_hair: true,
    male: true,
    bald: false,
    moustache: true,
    beard: false,
    hat: false,
    glasses: false,
    happy: true,
    url: "./images/charles.png"
  });
    
  resultArray.push(card7); 

  var card8 = new Card({
    name: 'Claire',
    light_hair: true,
    male: false,
    bald: false,
    moustache: false,
    beard: false,
    hat: true,
    glasses: true,
    happy: true,
    url: "./images/claire.png"
  });
    
  resultArray.push(card8); 

  return resultArray; 
}

export default Cards;