let currentMovie;

// challenge 1
// fetch request
fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(data =>{
    // console.log(data)
    data.forEach(movie => renderMoviesToNav(movie))
    renderDetails(data[0])
})

function renderMoviesToNav(movie){
    // create image element for each movie returned
    const image = document.createElement('img')
    image.src = movie.image
    // add elements to movie list
    const movie_list = document.querySelector("#movie-list")
    // challenge 3 add event listener to movie item in nav bar
    image.addEventListener("click", () =>{renderDetails(movie)})
    movie_list.append(image)
}
const watchNotification = document.querySelector("#watched")

// function to render details, this function will replace existing text 
function renderDetails(movie){
    currentMovie = movie
    // query selectors for title, year released, description, and amount of blood
    const title = document.querySelector("#title")
    const year = document.querySelector("#year-released")
    const description = document.querySelector("#description")
    const blood = document.querySelector("#amount")
    // const watched = movie.watched

    // challenge 3.5 figure out how to change the watch/unwatched button based on the movie watched attributed
    if (movie.watched === true){
        watchNotification.textContent = "Watched"
    }else {
        watchNotification.textContent = "Unwatched"
    }
    // watched === true ? watchNotification.textContent = "Watched" : watchNotification.textContent = "Unwatched"
    // update the above 
    title.textContent = movie.title
    year.textContent = movie.release_year
    description.textContent = movie.description
    blood.textContent = movie.blood_amount
    console.log(movie)
}

watchNotification.addEventListener('click', () => {
    currentMovie.watched = !currentMovie.watched
    renderDetails(currentMovie)
})

function sumTwoNumbers(num1, num2){
    return num1 + num2
}

function subtractTwoNumbers(num1, num2){
    return num1 - num2
}
function multiplyTwoNumbers(num1, num2){
    return num1 * num2
}
// create our dialog ref 
const dialogRef = useRef(null);

// function to open the dialog
const handleShowDialog = () => {
    dialogRef.current.showModal();
};
// function to close the dialog
function onClose() {
    dialogRef.current.close();
}

//   start of our dialog box
                // <dialog ref={dialogRef} className="favDialog">
                //     <button className='cancel-btn-wrap' onClick={onClose}>
                //         <img className='cancel-btn' src='/src/images/cancel.png'/>
                //     </button>
                //     <div className='post-name'>
                //         <h1>{users.name}</h1>
                //     </div>
                //     <form className='post-form' onSubmit={handleSubmit}>
                //         <textarea className='post-textarea' onChange={handleContentChange} placeholder='Write your post' />
                //         <button onClick={onClose} type='submit' className="submit-btn">
                //             Submit
                //         </button>
                //     </form>
                // </dialog>
                // // dialog box ends here
                // <div className='post-title-list'>
                // {/* button to open dialog box */}
                // <div className="post-title" onClick={handleShowDialog}>
                //     <h5>What fuels your ✨sparkle✨ today?</h5>
                // </div>
                // <div className='post-list'>
                //     <p className='post-p' >{postList}</p>
                // </div>
                // </div>
