import React from "react";
import ReactModal from "react-modal";
import * as Icons from "./Icons";
import { Modal } from "./Modal";

interface IProps extends ReactModal.Props {
  url: string;
  closeModal: () => void;
  onChangeUrl: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveLink: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemoveLink: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function LinkModal(props: IProps) {
    const {
        url,
        closeModal,
        onChangeUrl,
        onSaveLink,
        onRemoveLink,
        ...rest
    } = props;
    return (
        <Modal {...rest}>
        <h2 className="modal-title">Edit link</h2>
        <button className="modal-close absolute top-[8px] right-[8px] flex items-center justify-center w-[32px] h-[32px] border-0 bg-transparent cursor-pointer p-2 rounded-full hover:bg-gray-800 duration-200 transition ease-in-out" type="button" onClick={closeModal}>
            <Icons.X />
        </button>
        <input
            className="modal-input mb-[16px] w-full font-bold block text-sm px-3 py-2.5 mt-2 bg-white border-2 border-gray-400 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0 transition duration-200 ease-in-out"
            autoFocus
            value={url}
            onChange={onChangeUrl}
        />
        <div className="modal-buttons">
            <button className="button-remove duration-200 w-[80px] transition ease-in-out bg-gray-700 flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block px-4 py-[7px] font-medium rounded-full text-[14px]" type="button" onClick={onRemoveLink}>
            Remove
            </button>
            <button className="button-save duration-200 w-[80px] transition ease-in-out bg-[#612CCC] flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block px-4 py-[7px] font-medium rounded-full text-[14px]" type="button" onClick={onSaveLink}>
            Save
            </button>
        </div>
        </Modal>
    );
}
