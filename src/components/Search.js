import React from 'react';

const Search = ({ handleFormSubmit, setSearch, search }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleFormSubmit(search);
  };

  return (
    <div className='search'>
      <form className='input' onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Search video'
          onChange={onChangeHandler}
        ></input>
        <button className='btnsearch' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
