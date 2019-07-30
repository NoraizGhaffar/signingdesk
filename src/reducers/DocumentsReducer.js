import { NotificationManager } from "react-notifications";

import {
  CREATE_DOCUMENTS,
  CREATE_DOCUMENT_SUCCESS,
  CREATE_DOCUMENT_FAILURE,
  UPDATE_DOCUMENTS,
  UPDATE_DOCUMENT_SUCCESS,
  UPDATE_DOCUMENT_FAILURE,
  GET_DOCUMENTS,
  GET_DOCUMENTS_SUCCESS,
  GET_DOCUMENTS_FAILURE,
  SEARCH_DOCUMENTS,
  SELECTED_FOLDER,
  EDIT_FOLDER_NAME,
  EDIT_FOLDER_NAME_SUCCESS,
  DELETE_FOLDER,
  DELETE_FOLDER_SUCCESS,
  MOVE_DOCUMENTS,
  MOVE_DOCUMENTS_SUCCESS,
  MOVE_DOCUMENTS_FAILURE,
  ADD_NEW_FOLDER,
  ADD_NEW_FOLDER_SUCCESS
} from "Actions/types";

const INITIAL_STATE = {
  documents: null,
  selectedFolder: null,
  folderLevel: [],
  searchedDocuments: null
};

function searchFolders(folder, searchVal) {
  if (!folder || folder.length == 0) return;

  var filteredObjs = folder.filter((obj) => {
    return obj.documents.some(doc => {
      return (
        doc.name.toLowerCase().indexOf(searchVal) != -1 ||
        doc.description.toLowerCase().indexOf(searchVal) != -1
      );
    }).length != 0;
  });
}

function findSelectedFolderObj(arr, folderId) {
  var folder;
  for (var i = 0; i < arr.length; i++) {
    folder = arr[i].subFolders.find(sf => sf.id === folderId);
    if (folder) return folder;
  }
}

function setSelectedFolder(state, folderId, levelUp) {
  if (levelUp && state.folderLevel.length) {
    return {
      ...state,
      selectedFolder: state.folderLevel.pop()
    }
  } else if (levelUp == false) {
    return {
      ...state,
      folderLevel: state.folderLevel.concat(state.selectedFolder),
      selectedFolder: state.selectedFolder.children.find(sf => sf.id === folderId)
    }
  } else {
    return { ...state }
  }
}

function addNewFolder(list, parentFolderId, newFolderId, newFolderName) {
  return list.map(folder => {
    if (folder.id === parentFolderId) {
      folder.children = [...folder.children, {
        id: newFolderId,
        name: newFolderName,
        status: 0,
        documents: [],
        children: []
      }]
    } else if (folder.children && folder.children.length > 0) {
      folder.children = addNewFolder(folder.children, parentFolderId, newFolderId, newFolderName)
    }

    return folder;
  });
}

function deleteFolder(list, folderId) {
  return list.filter(folder => {
    if (folder.children && folder.children.length > 0) {
      folder.children = deleteFolder(folder.children, folderId);
    }
    return folder.id != folderId;
  });
}

function renameInFolderObj(obj, folderId, name) {
  if (obj.id != folderId) return { ...obj };
  return {
    ...obj,
    name
  }
}

function renameInFoldersList(list, folderId, name) {
  return list.map(folder => {
    const folderExists = folder.id == folderId;
    if (folderExists) {
      folder = renameInFolderObj(folder, folderId, name);
    } else if (folder.children.length > 0) {
      folder.children = renameInFoldersList(folder.children, folderId, name);
    }
    return folder;
  });
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_DOCUMENTS:
      return { ...state, loading: true };

    case CREATE_DOCUMENT_SUCCESS:
      NotificationManager.success("Document created successfully");
      var newDocument = JSON.parse(action.payload.config.data);
      newDocument.id = action.payload.data.documentID;
      return {
        ...state,
        documents: newDocument
      };
    case GET_DOCUMENTS:
      return { ...state, documents: null };
    case CREATE_DOCUMENT_FAILURE:
      NotificationManager.error("Document creation failed");
      return {
        ...state,
        documents: null,
        selectedFolder: null,
        folderLevel: [],
        searchedDocuments: null
      };

    case UPDATE_DOCUMENTS:
      return { ...state, loading: true };

    case UPDATE_DOCUMENT_SUCCESS:
      NotificationManager.success("Document updated successfully");
      return { ...state, loading: false, doc: action.payload };

    case UPDATE_DOCUMENT_FAILURE:
      NotificationManager.error("Document updated fail");

      return {
        ...state,
        documents: null,
        selectedFolder: null,
        folderLevel: [],
        searchedDocuments: null
      }

    case GET_DOCUMENTS_SUCCESS: {
      const docs = action.payload;
      return {
        ...state,
        documents: docs,
        selectedFolder: docs && docs.length > 0 ? docs[0] : docs,
        folderLevel: [],
        searchedDocuments: null
      };
    }
    case GET_DOCUMENTS_FAILURE:
      return {
        ...state,
        documents: null,
        selectedFolder: null,
        folderLevel: [],
        searchedDocuments: null
      };

    case SEARCH_DOCUMENTS: {
      return {
        ...state,
        searchedDocuments: state.documents
      }
    }
    case SELECTED_FOLDER: {
      return setSelectedFolder(state, action.payload.folderId, action.payload.levelUp || false);
    }
    case EDIT_FOLDER_NAME: {
      return {
        ...state
      }
    }
    case EDIT_FOLDER_NAME_SUCCESS: {
      return {
        ...state,
        selectedFolder: state.selectedFolder.id == action.payload.folderId ? { ...state.selectedFolder, name: action.payload.name } : state.selectedFolder,
        folderLevel: renameInFoldersList(state.folderLevel, action.payload.folderId, action.payload.name),
        documents: renameInFoldersList(state.documents, action.payload.folderId, action.payload.name)
      }
    }
    case MOVE_DOCUMENTS: {
      return { ...state }
    }
    case CREATE_DOCUMENT_SUCCESS: {
      NotificationManager.success("Documents Moved successfully");
    }
    case CREATE_DOCUMENT_FAILURE: {
      NotificationManager.error("Documents Not Moved successfully");

    }
    case DELETE_FOLDER: {
      return {
        ...state
      }
    }
    case DELETE_FOLDER_SUCCESS: {
      return {
        ...state,
        selectedFolder: deleteFolder([state.selectedFolder], action.payload.folderId)[0],
        documents: deleteFolder(state.documents, action.payload.folderId)
      }
    }
    case ADD_NEW_FOLDER: {
      return {
        ...state
      }
    }
    case ADD_NEW_FOLDER_SUCCESS: {
      return {
        ...state,
        documents: addNewFolder(state.documents, action.payload.parentFoldersID, action.payload.id, action.payload.Name)
      }
    }
    default:
      return { ...state };
  }
};
