import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = { search: '' };
  formSubmit = e => {
    console.log(e);
    console.log(this.state.search);
    console.log(this.state);
    e.preventDefault();
    this.props.onSubmit(this.state.search);

    this.reset();
  };

  reset = () => {
    this.setState({
      search: '',
    });
  };
  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.formSubmit}>
          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button__label}>Search</span>
          </button>
          <input
            className={styles.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
