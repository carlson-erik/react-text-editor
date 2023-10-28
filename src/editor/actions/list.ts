import { Transforms, Path, Descendant } from "slate";
import {
  getElementPath,
  getElementNode,
  getParentElementNode,
} from "./element";
import {
  ElasticEditor,
  ListElement,
  ListElementType,
  ListItemElement,
} from "../types";
import { focusPath } from "./utils";
import {
  getContainer,
  getContainerParent,
  getContainerPath,
  isInlineActive,
} from "./inline";

const isListElement = (element: Descendant | null): element is ListElement => {
  return element &&
    "type" in element &&
    (element.type === "bulleted-list" || element.type === "ordered-list")
    ? true
    : false;
};

const mergeWithPreviousList = (
  editor: ElasticEditor,
  listPath: Path,
  listItemNode: ListItemElement,
  listNode: ListElement,
  finalFocusPath: Path,
  finalFocusOffset: number
) => {
  // Merge list item with the previous list
  const mergedNode: ListElement = {
    type: listNode.type,
    children: [...listNode.children, listItemNode],
  };
  // Remove old nodes
  Transforms.removeNodes(editor, { at: listPath });
  Transforms.removeNodes(editor, { at: listPath });
  // Insert new node
  Transforms.insertNodes(editor, mergedNode, { at: listPath });
  // Focus correct location in new merged node
  focusPath(
    editor,
    [...listPath, listNode.children.length, ...finalFocusPath],
    finalFocusOffset
  );
};

const mergeWithNextList = (
  editor: ElasticEditor,
  listItemPath: Path,
  listItemNode: ListItemElement,
  listNode: ListElement,
  finalFocusPath: Path,
  finalFocusOffset: number
) => {
  // Merge list item with the following list
  const mergedNode: ListElement = {
    type: listNode.type,
    children: [listItemNode, ...listNode.children],
  };
  // Remove old nodes
  Transforms.removeNodes(editor, { at: listItemPath });
  Transforms.removeNodes(editor, { at: listItemPath });
  // Insert new node
  Transforms.insertNodes(editor, mergedNode, { at: listItemPath });
  // Focus correct location in new merged node
  focusPath(editor, [...listItemPath, 0, ...finalFocusPath], finalFocusOffset);
};

const mergeTwoLists = (
  editor: ElasticEditor,
  currentListItem: ListItemElement,
  prevListPath: Path,
  prevList: ListElement,
  nextList: ListElement,
  finalFocusPath: Path,
  finalFocusOffset: number
) => {
  // Construct node merging previous, current and next nodes
  const mergedNode: ListElement = {
    type: prevList.type,
    children: [...prevList.children, currentListItem, ...nextList.children],
  };
  // Remove old nodes
  Transforms.removeNodes(editor, { at: prevListPath });
  Transforms.removeNodes(editor, { at: prevListPath });
  Transforms.removeNodes(editor, { at: prevListPath });
  // Insert new node
  Transforms.insertNodes(editor, mergedNode, { at: prevListPath });
  // Focus correct location in new merged node
  focusPath(
    editor,
    [...prevListPath, prevList.children.length, ...finalFocusPath],
    finalFocusOffset
  );
};

const wrapListItem = (
  editor: ElasticEditor,
  path: Path,
  node: ListItemElement,
  listType: ListElementType,
  finalFocusPath: Path,
  finalFocusOffset: number
) => {
  // Wrap current list item node with a list node
  const listNode: ListElement = {
    type: listType,
    children: [node],
  };
  Transforms.removeNodes(editor, { at: path });
  Transforms.insertNodes(editor, listNode, { at: path });
  focusPath(editor, [...path, 0, ...finalFocusPath], finalFocusOffset);
};

