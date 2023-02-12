import React,{useState} from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';

// ============= new set partition values=======
const itemCategory = ['همه', ...new Set(items.map((item) => item.category))]
// console.log(itemCategory)
function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setcategories] = useState(itemCategory);


  const filterItems = (category) => {
    if (category === 'همه') {
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems)
  }
  return (
    <main className="container-fluid">
      <div className='row my-5'>
        <div className='col-xl-10 col-md-12 text-center mx-auto my-5'>
          <section className="menu">
            <div className="title">
              <h2>محصولات فروشگاه</h2>
            </div>
          </section>
          <Categories filterItems={filterItems}  itemCategory = {categories} />
          <Menu menu={ menuItem } />
        </div>
      </div>
    </main>
  );
}

export default App;
