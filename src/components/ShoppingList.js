import React from 'react';
import AddItem from './AddItem';
import Header from './Header';
import Items from './Items';
import Filter from './Filter';

export default class ShoppingList extends React.Component {
    state = {
        items: [],
        filter: undefined
    };

    handleFilterItems = (filterType) => {
      console.log('F', filterType)
      this.setState(() => ({ filter: filterType }));
      console.log('FILTER', this.state.filter)
    } 

    handleDeleteItems = () => {
        this.setState(() => ({ items: [] }));
    }

    handleDeleteItem = (itemToRemove) => {
        this.setState((prevState) => (
            { items: prevState.items.filter( item => itemToRemove !== item.text )
        }));
    }

    handleFinishedItem = (finishedItem) => {
      this.setState((prevState) => ({ items: prevState.items.map(item => item.text === finishedItem ? {text: item.text, status: true} : item)}));
    } 

    handleAddItem = (itemText) => {
      const item = {
        text: itemText,
        status: 'done'
      }
        if (!itemText) {
            return 'Enter valid value';
        } else if (this.state.items.indexOf(itemText) > -1) {
            return 'already exists';
        }

        this.setState(prevState => ({ items: prevState.items.concat(item) }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('items');
            const items = JSON.parse(json);
    
            if (items) {
                this.setState(() => ({ items })); //same as {Items: Items}
            }
        } catch (e) {

        }
       
    }

    componentDidUpdate(){
      const json = JSON.stringify(this.state.items);
      localStorage.setItem('items', json);
      console.log('saved')
    }

    render() { 
        const selectedItems = this.state.filter ? this.state.items.filter(item => item.status === this.state.filter) : this.state.items;
        const openItems = this.state.items.filter(item => item.status !== true).length;     
        {console.log(selectedItems)}
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="widget">
                      <AddItem handleAddItem={this.handleAddItem}/>
                      <Items 
                          items={selectedItems} 
                          handleDeleteItem={this.handleDeleteItem}
                          handleFinishedItem={this.handleFinishedItem}
                          handleFilterItems={this.handleFilterItems}
                      />
                      <Filter openItems={openItems} handleFilterItems={this.handleFilterItems}/>
                    </div>
                    
                </div>
            </div>
        );

    }
}