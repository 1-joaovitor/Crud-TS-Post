import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { CategoriesProps } from "../../types/categories";
import { useForm } from "react-hook-form";

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

type ModalProps = {
  openEdit: boolean;
  setOpenEdit: (params: boolean) => void;
  EditPost: (data: any) => void;
  category: CategoriesProps;
};

// fazer os onchanges e passar os valores para função mandar para a api. usar o userForm
export default function ModalEdit({
  openEdit,
  setOpenEdit,
  category,
  EditPost,
}: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: category?.name,
      description: category?.description,
      id: category?._id,
    },
  });
  return (
    <div>
      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(!openEdit)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(EditPost)}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {" "}
                Edição
              </Typography>
            </Box>

            <Box sx={{ marginBottom: 2 }}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth={true}
                {...register("name")}
                name="name"
              />
            </Box>

            <TextField
              id="outlined-basic"
              label="Descrição"
              variant="outlined"
              fullWidth={true}
              multiline={true}
              {...register("description", { required:'true '})}
              name="description"
             
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Button onClick={() => setOpenEdit(false)}>Voltar</Button>
              <Button type="submit">Editar</Button>
            </Box>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
