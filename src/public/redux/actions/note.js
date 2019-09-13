import axios from 'axios';
import URL from "../URL";
// let URL = 'http://192.168.6.169:5000'
//let URL = 'http://localhost:5000'

/////////////////////////////////////////////

export const getNote = () => {
  return {
    type: 'GET_NOTE',
    payload: axios.get(URL+'/note'),
  };
};

/////////////////////////////////////////////

export const postNote = (data) => {
  return {
    type: "POST_NOTE",
    payload: axios.post(URL+'/note', data,{})
  };
};
/////////////////////////////////////////////

export const deleteNote = (param) =>{
	return{
    type: 'DELETE_NOTE',
		payload: axios.delete(URL +`/note/${param}`)
	}
}
/////////////////////////////////////////////

export const getNote1 = (bookid) => {
  console.log("book id: " + bookid)
  return {
      type: 'GET_NOTE1',
      payload: axios.get(URL +`/note/byCategory/${bookid}`)
  }
}
/////////////////////////////////////////////

export const updateNote = (bookid, data) => {
  return {
      type: 'UPDATE_NOTE',
      payload: axios.patch(URL +`/note/${bookid}`, data)
  }
}