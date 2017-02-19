import React from 'react'; 
import Cards from '../models/cards.jsx'
import CardHolder from '../components/CardHolder.jsx'
import Selector from '../components/Selector.jsx'
import CharacterList from '../components/CharacterList'

class Game extends React.Component {

  constructor(props){
    super(props)
    var cards = new Cards();
    this.state={selectedCard: null, allCards:cards, selectList: ['light_hair', 'male', 'bald', 'moustache', 'beard', 'hat', 'glasses', 'happy'], answer: '', winMessage: '', gameOn: false}
  }

  clickHandler(options){
    var tempArray = this.state.allCards;
    tempArray[options.id].url = options.back;
    tempArray[options.id].back = options.front;
    this.setState({allCards: tempArray})
  }

  startGame(){
    var initialSelectList = ['light_hair', 'male', 'bald', 'moustache', 'beard', 'hat', 'glasses', 'happy'];
    var rand =  Math.floor(Math.random()*this.state.allCards.length);
    var sel = this.state.allCards[rand];
    this.setState({selectedCard: sel});
    this.setState({selectList: initialSelectList});
    this.setState({answer: ''})
  //need to return cards to face front
  var tempArray = this.state.allCards;
  var returnedArray = tempArray.map(function(card,index){
    if (card.url === "./images/back.jpg"){
      var swap = card.back;
      card.back = card.url;
      card.url = swap;
    }; 
    return card;
  });
  this.setState({gameOn: true})
  this.setState({allCards:returnedArray})
  this.setState({winMessage: ''})
}

checkEntry(){
  if (this.state.gameOn){
    var chosen = document.querySelector('#select').value;
    var templist = this.state.selectList;
    var chosenPos = this.state.selectList.indexOf(chosen);
    templist.splice(chosenPos,1);
    this.setState({selectList: templist})
    console.log(this.state.selectList);
    var check = this.state.selectedCard[chosen] 
    if (check){
      if ((chosen === 'male')||(chosen === 'bald')||(chosen === 'happy')){this.setState({answer: 'Yes, the person is '+chosen})}else{this.setState({answer: 'Yes, the person has '+chosen})} 
    }else
  if ((chosen === 'male')||(chosen === 'bald')||(chosen === 'happy')){this.setState({answer: 'No, the person is not '+chosen})}else{this.setState({answer: 'No, the person does not have '+chosen})} 
}
}

checkAnswer(){
  if (this.state.gameOn){
    var chosen = document.querySelector('#answer').value;
    this.setState({answer: ''})
    if (this.state.selectedCard.name === chosen){
      this.setState({winMessage: 'Yes, you win!'})
    }else
    {
      this.setState({winMessage: 'No, sorry, you lose!'})
    }
    this.setState({gameOn: false})  
  }
}

render(){
  var cardList = this.state.allCards.map(function(card,index){
    return <CardHolder key={index} id={index} image={card.url} back={card.back} click={this.clickHandler.bind(this)}/>
  }.bind(this))

  var keyList = this.state.selectList.map(function(key,index){
    if ((key!='url')&&(key!='back')&&(key!='name')){
      return <Selector key={index} listItem={key}/>  
    }
  })

  var characterList = this.state.allCards.map(function(card,index){
    if (card.url != "./images/back.jpg"){
      return <Selector key={index} listItem={card.name}/> 
    }
  })

  return(
    <div className='outline'>
    <h4>Guess who?</h4>
    <button onClick={this.startGame.bind(this)}>Start game</button>
    <div className='container'>
    {cardList}
    <select id='select'>  
    {keyList}
    </select>
    <button onClick={this.checkEntry.bind(this)}>Check</button>
    <label>{this.state.answer}</label>
    <button onClick={this.checkAnswer.bind(this)}>Is it</button>
    <select id='answer'>
    {characterList}
    </select>
    <label>{this.state.winMessage}</label>
    </div>
    </div>  
    )
}
}


export default Game;