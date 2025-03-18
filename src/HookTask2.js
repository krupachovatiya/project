import React, { useState, useMemo, useCallback} from 'react';

const users = [
  { id: 1, name: 'John', category: 'user' },
  { id: 2, name: 'Abc', category: 'admin' },
  { id: 3, name: 'Peter', category: 'user' },
  { id: 4, name: 'Bruce', category: 'admin' },
  { id: 5, name: 'xyz', category: 'user' },
  { id: 6, name: 'Olivia', category: 'user'},
  { id: 7, name: 'Sarah', category: 'admin'},
  { id: 8, name: 'Michael', category: 'user'},
  { id: 9, name: 'David', category: 'admin'},
  { id: 10, name: 'Ab', category: 'user'}
];

function HookTask2() {
	const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All')

  const handleSearch = useCallback((e) => {
    console.log('useCallback')
    setSearch(e.target.value)
  }, [])

  const handleReset = useCallback(() => {
    setSearch('')
  }, [])

  const handleCategory = useCallback((e) => {
    setCategory(e.target.value)
  }, [])

		const filtered = useMemo(() => {
      console.log('Filtering data');
      return users.filter(users =>
        users.name.toLowerCase().includes(search.toLowerCase())
      );
	}, [search]);

  const categoryUser = useMemo(() => {
    if (category === 'All') {
      return users
    }
    return users.filter(users => users.category.toLowerCase() === category.toLowerCase())
  }, [category])

	return (
		<div>
      <h2>Filter List</h2>
			<input type="text" placeholder="Search" value={search} onChange={handleSearch} />
      <br/><br/>
      <button onClick={handleReset}>Reset</button>

			<ul>
        {filtered.map((users) => (
					<li key={users.id}>{users.name}</li>
				))}
			</ul>

      <div>
        <h2>Category</h2>

        <select value={category} onChange={handleCategory}>
          <option value='All'>All</option>
          <option value='Admin'>Admin</option>
          <option value='User'>User</option>
        </select>

        <ul>
          {categoryUser.map((users) => (
            <li key={users.id}>{users.name}</li>
          ))}
        </ul>
      </div>
		</div>
	);
}

export default HookTask2;
