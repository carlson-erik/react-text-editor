import { ReactEditor } from "slate-react";
import { Editor, Element, Transforms, Range, Path } from "slate";
import isUrl from "is-url";

import { GraniteEditor, CustomElement, LinkInlineElement } from "../types";
import { getElementPath, getElementNode } from "./";

const isInlineActive = (editor: GraniteEditor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && n.type === "link",
  });
  return !!link;
};

const getContainer = (editor: GraniteEditor): CustomElement | null => {
  if (!isInlineActive(editor)) return null;
  const parentPath = getContainerPath(editor);
  if (!parentPath) return null;
  return getElementNode(editor, parentPath);
};

const getContainerPath = (editor: GraniteEditor): Path | null => {
  if (!isInlineActive(editor)) return null;
  const path = getElementPath(editor);
  if (!path) return null;
  path.pop();
  return path;
};

const getContainerParent = (editor: GraniteEditor): CustomElement | null => {
  if (!isInlineActive(editor)) return null;
  const containerParentPath = getContainerParentPath(editor);
  if (!containerParentPath) return null;
  return getElementNode(editor, containerParentPath);
};

const getContainerParentPath = (editor: GraniteEditor): Path | null => {
  if (!isInlineActive(editor)) return null;
  const containerPath = getContainerPath(editor);
  if (!containerPath || containerPath.length === 1) return null;
  containerPath.pop();
  return containerPath;
};

const updateLink = (editor: GraniteEditor, url: string) => {
  const elementPath = getElementPath(editor);
  if (isLinkActive(editor) && elementPath) {
    Transforms.setNodes(editor, { url }, { at: elementPath });
    ReactEditor.focus(editor);
  }
};

const insertLink = (editor: GraniteEditor, url: string, linkLabel?: string) => {
  if (!isLinkActive(editor)) {
    const link: LinkInlineElement = {
      type: "link",
      url,
      children:
        linkLabel && linkLabel !== "" ? [{ text: linkLabel }] : [{ text: url }],
    };
    Transforms.insertNodes(editor, link);
    ReactEditor.focus(editor);
  }
};

const isLinkActive = (editor: GraniteEditor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
  });
  return !!link;
};

const wrapLink = (editor: GraniteEditor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link: LinkInlineElement = {
    type: "link",
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};

const unwrapLink = (editor: GraniteEditor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
  });
};

const withInlines = (editor: GraniteEditor) => {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = (element: Element) => {
    return ["link"].includes(element.type) || isInline(element);
  };

  editor.insertText = (text: string) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data: DataTransfer) => {
    const text = data.getData("text/plain");
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export {
  withInlines,
  getContainer,
  getContainerPath,
  getContainerParent,
  getContainerParentPath,
  isInlineActive,
  isLinkActive,
  insertLink,
  updateLink,
};
