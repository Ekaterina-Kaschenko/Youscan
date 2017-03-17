import React from 'react';

class Button extends React.Component{
  constructor(props){
    super(props);
    this.className='button';
  }
   render(){
     return <span className={this.className}>
        {this.props.children} 
      </span>
   }
}