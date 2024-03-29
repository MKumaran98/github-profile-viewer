import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { columns } from "../constants/table";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const TableHeaderText = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
`;

const CustomTable = ({
  totalCount,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rows,
  rowItemClicked,
}) => {
  const { palette } = useTheme();
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        border: `1px solid ${palette.background.border}`,
        borderRadius: "8px",
      }}
    >
      <TableContainer sx={{ maxHeight: "calc(100vh - 250px)" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <TableHeaderText>{column.label}</TableHeaderText>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{ cursor: "pointer" }}
                        onClick={() => rowItemClicked(row)}
                      >
                        {column.component ? column.component(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[30, 50, 100]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CustomTable;
