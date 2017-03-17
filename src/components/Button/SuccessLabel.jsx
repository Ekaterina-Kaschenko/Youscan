import React from 'react';

class Label1 extends React.Component{
  constructor(props){
    super(props);
    this.className='plain-label';
  }
   render(){
     return <span className={this.className}>
        {this.props.children} 
      </span>
   }
}

class SuccessLabel extends Label1{
  constructor(props){
    super(props);
    this.className = this.className + ' success-label';
  }
}

export default SuccessLabel;