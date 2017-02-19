import React from 'react'; 

class CardHolder extends React.Component{
  constructor(props){
    super(props)
    this.state={front: this.props.image, back: this.props.back, id: this.props.id}
  }

  cardClick(event){
    event.persist()
    this.props.click({front: this.state.front, back: this.state.back, id: this.state.id})
    console.log(this.state)
  }

  render(){
    return(
      <div >
      <img className='card' src={this.props.image} onClick={this.cardClick.bind(this)}></img>
      </div>
      )
  }
}


export default CardHolder;