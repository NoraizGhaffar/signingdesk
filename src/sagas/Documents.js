import {
  createDocumentFailure,
  createDocumentSuccess,
  deleteDocumentsSuccess,
  duplicateDocumentsSuccess,
  getDocumentsFailure,
  getDocumentsSuccess,
  moveDocumentsSuccess,
  updateDocumentFailure,
  updateDocumentSuccess,
  editFolderNameSuccess,
  deleteFolderSuccess,
  addNewFolderSuccess
} from "Actions";
import {
  CREATE_DOCUMENT,
  DELETE_DOCUMENTS,
  DUPLICATE_DOCUMENTS,
  GET_DOCUMENTS,
  MOVE_DOCUMENTS,
  UPDATE_DOCUMENT,
  EDIT_FOLDER_NAME,
  DELETE_FOLDER,
  ADD_NEW_FOLDER
} from "Actions/types";
import API from 'Api';
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import DocumentUpload, { callBackCreateDocument } from "../routes/documents/components/DocumentUpload";
import UserDocumentsList from "../container/documents/UserDocumentsList";


const response = {
  data: [
    {
      "id": -1,
      "name": "Documents",
      "documents": [{
        "id": "77dd-4f59-9499-b118146279fc",
        "name": "My Upload Document Archive",
        "description": "My uploaded document description Archive",
        "hasAttachment": false,
        "hasFormFields": false,
        "status": 0,
        "verificationResult": null,
        "locked": false,
        "isDeleted": false,
        tags: [
          'One',
          'two',
          'three'
        ],
        "lastAccessedOn": "2019-07-15T16:47:38",
        "documentFiles": [
          {
            "id": "9608dc92-edb6-408c-8abe-a3882ea0d5c0",
            "size": 3028.0,
            "pages": 2,
            "width": 612.0,
            "height": 792.0,
            "path": "C:\\Users\\mkhan\\Documents\\signingdesk\\Code\\SigningDesk\\SigningDesk.Service\\data\\85e39610-6532-4fd6-b245-ec8d22f6374e\\a3dcfb1c-77dd-4f59-9499-b118146279fc\\9608dc92-edb6-408c-8abe-a3882ea0d5c0\\Smile More.pdf",
            "storageMedia": 0
          }
        ]
      }],
      "children": [{
        "id": "4640b911-33c3-a60a-6cea0244ea5f",
        "name": "Archive",
        "status": 0,
        "documents": [{
          "id": "77dd-4f59-9499-b118146279fc",
          "name": "My Upload Document Archive",
          "description": "My uploaded document description Archive",
          "hasAttachment": false,
          "hasFormFields": false,
          "status": 0,
          "verificationResult": null,
          "locked": false,
          "isDeleted": false,
          tags: [
            'One',
            'two',
            'three'
          ],
          "lastAccessedOn": "2019-07-15T16:47:38",
          "documentFiles": [
            {
              "id": "9608dc92-edb6-408c-8abe-a3882ea0d5c0",
              "size": 3028.0,
              "pages": 2,
              "width": 612.0,
              "height": 792.0,
              "path": "C:\\Users\\mkhan\\Documents\\signingdesk\\Code\\SigningDesk\\SigningDesk.Service\\data\\85e39610-6532-4fd6-b245-ec8d22f6374e\\a3dcfb1c-77dd-4f59-9499-b118146279fc\\9608dc92-edb6-408c-8abe-a3882ea0d5c0\\Smile More.pdf",
              "storageMedia": 0
            }
          ]
        }],
        "children": [
          {
            "id": "A-33c3-a60a-6cea0244ea5f",
            "name": "Sub Folder Archive",
            "status": 0,
            "documents": [{
              "id": "A-77dd-4f59-9499-b118146279fc",
              "name": "My Upload Document Archive Sub",
              "description": "My uploaded document description Archive",
              "hasAttachment": false,
              "hasFormFields": false,
              "status": 0,
              tags: [
                'One',
                'two',
                'three'
              ],
              "verificationResult": null,
              "locked": false,
              "isDeleted": false,
              "lastAccessedOn": "2019-07-15T16:47:38",
              "documentFiles": [
                {
                  "id": "9608dc92-edb6-408c-8abe-a3882ea0d5c0",
                  "size": 3028.0,
                  "pages": 2,
                  "width": 612.0,
                  "height": 792.0,
                  "path": "C:\\Users\\mkhan\\Documents\\signingdesk\\Code\\SigningDesk\\SigningDesk.Service\\data\\85e39610-6532-4fd6-b245-ec8d22f6374e\\a3dcfb1c-77dd-4f59-9499-b118146279fc\\9608dc92-edb6-408c-8abe-a3882ea0d5c0\\Smile More.pdf",
                  "storageMedia": 0
                }
              ]
            }],
            "children": [
              {
                "id": "AAA-33c3-6cea0244ea5f",
                "name": "Sub Folder 1111",
                "status": 0,
                "documents": [{
                  "id": "A-77dd-4f59-9499-b118146279fc",
                  "name": "My Upload Document Archive Sub",
                  "description": "My uploaded document description Archive",
                  "hasAttachment": false,
                  "hasFormFields": false,
                  "status": 0,
                  tags: [
                    'One',
                    'two',
                    'three'
                  ],
                  "verificationResult": null,
                  "locked": false,
                  "isDeleted": false,
                  "lastAccessedOn": "2019-07-15T16:47:38",
                  "documentFiles": [
                    {
                      "id": "9608dc92-edb6-408c-8abe-a3882ea0d5c0",
                      "size": 3028.0,
                      "pages": 2,
                      "width": 612.0,
                      "height": 792.0,
                      "path": "C:\\Users\\mkhan\\Documents\\signingdesk\\Code\\SigningDesk\\SigningDesk.Service\\data\\85e39610-6532-4fd6-b245-ec8d22f6374e\\a3dcfb1c-77dd-4f59-9499-b118146279fc\\9608dc92-edb6-408c-8abe-a3882ea0d5c0\\Smile More.pdf",
                      "storageMedia": 0
                    }
                  ]
                }],
                "children": [

                ]
              }

            ]
          },
          {
            "id": "AB-33c3-a60a-6cea0244ea5f",
            "name": "Sub Folder Archive2",
            "status": 0,
            "documents": [{
              "id": "A-77dd-4f59-9499-b118146279fc",
              "name": "My Upload Document Archive Sub",
              "description": "My uploaded document description Archive",
              "hasAttachment": false,
              "hasFormFields": false,
              "status": 0,
              tags: [
                'One',
                'two',
                'three'
              ],
              "verificationResult": null,
              "locked": false,
              "isDeleted": false,
              "lastAccessedOn": "2019-07-15T16:47:38",
              "documentFiles": [
                {
                  "id": "9608dc92-edb6-408c-8abe-a3882ea0d5c0",
                  "size": 3028.0,
                  "pages": 2,
                  "width": 612.0,
                  "height": 792.0,
                  "path": "C:\\Users\\mkhan\\Documents\\signingdesk\\Code\\SigningDesk\\SigningDesk.Service\\data\\85e39610-6532-4fd6-b245-ec8d22f6374e\\a3dcfb1c-77dd-4f59-9499-b118146279fc\\9608dc92-edb6-408c-8abe-a3882ea0d5c0\\Smile More.pdf",
                  "storageMedia": 0
                }
              ]
            }],
            "children": [

            ]
          }
        ]
      },
      {
        "id": "8e53a257-01d8-4286-af2c-773649b81c0e",
        "name": "Inbox",
        "status": 0,
        "documents": [
          {
            "id": "a3dcfb1c-77dd-4f59-9499-b118146279fc",
            "name": "My Upload Document",
            "description": "My uploaded document description",
            "hasAttachment": false,
            "hasFormFields": false,
            "status": 0,
            tags: [
              'One',
              'two',
              'three'
            ],
            "verificationResult": null,
            "locked": false,
            "isDeleted": false,
            "lastAccessedOn": "2019-07-15T16:47:38",
            "documentFiles": [
              {
                "id": "9608dc92-edb6-408c-8abe-a3882ea0d5c0",
                "size": 3028.0,
                "pages": 2,
                "width": 612.0,
                "height": 792.0,
                "path": "C:\\Users\\mkhan\\Documents\\signingdesk\\Code\\SigningDesk\\SigningDesk.Service\\data\\85e39610-6532-4fd6-b245-ec8d22f6374e\\a3dcfb1c-77dd-4f59-9499-b118146279fc\\9608dc92-edb6-408c-8abe-a3882ea0d5c0\\Smile More.pdf",
                "storageMedia": 0
              }
            ]
          },
          {
            "id": "a3dcfb1c-77dd-4f59-9499",
            "name": "My Upload Document2",
            "description": "My uploaded document description2",
            "hasAttachment": false,
            "hasFormFields": false,
            "status": 1,
            tags: [
              'One',
              'two',
              'three'
            ],
            "verificationResult": null,
            "locked": false,
            "isDeleted": false,
            "lastAccessedOn": "2019-07-15T16:47:38",
            "documentFiles": [
              {
                "id": "9608dc92-edb6-408c-8abe-a3882ea0d5c0",
                "size": 3028.0,
                "pages": 2,
                "width": 612.0,
                "height": 792.0,
                "path": "C:\\Users\\mkhan\\Documents\\signingdesk\\Code\\SigningDesk\\SigningDesk.Service\\data\\85e39610-6532-4fd6-b245-ec8d22f6374e\\a3dcfb1c-77dd-4f59-9499-b118146279fc\\9608dc92-edb6-408c-8abe-a3882ea0d5c0\\Smile More.pdf",
                "storageMedia": 0
              }
            ]
          }
        ],
        "children": []
      }
      ]
    }]
}
  ;

