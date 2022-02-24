import Logo from '../Global/Logo/Logo.js';
import H1 from '../Global/H1/H1.js';
import Button from '../Global/Button/Button.js';
import ListItem from '../ListItem/ListItem.js';
import AddNewItem from '../AddNewItem/AddNewItem.js';

export default function ItemsDisplay({ items, onAddNewItem }) {
  return (
    <div className="display-container">
      <AddNewItem onAddNewItem={onAddNewItem} />
      <div className="box">
        <Logo />
      </div>
      <div className="browse">
        <H1 text="Browse..." />
      </div>
      <div>
        <ListItem items={items} />
      </div>
      <div className="plus-button">
        <Button text="+" />
      </div>
    </div>
  );
}
