
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
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

type ModalNewPost = {
    setOpenNew: (params : boolean) => void
    openNew: boolean;
    newPost: (params : object) => void
}




export default function ModalNewPost({setOpenNew, openNew, newPost}:ModalNewPost
) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
        name:'',
        description:''
    }
  });
  return (
    <div>
      <Modal
        open={openNew}
        onClose={() => setOpenNew(!openNew)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(newPost)}>
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
                Nova Categoria
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
              {...register("description")}
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
              <Button onClick={() => setOpenNew(!openNew)}>Voltar</Button>
              <Button type="submit">Salvar</Button>
            </Box>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
