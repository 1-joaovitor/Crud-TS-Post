import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CategoriesProps } from "../../../types/categories";
import { DeleteCategories } from "../../../utils/apiResponse";

type ModalDeleteProps = {
  openDelete: boolean;
  setOpenDelete: any;
  category: CategoriesProps;
  getCategories: () => void;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalDelete({
  openDelete,
  setOpenDelete,
  category,
  getCategories,
}: ModalDeleteProps) {
  const deleteItem = async (id: string) => {
    await DeleteCategories(id);
    await getCategories();
  };
  return (
    <div>
      <Modal
        open={openDelete}
        onClose={() => setOpenDelete(!openDelete)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Tem certeza ?
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
                gap: 10,
              }}
            >
              <Button onClick={() => setOpenDelete(!openDelete)}>Voltar</Button>
              <Button onClick={() => deleteItem(category._id)}>Apagar</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
