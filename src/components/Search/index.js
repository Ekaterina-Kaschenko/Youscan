import React from 'react';
import styles from './styles.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.search}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={styles['search-text']}
            placeholder='Search'
            value={this.state.value}
            onChange={this.handleChange} />
          <button className={styles['search-button']}>svg</button>
        </form>
      </div>
    );
  }
};
