export const useModal = (set) => ({
  modalType: "add-task",
  modalIsOpen: false,
  setModalType: (type: string) => set(() => ({ modalType: type })),
  openModal: () => set(() => ({ modalIsOpen: true })),
  closeModal: () => set(() => ({ modalIsOpen: false })),
});
