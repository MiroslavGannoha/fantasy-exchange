import * as React from 'react';
import * as classNames from 'classnames';
import * as Moment from 'moment';
import { UncontrolledDropdown as Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import ENavlist from '../../../navlist'
import ETable from '../../index'

import './advanced-table.css'

class AdvancedTable extends React.Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.state = {
      page: 1,
      perPage: 5,
      items: items.slice(),
      tab: 'all',
      filters: {
        search: '',
        active: false
      }
    }
  }


  handlePageChange(page, perPage) {
    if (page !== this.state.page || perPage !== this.state.perPage) {
      this.setState({
        page,
        perPage
      })
    }
  }

  handleFilterChange(filter, value) {
    const filterName = String(filter)
    if (this.state.filters.hasOwnProperty(filterName) && value !== this.state.filters[filterName]) {
      this.setState({
        filters: Object.assign({}, this.state.filters, {
          [filterName]: value
        })
      })
    }
  }

  updateItem(id, updatedFields = {}) {
    const items = this.state.items.slice(),
          item = items.find((i) => i.id === id),
          index = items.indexOf(item)

    if (index > -1) {
      this.setState({
        items: [
          ...items.slice(0, index),
          Object.assign({}, item, updatedFields),
          ...items.slice(index + 1),
        ]
      })
    }
  }

  handleSelect(id, selected) {
    this.updateItem(id, { selected })
  }

  handleSelectAll(checked) {
    const items = this.state.items.slice()
    this.setState({
      items: items.map(item => Object.assign({}, item, { selected: checked }))
    })
  }

  handleTabClick(tab, e) {
    e.preventDefault()
    if (String(tab)) {
      this.setState({
        tab: String(tab)
      })
    }
  }

  toggleBookmark(id, bookmark) {
    this.updateItem(id, { bookmark })
  }

  render() {
    const columns = [
      {
        dataField: 'id',
        text: '',
        headerClasses: 'align-top',
        headerFormatter: (column, index) => (
          <label className="custom-control custom-checkbox custom-control-nameless m-0">
            <input
              type="checkbox"
              className="custom-control-input"
              id="all-items"
              checked={tabs[this.state.tab].length === tabs.selected.length }
              onChange={(e) => this.handleSelectAll(e.target.checked)} />
            <span className="custom-control-label" htmlFor="all-items"></span>
          </label>
        ),
        formatter: (cell, row, index) => (
          <label className="custom-control custom-checkbox custom-control-nameless m-0">
            <input
              type="checkbox"
              className="custom-control-input"
              id={'item-' + cell}
              checked={row.selected ? true : false}
              onChange={(e) => this.handleSelect(cell, e.target.checked)} />
            <span className="custom-control-label" htmlFor={'item-' + cell}></span>
          </label>
        )
      },
      {
        dataField: 'name',
        text: 'Name',
        headerClasses: 'max-width',
        classes: 'text-nowrap'
      },
      {
        dataField: 'date',
        text: 'Date',
        classes: 'text-nowrap',
        sort: true,
        formatter: (cell, row, index) => (
          <span>{ Moment.unix(cell).format('DD MMM YYYY') }</span>
        )
      },
      {
        dataField: 'status',
        text: 'Status',
        classes: 'text-center',
        formatter: (cell, row, index) => (
          <span className={classNames('badge', cell ? 'badge-light' : 'badge-secondary')}>{ String(cell) }</span>
        )
      },
      {
        dataField: 'bookmark',
        text: ' ',
        classes: 'text-center',
        formatter: (cell, row, index) => (
          <span className={classNames('e-advanced-table__bookmark', { active: row.bookmark })}>
            <i className="fa fa-bookmark fa-fw" onClick={() => this.toggleBookmark(row.id, !row.bookmark)}></i>
          </span>
        )
      }
    ]

    const tabs = function() {
      let all = this.state.items.slice()

      if (this.state.filters.search) {
        all = searchArray(all, this.state.filters.search, ['name'])
      }
      if (this.state.filters.active) {
        all = all.filter(item => item.status)
      }

      return {
        all,
        bookmarks: all.filter(i => i.bookmark),
        selected: all.filter(i => i.selected)
      }
    }.bind(this)()

    return (
      <div className="card">
        <div className="card-body">
          <div className="e-advanced-table">
            <div className="d-flex mb-3">
              <div className="mr-3 e-advanced-table__search-input">
                <form className="form-inline">
                  <div className="input-with-ico w-100">
                    <i className="input-ico fa fa-fw fa-search"></i>
                    <div className="input-group flex-nowrap w-100">
                      <input
                        className="form-control w-100"
                        type="search"
                        placeholder="Search"
                        value={this.state.filters.search}
                        onChange={(e) => this.handleFilterChange('search', e.target.value)}/>
                      {
                        this.state.filters.search.length > 0 && (
                          <span className="input-group-append">
                            <button className="btn btn-secondary" type="button" onClick={() => this.handleFilterChange('search', '')}>
                              <i className="fa fa-times"></i>
                            </button>
                          </span>
                        )
                      }
                    </div>
                  </div>
                </form>
              </div>
              <div className="">
                <Dropdown group>
                  <button className="btn btn-success">
                    <i className="fa fa-plus"></i>
                    <span className="d-none d-md-inline-block ml-1">Create</span>
                  </button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu right>
                    <DropdownItem header>With selected:</DropdownItem>
                    <DropdownItem>Remove</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem header>Toggle:</DropdownItem>
                    <DropdownItem>Status</DropdownItem>
                    <DropdownItem>Bookmark</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="row flex-lg-nowrap">
              <div className="col">
                <ENavlist activeBold>
                  <ul className="nav">
                    {
                      Object.keys(tabs).map((tab, index) => (
                        <li className={classNames('nav-item', { active: this.state.tab === tab })} key={index}>
                          <a href="" className="nav-link" onClick={(e) => this.handleTabClick(tab, e)}>
                            <span>{ tab.charAt(0).toUpperCase() + tab.slice(1) }</span>&nbsp;
                            <small>/&nbsp;{ tabs[tab].length }</small>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </ENavlist>
                <hr className="mb-3"/>
                <div className="px-2">
                  <label className="custom-control custom-checkbox m-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="actives-check"
                      checked={this.state.filters.active}
                      onChange={(e) => this.handleFilterChange('active', e.target.checked)} />
                    <span className="custom-control-label" htmlFor="actives-check">Actives Only</span>
                  </label>
                </div>
                <hr className="my-3 d-md-none"/>
              </div>
              <div className="col-12 col-md-9">
                <ETable
                  keyField='id'
                  data={ tabs[this.state.tab] }
                  columns={ columns }
                  pagination={{
                    page: this.state.page,
                    sizePerPage: this.state.perPage,
                    onPageChange: this.handlePageChange
                  }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const items = [
  { id: 1,  name: 'Adam Cotter',       date: 1512792908, status: true,  bookmark: false },
  { id: 2,  name: 'Pauline Noble',     date: 1516977768, status: false, bookmark: true,  selected: true },
  { id: 3,  name: 'Sherilyn Metzel',   date: 1517042476, status: true,  bookmark: false, selected: true },
  { id: 4,  name: 'Terrie Boaler',     date: 1516439865, status: true,  bookmark: false },
  { id: 5,  name: 'Rutter Pude',       date: 1515850922, status: false, bookmark: true  },
  { id: 6,  name: 'Clifford Benjamin', date: 1516898701, status: true,  bookmark: false },
  { id: 7,  name: 'Thedric Romans',    date: 1515707885, status: false, bookmark: true  },
  { id: 8,  name: 'Haily Carthew',     date: 1517056707, status: true,  bookmark: false },
  { id: 9,  name: 'Dorothea Joicey',   date: 1513090469, status: true,  bookmark: false },
  { id: 10, name: 'Mikaela Pinel',     date: 1512892304, status: false, bookmark: true  },
  { id: 11, name: 'Donnell Farries',   date: 1512299369, status: true,  bookmark: false },
  { id: 12, name: 'Letizia Puncher',   date: 1512769349, status: false, bookmark: true  },
  { id: 13, name: 'Kania Yallowley',   date: 1515521487, status: true,  bookmark: false },
  { id: 14, name: 'Clay De Francesco', date: 1515012234, status: false, bookmark: true  },
  { id: 15, name: 'Ina Queree',        date: 1514458367, status: false, bookmark: true  },
  { id: 16, name: 'Rasia Awty',        date: 1516943842, status: false, bookmark: true  },
  { id: 17, name: 'Basil Crosham',     date: 1512108299, status: true,  bookmark: false },
  { id: 18, name: 'Alexis Dodworth',   date: 1516814115, status: false, bookmark: true  },
  { id: 19, name: 'Greg Onyon',        date: 1517071308, status: true,  bookmark: false },
  { id: 20, name: 'Barry Carbett',     date: 1515450742, status: true,  bookmark: false },
  { id: 21, name: 'Carlyle Adran',     date: 1512498261, status: true,  bookmark: false },
  { id: 22, name: 'Guillaume Petel',   date: 1512742913, status: false, bookmark: true  },
  { id: 23, name: 'Wendeline Glasner', date: 1513319267, status: false, bookmark: true  },
  { id: 24, name: 'Sylvia Petrollo',   date: 1516080489, status: false, bookmark: true  },
  { id: 25, name: 'Meade Quoit',       date: 1513972299, status: true,  bookmark: false },
  { id: 26, name: 'Eugine Planke',     date: 1515488407, status: false, bookmark: true  },
  { id: 27, name: 'Thoma Drakeley',    date: 1515023660, status: false, bookmark: true  },
  { id: 28, name: 'Web Margetson',     date: 1513557231, status: true,  bookmark: false },
  { id: 29, name: 'Erskine Stivens',   date: 1515233788, status: true,  bookmark: false },
  { id: 30, name: 'Jedidiah Emmer',    date: 1512614842, status: false, bookmark: true  },
  { id: 31, name: 'Wolfie Drakers',    date: 1512381522, status: false, bookmark: true  },
  { id: 32, name: 'Allie Quiney',      date: 1515488202, status: true,  bookmark: false }
]

// filters the given array of objects with a provided text and fields
function searchArray(array, query, fields = []) {
  if (!array.length || !String(query)) {
    return array
  }

  return array.filter(item => {
    let found = false;
    for (let key in item) {
      if (fields.length && fields.indexOf(key) < 0) {
        continue
      }
      if (typeof item[key] === 'string' &&
          item[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        found = true;
      }
    }
    return found;
  })
}

export default AdvancedTable