const documents = {
  data: [
    {
      id: 1,
      title: 'ReSharper_DefaultKeymap_VSscheme',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: '10 minutes ago'
    },
    {
      id: 2,
      title: 'DegreeAttestationChallanForm',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 05, 2019'
    },
    {
      id: 3,
      title: 'Comsat MSPM - Challan Form',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 15, 2019'
    },
    {
      id: 4,
      title: 'Eat_That_Frog',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 11, 2019'
    },
    {
      id: 5,
      title: 'CourseCompletionCertificate',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'June 21, 2019'
    },
    {
      id: 11,
      title: 'ReSharper_DefaultKeymap_VSscheme',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: '10 minutes ago'
    },
    {
      id: 12,
      title: 'DegreeAttestationChallanForm',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 05, 2019'
    },
    {
      id: 13,
      title: 'Comsat MSPM - Challan Form',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 15, 2019'
    },
    {
      id: 14,
      title: 'Eat_That_Frog',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 11, 2019'
    },
    {
      id: 15,
      title: 'CourseCompletionCertificate',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'June 21, 2019'
    },
    {
      id: 111,
      title: 'ReSharper_DefaultKeymap_VSscheme',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: '10 minutes ago'
    },
    {
      id: 112,
      title: 'DegreeAttestationChallanForm',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 05, 2019'
    },
    {
      id: 113,
      title: 'Comsat MSPM - Challan Form',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 15, 2019'
    },
    {
      id: 114,
      title: 'Eat_That_Frog',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 11, 2019'
    },
    {
      id: 115,
      title: 'CourseCompletionCertificate',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'June 21, 2019'
    },
    {
      id: 211,
      title: 'ReSharper_DefaultKeymap_VSscheme',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: '10 minutes ago'
    },
    {
      id: 212,
      title: 'DegreeAttestationChallanForm',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 05, 2019'
    },
    {
      id: 213,
      title: 'Comsat MSPM - Challan Form',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 15, 2019'
    },
    {
      id: 214,
      title: 'Eat_That_Frog',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'July 11, 2019'
    },
    {
      id: 215,
      title: 'CourseCompletionCertificate',
      status: 'Draft',
      tags: [
        'One',
        'two',
        'three'
      ],
      grandTotal: '$4.00',
      approversRecepients: [
        'Muhammad Qasim',
        'Hassan Javed'
      ],
      created: 'June 21, 2019'
    }
  ]
}

