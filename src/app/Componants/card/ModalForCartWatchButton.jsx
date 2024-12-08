"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { my_context } from "../GlobalDataShere/ContextProvider";
import { RxCross1 } from "react-icons/rx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalForCartWatchButton() {
  // const [open, setOpen] = React.useState(false);

  const { modalData, setOpenModal, openModal } = React.useContext(my_context);
  // console.log(modalData);
  // const handleClickOpen = () => {
  //   setOpenModal(true);
  // };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p>{modalData?.name}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            {/* for close the modal button  */}
          <button className="absolute top-2" onClick={handleClose}>  <RxCross1 /></button>
         
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
