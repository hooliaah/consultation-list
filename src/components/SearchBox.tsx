import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDebounce } from "../hooks/useDebounceHook";

const StyledSearchBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 20px;
  .search {
    flex: 1;
    display: flex;
    padding: 5px;
    max-width: 512px;
    .MuiInputBase-root {
      width: 100%;
    }
  }
`;

const SearchBox: React.FC<{
  value?: string;
  onSearch?: (event: any) => void;
}> = ({ value, onSearch }) => {
  // Create a ref that stores the onSearch handler
  const searchHandler = useRef<(event: any) => void>();
  // Update ref.current value if handler changes.
  useEffect(() => {
    searchHandler.current = onSearch;
  }, [onSearch]);

  const [forceSearch, setForceSearch] = useState(false);
  const [search, setSearch] = useState(value);
  const debouncedSearch = useDebounce(search ? search : "", 300);
  useEffect(() => {
    if ((forceSearch || debouncedSearch) && searchHandler.current) {
      searchHandler.current(debouncedSearch);
    }
  }, [debouncedSearch, forceSearch]);

  return (
    <StyledSearchBox>
      <Paper className='search'>
        <IconButton aria-label='search' size='small'>
          <SearchIcon />
        </IconButton>
        <InputBase
          id='search-textfield'
          placeholder='Search'
          type='search'
          value={search || ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value);
          }}
          onKeyPress={(event: any) =>
            event.key === "Enter" && setForceSearch(true)
          }
        />
      </Paper>
    </StyledSearchBox>
  );
};

export default SearchBox;
