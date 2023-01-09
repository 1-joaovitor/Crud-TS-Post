import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CategoriesProps } from "../../types/categories";
import { EditCategories } from "../../utils/apiResponse";
import { useState } from "react";
import ModalEdit from "../Modal";
import ModalDelete from "../Modal/ModalDelete";


type CardProps = {
  category: CategoriesProps;
  getCategories: () => void;
};

export default function CardPost({ category, getCategories }: CardProps) {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  

  const EditPost = async (data: string): Promise<void> => {
    await EditCategories(data);
    await getCategories();
    setOpenEdit(false);
  };

  return (
    <>
      <Card sx={{ minWidth: 320, marginTop: 2, maxWidth:600, width:'50%'}}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Typography variant="h5" component="div">
            {category.name}
          </Typography>
          <Typography variant="body2">{category.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setOpenEdit(true)} size="small">
            Editar
          </Button>
          <Button size="small" onClick={() => setOpenDelete(true)}>
            Apagar
          </Button>
        </CardActions>
      </Card>
      <ModalEdit
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        EditPost={EditPost}
        category={category}
      />
      <ModalDelete
        getCategories={getCategories}
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        category={category}
      />
      
    </>
  );
}
