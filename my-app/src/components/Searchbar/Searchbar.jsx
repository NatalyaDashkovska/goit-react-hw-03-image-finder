import React, { Component } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';
class Searchbar extends Component {
  state = { search: '' };
  formSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    this.props.onSubmit({ search });
    this.reset();
  };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
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
            onChange={this.handleChange}
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
