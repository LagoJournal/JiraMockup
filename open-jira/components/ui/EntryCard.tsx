import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Entry } from "../../interfaces";
import { FC, DragEvent, useContext } from "react";
import { UIContext } from "../../context/ui";
import { useRouter } from "next/router";
import { dateFunctions } from "../../utils";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { setIsDragging } = useContext(UIContext);
  const router = useRouter();

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    setIsDragging();
  };

  const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
    setIsDragging();
  };

  const handleClick = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">
            {dateFunctions.getFormatDistanceToNow(entry.createdAt) + " ago."}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
