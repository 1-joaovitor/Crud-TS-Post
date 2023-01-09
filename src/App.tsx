import { Header } from "./components/Header";
import CardPost from "./components/CardPost";
import { useEffect, useState } from "react";
import { CategoriesProps } from "./types/categories";
import { getCategoriesAll } from "./utils/apiResponse";
import ModalNewPost from "./components/Modal/ModalNewPost";
import { newCategories } from "./utils/apiResponse";
import "./App.css";

function App() {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [openNew, setOpenNew] = useState<boolean>(false);
  

  const getCategories = async (): Promise<void> => {
    const response = await getCategoriesAll();

    const categoriesData: Array<CategoriesProps> = response;
    setCategories(categoriesData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const newPost = async (data: object) => {
    await newCategories(data);
    await getCategories();
    setOpenNew(false)
  };

  return (
    <>
      <Header setOpenNew={setOpenNew} />
      <div className="App">
        {categories.map((category) => (
          <CardPost
            getCategories={getCategories}
            key={category._id}
            category={category}
          />
        ))}
        <ModalNewPost
          openNew={openNew}
          setOpenNew={setOpenNew}
          newPost={newPost}
        />
      </div>
    </>
  );
}

export default App;
