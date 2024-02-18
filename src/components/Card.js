import react from "react";
import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useEffect } from "react";
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
// import { trusted } from "mongoose";


const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    const [books, setBooks] = useState([]);
    const [liked, setLiked] = useState(false);
    const [count,setCount] = useState()
    console.log(book)

    // useEffect(() => {
    //     // Fetch books from the backend API
    //     axios.get('http://localhost:5000/api/books')
    //         .then(response => setBooks(response.data))
    //         .catch(error => console.error(error));
    // }, []);
    

    // const handleLike = async (bookId) => {
    //     try {
    //         const response = await axios.put(`http://localhost:5000/api/books/${bookId}/like`);
    //         const updatedBooks = books.map(book => {
    //             if (book._id === bookId) {
    //                 return { ...book, likes: response.data.likes };
    //             }
    //             return book;
    //         });
    //         setBooks(updatedBooks);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     console.log("fuck")
    // };

    const handleClick=()=>{
        setLiked(!liked);
    }
    const LikeBook=(book_id)=>{
        
        axios.put('http://localhost:5000/like',{withCredentials:true},{bookId:book_id}).then(()=>{
            console.log("liked")
        }).catch((err)=>{
            console.log("error")
        })
    }
    return (
        <>
            {
                book.map((item) => {
                    console.log(item.id)
                    axios.post('http://localhost:5000/addbook', { withCredentials: true },{bookId:item.id}).then(()=>{
                        console.log("yes baby")
    
                    }).catch((err)=>{
                        console.log("errdffff")
                    })

                    axios.put('http://localhost:5000/getlikes',{withCredentials:true},{bookId:item.id}).then((resp)=>{
                        // setCount(resp.likes.length())
                        // console.log("getting like counts")
                        console.log(resp)
                    }).catch((err)=>{
                        console.log("not getting like counts ")
                    })
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail != undefined && amount != undefined) {
                        return (
                            <>
                                <div className="card" >
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p className="amount" onClick={() => { setShow(true); setItem(item) }}>Read Book</p>
                                        <p className="likebtn">
                                            <AiFillLike className="like" color="white" size="20" onClick={()=>{LikeBook(item.id)}} />
                                            <b>{count}cvccv</b>
                                            {/* {liked ? (<AiFillLike className="like" color="blue" size="20" onClick={handleClick} />) : (<AiFillLike className="like" color="white" size="20" onClick={handleClick} />)} */}
                                        </p>
                                    </div>
                                    
                                   
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                                
                            </>
                        )
                    }

                })
            }

        </>
    )
}
export default Card;