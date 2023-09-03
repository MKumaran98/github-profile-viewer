import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { fetch } from "../utils/fetcher";
import { mq } from "../constants/theme";
import { useState, useCallback } from "react";
import { SearchBar } from "../base";
import debounce from "lodash/debounce";
import { CustomTable } from "../composite";
import useFirstRenderSkip from "../utils/useFirstRenderSkip";
import { TableEmptyState } from "../composite";

const HomeWrapper = styled.div`
  width: 100%;
  height: 102%;
  background: ${({ $background }) => $background};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SearchWrapper = styled.div`
  margin-top: 16px;
  width: 80%;
  width: 100%;
  ${mq[1]} {
    width: 50%;
  }
`;

const ResultWrapper = styled.div`
  height: 80%;
  overflow-y: scroll;
  margin-top: 12px;
  width: 100%;
  ${mq[1]} {
    width: 50%;
  }
`;

const Home = () => {
  const { palette } = useTheme();
  const [searchName, setSearchName] = useState("");
  const [usersData, setUsersData] = useState(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPager] = useState(30);

  const handleSearch = ({ searchText, rowsPerPage, page }) => {
    if (searchText.length > 0) {
      fetch({
        key: `/search/users?q=fullname:${searchText}&sort=followers&order=desc&per_page=${rowsPerPage}&page=${page}`,
        HTTPmethod: "get",
      })
        .then((resp) => {
          setUsersData(resp.data);
        })
        .catch((err) => console.log(err));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce(handleSearch, 300), []);

  useFirstRenderSkip(() => {
    if (searchName) {
      handleSearch({ searchText: searchName, rowsPerPage, page });
    }
  }, [page, rowsPerPage]);

  const searchTextEnteredHandler = (e) => {
    setSearchName(e);
    if (e) {
      debouncedSearch({ searchText: e, rowsPerPage, page });
      return;
    }
    setUsersData(null);
    setPage(1);
    setRowsPerPager(30);
  };

  const componentToRender = () => {
    if (usersData) {
      if (+usersData.totalCount > 0) {
        return (
          <CustomTable
            handleChangePage={(_, newPage) => setPage(newPage + 1)}
            page={page - 1}
            rowsPerPage={rowsPerPage}
            handleChangeRowsPerPage={(e) => setRowsPerPager(+e.target.value)}
            totalCount={usersData.totalCount}
            rows={usersData.items}
          />
        );
      }
      return <TableEmptyState text="Try another name this one doesn't exist" />;
    }
    return <TableEmptyState text="Please enter a name to search" />;
  };

  return (
    <HomeWrapper $background={palette.background.secondary}>
      <SearchWrapper>
        <SearchBar value={searchName} onChange={searchTextEnteredHandler} />
      </SearchWrapper>
      <ResultWrapper>{componentToRender()}</ResultWrapper>
    </HomeWrapper>
  );
};

export default Home;
