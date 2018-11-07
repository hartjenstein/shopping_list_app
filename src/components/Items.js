
import React from 'react';
import Item from './Item';

const Items = (props) => {
  return (
      <div className="item__container">
          {!props.items.length && <p className="widget__message">Füge einen Listeneintrag hinzu</p>}
          {
              props.items.map( (item, index) => (
                  <Item 
                      key={index} 
                      itemIndex={index}
                      itemStatus={item.status}
                      itemText={item.text}
                      handleDeleteItem={props.handleDeleteItem}
                      handleFinishedItem={props.handleFinishedItem}
                  /> 
              ))
          }
      </div>
  )
}
export default Items;
