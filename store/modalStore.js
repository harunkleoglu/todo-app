import { create } from "zustand";

const useModalStore = create((set) => ({
  openModal: null,
  selectedTodo: null,
  
  openCreateModal: () => set({ openModal: "create", selectedTodo: null }),
  openEditModal: (todo) => set({ openModal: "edit", selectedTodo: todo }),
  closeModal: () => set({ openModal: null, selectedTodo: null }),
}));

export default useModalStore;
