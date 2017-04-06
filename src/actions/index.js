export function selectBook(book){
  //selectBook is an action creator, it needs to return an actions
  //an object with atype property
  return{
    type:'BOOK_SELECTED',
    payload: book
  }
}
