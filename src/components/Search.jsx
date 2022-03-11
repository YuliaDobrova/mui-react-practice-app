import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;

  // instead of input using TextField
  //   return <TextField type="search" value={value} onChange={onChange} />;
  return (
    <TextField
      type="search"
      value={value}
      onChange={onChange}
      id="outlined-basic"
      label="Search"
      variant="outlined"
      fullWidth
      //   variant="standard"
      sx={{
        mb: "1.5rem",
      }}
    />
  );
};

export default Search;
