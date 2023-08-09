import { useState } from 'react';
import List from './components/List';
import data from '../data';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setToggle(!toggle);
    if (toggle === true) {
      setPeople(data);
    } else {
      setPeople([]);
    }
  };

  return (
    <>
      <main className='bg-white p-6 rounded-lg w-[300px] h-fit drop-shadow-2xl  '>
        <>
          <h2 className=' pb-10'>{people.length} birthdays today</h2>
          {people.map((list) => (
            <>
              <div key={list.id}>
                <List name={list.name} image={list.image} age={list.age} />
              </div>
            </>
          ))}
          <button
            type='button'
            className=' w-full text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mt-4 mb-2 drop-shadow-lg shadow-pink-300'
            onClick={() => handleClick()}
          >
            {toggle ? 'Reload' : 'Clear All'}
          </button>
        </>
      </main>
    </>
  );
};

export default App;
