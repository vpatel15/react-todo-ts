import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "./ListItem.css";

interface ListItemProps {
  id: number;
  label: string;
  key?: string;
  checked?: boolean;
  onCheckBoxChange: (id: number) => void;
  onDelete?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  checked,
  label,
  key,
  onCheckBoxChange,
  onDelete,
}: ListItemProps) => {
  const ariaLabel = { inputProps: { "aria-label": label } };
  const handleChange = (id: number) => {
    onCheckBoxChange(id);
  };
  return (
    <li className="list-item" key={key}>
      <Checkbox
        {...ariaLabel}
        checked={checked}
        value={id}
        id={id.toString()}
        onChange={() => handleChange(id)}
      />
      {checked ? (
        <label htmlFor={id.toString()}>
          <s>{label}</s>
        </label>
      ) : (
        <label htmlFor={id.toString()}>{label}</label>
      )}
      <Button disabled={checked} variant="contained" onClick={onDelete}>
        Delete
      </Button>
    </li>
  );
};

export default ListItem;
