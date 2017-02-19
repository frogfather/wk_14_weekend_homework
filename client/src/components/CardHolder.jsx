import React from 'react'; 

class CardHolder extends React.Component{
  constructor(props){
    super(props)
    this.state={front: this.props.image, back: this.props.back, id: this.props.id}
  }

  cardClick(event){
    event.persist()
    var swap = this.state.back;
    this.props.click({front: this.state.back, back: this.state.front, id: this.state.id})
    this.setState({back: this.state.front});
    this.setState({front: swap})
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