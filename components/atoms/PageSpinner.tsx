import { Backdrop, CircularProgress } from "@mui/material";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export default function PageSpinner({ open, handleClose }: IProps) {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="secondary" size={70} thickness={6} />
    </Backdrop>
  );
}
