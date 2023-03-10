import { Button, Box, TextField } from "@mui/material";
import { useState, ChangeEvent, useContext } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const { addEntry } = useContext(EntriesContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleReset = () => {
    setInput("");
    setTouched(false);
    setIsAddingEntry();
  };

  const handleSave = () => {
    if (input.length === 0) return;
    addEntry(input);
    handleReset();
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {!isAddingEntry ? (
        <Button
          startIcon={<AddOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry()}
        >
          New Task
        </Button>
      ) : (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder="New entry"
            autoFocus
            multiline
            label="New entry"
            helperText={input.length <= 0 && touched && "Enter a value"}
            error={input.length <= 0 && touched}
            value={input}
            onChange={handleChange}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              onClick={() => {
                handleReset();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
