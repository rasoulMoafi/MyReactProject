import { useState,useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";


const getDataFromLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

function App() {

  const [books, setBooks] = useState(getDataFromLS());
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");

  console.log(books)
  // console.log(title,author,number)


  const handleSubmit = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      number,
    }
    setBooks ([...books,book])
    return {
      title : "",
      author : "",
      number : ""
    }
  }

  const deleteBook = (number) => {
    const filterBooks = books.filter((element) => {
      return element.number !== number;
    })

    setBooks(filterBooks)
  }

  useEffect(() => {
    localStorage.setItem('books',JSON.stringify(books))
  }, [books]);
  return (
    <div className="container">
      <div className="wrapper my-5">
        <h1 className="text-center">لیست کتاب ها</h1>
        <div className="row my-5">
          <div className="form-container col-xl-4 mx-auto my-5">

            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">عنوان</label>
                <input type="text" className="form-control my-2" required onChange={(e) => setTitle(e.target.value)}></input>
              </div>
              <div className="form-group">
                <label htmlFor="">نویسنده</label>
                <input type="text" className="form-control my-2" required onChange={(e) => setAuthor(e.target.value)}></input>
              </div>
              <div className="form-group">
                <label htmlFor="">شماره</label>
                <input type="text" className="form-control my-2" required onChange={(e) => setNumber(e.target.value)}></input>
              </div>
              <div className="form-group">
                <button className="btn btn-success w-100 my-3" type="submit">ارسال</button>
              </div>
            </form>
          </div>

          <div className="view-container col-xl-5 mx-auto my-5">
            {
              books.length > 0 && 
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>شماره#</th>
                        <th>عنوان</th>
                        <th>نویسنده</th>
                        <th>حذف</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        books.map((book) => {
                          const { title, author, number } = book;
                          return (
                        <tr key={number}>
                          <td>{number}</td>
                          <td>{title}</td>
                          <td>{author}</td>
                          <td className="delete-btn text-danger" onClick={() => deleteBook(number) }> <FaTrashAlt/> </td>
                            </tr>
                          )
                      })
                      }
                    </tbody>
                  </table>
                  <button className="btn btn-danger w-100" onClick={() => setBooks([]) }>حذف همه</button>
                </div>
              </>
            }
            {
              books.length <1 && <div className="text-center mt-2">کتابی توی کتابخونه نداریم</div>
            }
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
