const initialState = {
  ListNote: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const buku = (state = initialState, action) => {
  switch (action.type) {
/////////////////////////////////////////////////////    
  case 'GET_NOTE_PENDING':
    return {
      ...state,
      isLoading: true,
      isFulfilled: false,
      isRejected: false,
    };
  case 'GET_NOTE_REJECTED':
    return {
      ...state,
      isLoading: false,
      isRejected: true,
    };
  case 'GET_NOTE_FULFILLED':
    return {
      ...state,
      isLoading: false,
      isFulfilled: true,
      ListNote: action.payload.data,
    };
/////get limit////////////////////////////////////////////////    
  case 'GET_NOTE_LIMIT_PENDING':
    return {
      ...state,
      isLoading: true,
      isFulfilled: false,
      isRejected: false,
    };
  case 'GET_NOTE_LIMIT_REJECTED':
    return {
      ...state,
      isLoading: false,
      isRejected: true,
    };
  case 'GET_NOTE_LIMIT_FULFILLED':
    return {
      ...state,
      isLoading: false,
      isFulfilled: true,
      ListNote: action.payload.data,
    };
///////////POST////////////////////////////////////////////
    case "POST_NOTE_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
    case "POST_NOTE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_NOTE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        ListNote: action.payload.data
      };
/////////////GET1//////////////////////////////////////////
    case 'GET_NOTE1_PENDING': // in case when loading post data
      return {
        ...state,
        isLoading: true,
        isFulFilled: false,
        isRejected: false
        }
    case 'GET_NOTE1_REJECTED': // in case error network/else
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        }
    case 'GET_NOTE1_FULFILLED': // in case successfuly post data
        return {
            ...state,
            isLoading: false,
            isFulFilled: true,
            ListNote: action.payload.data,
        }
///////////////DELETE////////////////////////////////////////        
      case 'DELETE_NOTE_PENDING': // in case when loading post data
          return {
              ...state,
              isLoading: true,
              isFulFilled: false,
              isRejected: false
          }
      case 'DELETE_NOTE_REJECTED': // in case error network/else
          return {
              ...state,
              isLoading: false,
              isRejected: true,
          }
      case 'DELETE_NOTE_FULFILLED': // in case successfuly post data
          return {
              ...state,
              isLoading: false,
              isFulFilled: true,
              ListNote: [state.ListNote, action.payload.data[0]],
          }
//////////////UPDATE/////////////////////////////////////////          
      case 'UPDATE_NOTE_PENDING': // in case when loading post data
          return {
              ...state,
              isLoading: true,
              isFulFilled: false,
              isRejected: false
          }
      case 'UPDATE_NOTE_REJECTED': // in case error network/else
          return {
              ...state,
              isLoading: false,
              isRejected: true,
          }
      case 'UPDATE_NOTE_FULFILLED': // in case successfuly post data
          return {
              ...state,
              isLoading: false,
              isFulFilled: true,
              ListNote: [state.ListNote, action.payload.data[0]],
          }
    default:
      return state;
  }
};

export default buku;
