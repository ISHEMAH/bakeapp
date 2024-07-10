import { FC } from 'react';

const SearchBar: FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="What are you looking for?"
      className="p-2 border rounded  bg-white absolute self-center align-middle top-4 w-1/3 left-1/3"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