const indentListItem = (editor: ElasticEditor) => {
  const activeInline = isInlineActive(editor);
  const currentPath = activeInline
    ? getContainerPath(editor)
    : getElementPath(editor);
  const currentNode = activeInline
    ? getContainer(editor)
    : getElementNode(editor);
  const parentNode = activeInline
    ? getContainerParent(editor)
    : getParentElementNode(editor);
  if (
    editor.selection &&
    currentNode &&
    currentNode.type === "list-item" &&
    currentPath &&
    parentNode &&
    isListElement(parentNode)
  ) {
    // can't indent if there is only one item in the list
    if (parentNode.children.length === 1) return;

    // Get the current node's index (for parentNode's children)
    const currentNodeIndex = currentPath[currentPath.length - 1];

    const selectionPath = editor.selection.anchor.path;
    const finalFocusPath = activeInline
      ? selectionPath.slice(selectionPath.length - 2)
      : selectionPath.slice(selectionPath.length - 1);
    const finalfocusOffset = editor.selection.anchor.offset;

    if (
      parentNode.children.length >= 3 &&
      currentNodeIndex > 0 &&
      currentNodeIndex < parentNode.children.length - 1
    ) {
      // Create Path to the node before the current node
      const prevNodePath: Path = [...currentPath];
      prevNodePath[prevNodePath.length - 1] -= 1;

      // Create Path to the node after the current node
      const nextNodePath: Path = [...currentPath];
      nextNodePath[nextNodePath.length - 1] += 1;

      // Get previous and next nodes using new Paths
      const nextNodeItem = getElementNode(editor, nextNodePath);
      const prevNodeItem = getElementNode(editor, prevNodePath);

      if (isListElement(nextNodeItem) && isListElement(prevNodeItem)) {
        mergeTwoLists(
          editor,
          currentNode,
          prevNodePath,
          prevNodeItem,
          nextNodeItem,
          finalFocusPath,
          finalfocusOffset
        );
      } else if (isListElement(nextNodeItem)) {
        mergeWithNextList(
          editor,
          currentPath,
          currentNode,
          nextNodeItem,
          finalFocusPath,
          finalfocusOffset
        );
      } else if (isListElement(prevNodeItem)) {
        mergeWithPreviousList(
          editor,
          prevNodePath,
          currentNode,
          prevNodeItem,
          finalFocusPath,
          finalfocusOffset
        );
      } else {
        wrapListItem(
          editor,
          currentPath,
          currentNode,
          parentNode.type,
          finalFocusPath,
          finalfocusOffset
        );
      }
    } else if (currentNodeIndex === 0) {
      // Create Path to the node after the current node
      const nextNodePath: Path = [...currentPath];
      nextNodePath[nextNodePath.length - 1] += 1;
      // Get next node using new Path
      const nextNodeItem = getElementNode(editor, nextNodePath);

      if (isListElement(nextNodeItem)) {
        mergeWithNextList(
          editor,
          currentPath,
          currentNode,
          nextNodeItem,
          finalFocusPath,
          finalfocusOffset
        );
      } else {
        wrapListItem(
          editor,
          currentPath,
          currentNode,
          parentNode.type,
          finalFocusPath,
          finalfocusOffset
        );
      }
    } else if (currentNodeIndex === parentNode.children.length - 1) {
      // Create Path to the node before the current node
      const prevNodePath: Path = [...currentPath];
      prevNodePath[prevNodePath.length - 1] -= 1;
      // Get previous node using new Paths
      const prevNodeItem = getElementNode(editor, prevNodePath);

      if (isListElement(prevNodeItem)) {
        mergeWithPreviousList(
          editor,
          prevNodePath,
          currentNode,
          prevNodeItem,
          finalFocusPath,
          finalfocusOffset
        );
      } else {
        wrapListItem(
          editor,
          currentPath,
          currentNode,
          parentNode.type,
          finalFocusPath,
          finalfocusOffset
        );
      }
    }
  }
};

