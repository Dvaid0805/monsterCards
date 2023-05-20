import React from 'react';
import { GlobalStyles, AppWrapper } from './App.styles';
import { SearchBox, CardList } from './components';
import { Monster } from './models';

export default function App() {
  const [searchField, setSearchField] = React.useState('');
  const [monsters, setMonsters] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString: string = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters: Monster[] = monsters.filter((monster: Monster) => {
    const newArr: boolean = monster?.name
      .toLocaleLowerCase()
      .includes(searchField);
    return newArr;
  });

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsterArr={filteredMonsters} />
      </AppWrapper>
    </>
  );
}