const getDocumentsRequest = async () => {
  //return documents; 
  //return response;
  // return await Promise.resolve(response.data);
  // console.log('Documents response:', response);

  var response = await API.get('documents/all', { id: 1 });

  return response;
};

const createDocumentRequest = async doc => {
  var response = await API.post('documents/create', doc.payload);
  return response;
};

const updateDocumentRequest = async doc => {
  var response = await API.put('documents/update', doc.payload);
  return response;
};

const addNewFolderRequest = async folderInfo => {
  return await API.post('folders/create', folderInfo);
}

const deleteDocumentsRequest = () => {
  return true; // response;
};

const moveDocumentsRequest = () => {
  return true; // response;
};

const duplicateDocumentsRequest = () => {
  return true; // response;
};

const editFolderNameRequest = (payload) => {
  return true; // response;
};

const deleteFolderRequest = async (payload) => {
  return await API.delete(`folders/${payload.folderId}`)
};

function* addNewFolderOnServer({ payload }) {
  try {
    const response = yield call(addNewFolderRequest, payload);
    if (response.status == 200) {
      const obj = { ...payload, id: response.data.folderID };
      yield put(addNewFolderSuccess(obj));
    }
  } catch (error) {
    console.log('addNewFolderOnServer error: ', error);
  }
}

