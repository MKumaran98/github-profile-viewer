import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      placeholder="Search user"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        ".MuiOutlinedInput-root": {
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
        },
        width: "100%",
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
