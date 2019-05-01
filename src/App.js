import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    clickedBooks: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(booksJSON => {
      this.setState({
        books: booksJSON
      })
    })
  }
  //fetching books setting it to set state

  handleClick = (event, bookObj) => {
    // console.log(event)
    // console.log(bookObj)
    const newBooks = this.state.books.map(book => {
      if (book.id === bookObj.id){
        return {...bookObj}
        // add book to array
      } else {
        return null
        // dont add book to array
      }
    })

    this.setState({
      clickedBooks: newBooks
      //why is newBooks not being added into clickedBOOKs???!
    })

    console.log('Clicked books',this.state.clickedBooks)
  }

  handleRemove = (bookObj) => {

    const index = this.state.books.indexOf(bookObj)
    const newBooks = [...this.state.books]
    newBooks.splice(index,1)

    this.setState({
      clickedBooks: newBooks
    })
    
  }

  handleSubmit = (event, book) =>{
    event.preventDefault()
    console.log('book',book)

    const newBooks = [book, ...this.state.books]
    this.setState({
      books: newBooks
    })
  }

  

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
        <Bookshelf clickedBooks={this.state.clickedBooks} />
      </div>
    );
  }
}

export default App;



// handleClick = (clickedBey) => {
//   console.log('When clicked, the value I get back is?', clickedBey)
//   const newBeys = this.state.beys.map(bey => {
//     if(bey.id === clickedBey.id){
//       return {...bey, favorite: true}
//     } else  {
//       return bey
//     }
//   })
//   this.setState({
//     beys: newBeys
//   })


// }

// handleRemove = (clickedBey) => {
//   const newBeys = this.state.beys.map(bey => {
//     if(bey.id === clickedBey.id){
//       return {...bey, favorite: false}
//     } else  {
//       return bey
//     }
//   })
//   this.setState({
//     beys: newBeys
//   })


// }


// allFavorited = () => {
//     // Through State and find out which one are favorite
//     return this.state.beys.filter(bey => bey.favorite === true)
// }

// render(){
//   return (
//   <div className="container">
//     <BeyContainer handleClick={this.handleClick} beys={this.state.beys}/>
//     <Favorites beef={this.handleRemove} favoritedBeys={this.allFavorited()} />
//   </div>
// );
// }
// };