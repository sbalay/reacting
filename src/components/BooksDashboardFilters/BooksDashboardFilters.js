import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class BooksDashboardFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterTypes: ['title', 'author', 'editorial', 'category'],
      selectedFilterType: 'title',
      filterValue: 'asd'
    };
  }

  onSubmitFilters () {
    console.log('submit');
  }

  onFilterTypeSelected (selectedFilterType) {
    this.setState({
      selectedFilterType
    })
  }

  onUpdateFilter (ev) {
    this.setState({
      filterValue: ev.target.value
    });
  }

  render() {
    return (
      <form className='wb-dasboard-filters-container' onSubmit={ this.onSubmitFilters }>
        <DropdownButton title={ this.state.selectedFilterType }
          id='wb-filter-type-dropdown'
          className='wb-control-item wb-filter-type-select'>

          {
            this.state.filterTypes.map((filterType) => {
              return (
                <MenuItem eventKey={ filterType }
                  key={ filterType }
                  onSelect={ this.onFilterTypeSelected.bind(this) } >
                  { filterType }
                </MenuItem>
              );
            })
          }
        </DropdownButton>
        <input type="text"
          className="wb-input wb-control-item"
          value={ this.state.filterValue }
          placeholder='Buscar...'
          onChange={ this.onUpdateFilter.bind(this) } />
      </form>
    );
  }
}