function* getDocumentsFromServer() {
  try {
    const response = yield call(getDocumentsRequest);
    yield put(getDocumentsSuccess(response));
  } catch (error) {
    yield put(getDocumentsFailure(error));
  }
}

function* createDocumentOnServer(doc) {
  try {
    const response = yield call(createDocumentRequest, doc);
    if (response.status == 200) {
      doc.payload.id = response.data.documentID;
      yield put(createDocumentSuccess(response));
      doc.handleClose(function () {
        return "";
      })
    } else {
      yield put(createDocumentFailure(error));
    }
  } catch (error) {
    //console.log('createDocumentOnServer error: ', error);
    yield put(createDocumentFailure(error));

  }
}

function* updateDocumentOnServer(doc) {
  try {
    const response = yield call(updateDocumentRequest, doc);
    yield put(updateDocumentSuccess(response));

    if(doc.onCloseDlg){
      doc.onCloseDlg(function(){
        return "";
      });
    }
  } catch (error) {
    console.log('createDocumentOnServer error: ', error);
    yield put(updateDocumentFailure(error));

  }
}

function* deleteDocumentsFromServer() {
  try {
    const response = yield call(deleteDocumentsRequest);
    yield put(deleteDocumentsSuccess(response));
  } catch (error) {
    console.log('deleteDocumentsFromServer error:', error);
    // yield put(getDocumentsFailure(error));
  }
}
function* moveDocumentsOnServer() {
  try {
    const response = yield call(moveDocumentsRequest);
    yield put(moveDocumentsSuccess(response));
  } catch (error) {
    console.log('moveDocumentsOnServer error:', error);
    // yield put(getDocumentsFailure(error));
  }
}
function* duplicateDocumentsOnServer() {
  try {
    const response = yield call(duplicateDocumentsRequest);
    yield put(duplicateDocumentsSuccess(response));
  } catch (error) {
    // yield put(getDocumentsFailure(error));
  }
}

function* editFolderNameOnServer({ payload }) {
  try {
    const response = yield call(editFolderNameRequest);
    //if (response.status == 200) {
    yield put(editFolderNameSuccess(payload));
    //} else {
    //  console.log('editFolderNameOnServer error:', response);
    //}
  } catch (error) {
    console.log('editFolderNameOnServer error:', error);
  }
}

function* deleteFolderOnServer({ payload }) {
  try {
    const response = yield call(deleteFolderRequest, payload);
    if (response.status == 200) {
      yield put(deleteFolderSuccess(payload));
    } else {
      console.log('deleteFolderOnServer error:', response);
    }
  } catch (error) {
    console.log('deleteFolderOnServer error:', error);
  }
}

// watcher
export function* createDocument() {
  yield takeEvery(CREATE_DOCUMENT, createDocumentOnServer);
}
export function* updateDocument() {
  yield takeEvery(UPDATE_DOCUMENT, updateDocumentOnServer);
}
export function* getDocuments() {
  yield takeEvery(GET_DOCUMENTS, getDocumentsFromServer);
}
export function* deleteDocuments() {
  yield takeEvery(DELETE_DOCUMENTS, deleteDocumentsFromServer);
}
export function* moveDocuments() {
  yield takeEvery(MOVE_DOCUMENTS, moveDocumentsOnServer);
}
export function* duplicateDocuments() {
  yield takeEvery(DUPLICATE_DOCUMENTS, duplicateDocumentsOnServer);
}
export function* editFolderName() {
  yield takeEvery(EDIT_FOLDER_NAME, editFolderNameOnServer);
}
export function* deleteFolder() {
  yield takeEvery(DELETE_FOLDER, deleteFolderOnServer);
}
export function* addNewFolder() {
  yield takeEvery(ADD_NEW_FOLDER, addNewFolderOnServer);
}

export default function* rootSaga() {
  yield all([
    fork(getDocuments),
    fork(createDocument),
    fork(updateDocument),
    fork(deleteDocuments),
    fork(moveDocuments),
    fork(duplicateDocuments),
    fork(editFolderName),
    fork(deleteFolder),
    fork(addNewFolder)
  ]);
}
