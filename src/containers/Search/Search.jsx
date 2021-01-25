import React, { Component } from 'react';
import API from "../../API/API.js";
import SearchForm from "../../components/Search/SearchForm";
import ResultList from "../../components/Search/ResultList";

class Search extends Component {
    state = {
      search: "",
      results: []
    };
  
    componentDidMount() {
      this.searchEmployees("male");
    }
  
    searchEmployees = query => {
      API.search(query)
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };
  

    handleFormSubmit = event => {
      event.preventDefault();
      this.searchEmployees(this.state.search);
    };

    handleClick = () => {
        this.state.results.sort((a, b) => (a.last > b.last) ? 1 : -1)
    }

    sortbyname = () => {
      const sortedUsers = this.state.results.sort((a, b) => {
        const aValue = a.name.first;
        const bValue = b.name.first;
        if (aValue < bValue) {
          return -1;
        }
        if (aValue > bValue) {
          return 1;
        }
          return 0;
      });
      console.log({ results: sortedUsers});
      this.setState(sortedUsers);
    }
  
    render() {
      return (
        <div>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        <div className="row justify-content-center">
          <button 
          search={this.state.search}
          className="btn btn-primary"
          onClick={this.sortbyname}>
                Sort By Name
          </button>
          </div>
          <ResultList results={this.state.results} />
        </div>
      );
    }
  }
  
  export default Search;
  