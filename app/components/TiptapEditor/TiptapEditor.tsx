import React, { useCallback, useState } from "react";
import classNames from "classnames";

import { useEditor, EditorContent, Editor, BubbleMenu } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import History from "@tiptap/extension-history";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";

import content from "./components/content";
import * as Icons from "./components/icons";
import { LinkModal } from "./components/LinkModal";

export function SimpleEditor() {
  const editor = useEditor({
    extensions: [
      Document,
      History,
      Paragraph,
      Text,
      Link.configure({
        openOnClick: false
      }),
      Bold,
      Underline,
      Italic,
      Strike,
      Code,
      BulletList,
      ListItem,
    ],
    content
  }) as Editor;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState<string>("");

  const openModal = useCallback(() => {
    console.log(editor.chain().focus());
    setUrl(editor.getAttributes("link").href);
    setIsOpen(true);
  }, [editor]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setUrl("");
  }, []);

  const saveLink = useCallback(() => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url, target: "_blank" })
        .run();
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
    closeModal();
  }, [editor, url, closeModal]);

  const removeLink = useCallback(() => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    closeModal();
  }, [editor, closeModal]);

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor]);

  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);
  
  if (!editor) {
    return null;
  }

  return (
    <div className="editor mb-[15px] relative w-full rounded-xl shadow-xl bg-gray-800 overflow-auto border border-gray-700 max-h-[200px]">
      <div className="fixed w-[462px] rounded-xl menu bg-gray-900 z-[1] flex items-center gap-[8px] h-[44px] py-0 px-[6px]">
        <button
          className="menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Icons.RotateLeft />
        </button>
        <button
          className="menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Icons.RotateRight />
        </button>
        <div className="w-[1px] bg-gray-800 h-[60%]"></div>
        <button
          className={classNames("menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]", {
            "is-active": editor.isActive("link")
          })}
          onClick={openModal}
        >
          <Icons.Link />
        </button>
        <button
          className={classNames("menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]", {
            "is-active": editor.isActive("bold")
          })}
          onClick={toggleBold}
        >
          <Icons.Bold />
        </button>
        <button
          className={classNames("menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]", {
            "is-active": editor.isActive("underline")
          })}
          onClick={toggleUnderline}
        >
          <Icons.Underline />
        </button>
        <button
          className={classNames("menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]", {
            "is-active": editor.isActive("intalic")
          })}
          onClick={toggleItalic}
        >
          <Icons.Italic />
        </button>
        <button
          className={classNames("menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]", {
            "is-active": editor.isActive("strike")
          })}
          onClick={toggleStrike}
        >
          <Icons.Strikethrough />
        </button>
        <button
          className={classNames("menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]", {
            "is-active": editor.isActive("code")
          })}
          onClick={toggleCode}
        >
          <Icons.Code />
        </button>
        <div className="w-[1px] bg-gray-800 h-[60%] mx-2"></div>
        {editor && (
        <button
          className={classNames(
            "menu-button w-[32px] p-0 hover:bg-gray-700 transition duration-200 ease-in-out rounded-[10px]",
            {
              "is-active": editor.isActive("bulletList"),
            }
          )}
          onClick={toggleBulletList}
        >
          <Icons.BulletList />
        </button>
        )}
      </div>

      <BubbleMenu
        className="bubble-menu-light bg-[#0e2133] flex items-center gap-[8px] p-[8px] rounded-2xl shadow-xl"
        tippyOptions={{ duration: 150 }}
        editor={editor}
        shouldShow={({ editor, view, state, oldState, from, to }) => {
          // only show the bubble menu for links.
          return from === to && editor.isActive("link");
        }}
      >
        <button className="button-save duration-200 w-[60px] transition ease-in-out bg-[#612CCC] flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block p-[3px] font-medium rounded-full text-[12px]" onClick={openModal}>
          Edit
        </button>
        <button className="button-remove button-remove duration-200 w-[70px] transition ease-in-out bg-gray-700 flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block p-[3px] font-medium rounded-full text-[12px]" onClick={removeLink}>
          Remove
        </button>
      </BubbleMenu>

      <EditorContent editor={editor} />

      <LinkModal
        url={url}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Link Modal"
        closeModal={closeModal}
        onChangeUrl={(e) => setUrl(e.target.value)}
        onSaveLink={saveLink}
        onRemoveLink={removeLink}
      />
    </div>
  );
}
