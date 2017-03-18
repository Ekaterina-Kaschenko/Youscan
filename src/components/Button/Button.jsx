import React from 'react';
import styles from './styles.css';

export default class Button extends React.Component{
  constructor(props){
    super(props);
    this.className='button';
  }
   render(){
     return <div className={ styles.button }>
              <button>
                {this.props.children} 
              </button>
            </div>
   }
}
