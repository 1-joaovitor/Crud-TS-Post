import { api } from "../services/api";

export const getCategoriesAll = async (): Promise<any> => {
  try {
    const response = await api.get(`categories`);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const EditCategories = async (data: any): Promise<void> => {
  try {
    await api.put(`categories/${data.id}`, data);
  } catch (error) {
    console.log(error);
  }
};
export const DeleteCategories = async (id: any): Promise<void> => {
  try {
    await api.delete(`categories/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const newCategories = async (data: object): Promise<void> => {
  try {
    await api.post(`categories`, data);
  } catch (error) {
    console.log(error);
  }
};