const outdentListItem = (editor: ElasticEditor) => {
  const activeInline = isInlineActive(editor);
  const currentPath = activeInline
    ? getContainerPath(editor)
    : getElementPath(editor);
  const currentNode = activeInline
    ? getContainer(editor)
    : getElementNode(editor);
  const parentNode = activeInline
    ? getContainerParent(editor)
    : getParentElementNode(editor);
  if (
    editor.selection &&
    parentNode &&
    isListElement(parentNode) &&
    currentNode &&
    currentPath &&
    currentPath.length > 2
  ) {
    let insertPath = [...currentPath].slice(0, currentPath.length - 1);
    const currentNodeIndex = currentPath[currentPath.length - 1];
    const selectionPath = editor.selection.anchor.path;
    const finalFocusPath = activeInline
      ? selectionPath.slice(selectionPath.length - 2)
      : selectionPath.slice(selectionPath.length - 1);
    const focusOffset = editor.selection.anchor.offset;
    if (parentNode.children.length === 1) {
      /*
       * case: The user unindents the last item in a list. The list item's parent node should be
       *       removed and this list item should be inserted in its place.
       */
      currentPath.pop();
      // Remove old node at currentPath
      Transforms.removeNodes(editor, { at: currentPath });
      // Insert into new location
      Transforms.insertNodes(editor, currentNode, { at: insertPath });
      // Move selection to the newly inserted node
      focusPath(editor, [...insertPath, ...finalFocusPath], focusOffset);
    } else if (
      currentNodeIndex > 0 &&
      currentNodeIndex < parentNode.children.length - 1
    ) {
      /*
       * case: List item is in the middle of a multi-item list and a user unindents. The list should be split
       *       rather than moving the list item below/above the current list.
       */
      // Create lists without the current list item
      const prevList: ListElement = {
        type: parentNode.type,
        children: parentNode.children.slice(0, currentNodeIndex),
      };
      const nextList: ListElement = {
        type: parentNode.type,
        children: parentNode.children.slice(
          currentNodeIndex + 1,
          parentNode.children.length
        ),
      };

      // Removes the whole list
      Transforms.removeNodes(editor, { at: insertPath });

      // Insert all nodes in reverse order
      Transforms.insertNodes(editor, nextList, { at: insertPath });
      Transforms.insertNodes(editor, currentNode, { at: insertPath });
      Transforms.insertNodes(editor, prevList, { at: insertPath });

      insertPath[insertPath.length - 1] += 1;

      focusPath(editor, [...insertPath, ...finalFocusPath], focusOffset);
    } else if (currentNodeIndex === 0) {
      /*
       * case: List item is at the beginning of a multi-item list and a user unindents. The list
       *       show move above the current list.
       */
      // Remove old node at currentPath
      Transforms.removeNodes(editor, { at: currentPath });
      // Insert into new location
      Transforms.insertNodes(editor, currentNode, { at: insertPath });
      // Move selection to the newly inserted node
      focusPath(editor, [...insertPath, ...finalFocusPath], focusOffset);
    } else if (currentNodeIndex === parentNode.children.length - 1) {
      /*
       * case: List item is at the ending of a multi-item list and a user unindents. The list
       *       show move below the current list.
       */
      insertPath[insertPath.length - 1] += 1;
      // Remove old node at currentPath
      Transforms.removeNodes(editor, { at: currentPath });
      // Insert into new location
      Transforms.insertNodes(editor, currentNode, { at: insertPath });
      // Move selection to the newly inserted node
      focusPath(editor, [...insertPath, ...finalFocusPath], focusOffset);
    }
  }
};

const canOutdentListItem = (editor: ElasticEditor): boolean => {
  const currentPath = isInlineActive(editor)
    ? getContainerPath(editor)
    : getElementPath(editor);
  if (currentPath) {
    if (currentPath.length > 2) return true;
  }
  return false;
};

const canIndentListItem = (editor: ElasticEditor): boolean => {
  const activeInline = isInlineActive(editor);
  const currentPath = activeInline
    ? getContainerPath(editor)
    : getElementPath(editor);
  const parentNode = activeInline
    ? getContainerParent(editor)
    : getParentElementNode(editor);
  if (!currentPath) return false;
  const currentNode = getElementNode(editor, currentPath);
  if (
    currentPath &&
    currentNode &&
    currentNode.type === "list-item" &&
    parentNode
  ) {
    const currentNodeIndex = currentPath[currentPath.length - 1];
    const nextNode = parentNode.children[currentNodeIndex + 1];
    /*
     * User can indent in the following cases:
     *   1. list item is in a multi-item list
     *   2. list item isn't the first item in a list
     *   3. list item isn't the list item before a sub-list
     */
    if (
      parentNode.children.length > 1 &&
      currentNodeIndex !== 0 &&
      !(
        currentNodeIndex === 0 &&
        nextNode &&
        "type" in nextNode &&
        isListElement(nextNode)
      )
    ) {
      return true;
    }
  }
  return false;
};

export {
  isListElement,
  indentListItem,
  canOutdentListItem,
  canIndentListItem,
  outdentListItem,
};
