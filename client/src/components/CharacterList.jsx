import React from 'react'; 
class CharacterList extends React.Component{
  constructor(props){
    super(props)
   
  }
render(){
  return(
    <option value={this.props.listItem}>{this.props.listItem}?
    </option>
    )
}
}

export default CharacterList;