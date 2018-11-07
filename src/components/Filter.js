import React from 'react';

const Filter = (props) => {

    const onSubmit = (e) => {
      let filterType = undefined;
      if(e.target.firstChild.nodeValue === 'Offen') {
        filterType = 'done';
      } else if(e.target.firstChild.nodeValue === 'Erledigt') {
        filterType = !!true;
      }
      props.handleFilterItems(filterType);
    }
    return (
    <div className="filter">
      <div>
        <p className="filter__itemCount">{props.openItems} Einträge offen </p>
      </div>
      <div>
        <button className="button" onClick={onSubmit}>
            Alle
        </button>
        <button className="button" onClick={onSubmit}>
            Offen
        </button>
        <button className="button" onClick={onSubmit}>
            Erledigt
        </button>
      </div>
    </div>
  )
};

export default Filter;