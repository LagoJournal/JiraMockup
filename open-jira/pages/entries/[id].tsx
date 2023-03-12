import { ChangeEvent, FC, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Layout } from "../../components/layouts";
import { EntryStatus } from "../../interfaces";

import { isValidObjectId } from "mongoose";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {}

export const EntryPage: FC = (props) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState(false);

  const check = useMemo(() => input.length <= 0 && touched, [touched, input]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  };

  const handleSave = () => {};

  return (
    <Layout title="/////////">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entry: ${input}`}
              subheader={`Created .... mins ago`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New Entry"
                autoFocus
                multiline
                label="New Entry"
                value={input}
                onBlur={() => setTouched(true)}
                onChange={handleInput}
                helperText={check && "Enter a value"}
                error={check}
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row value={status} onChange={handleStatusChange}>
                  {validStatus.map((e) => (
                    <FormControlLabel
                      label={capitalize(e)}
                      key={e}
                      value={e}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                color="secondary"
                onClick={handleSave}
                disabled={input.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "error.dark",
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  if (!isValidObjectId(id)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { id },
  };
};

export default EntryPage;
