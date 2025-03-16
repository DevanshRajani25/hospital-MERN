import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="about" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are?</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, quia. Doloremque reiciendis odio amet, expedita modi vel nostrum asperiores quia cum debitis at dolorem, neque optio nulla totam, nemo pariatur. Fugiat reiciendis laborum accusamus, harum facilis facere iure neque corporis aliquid architecto dignissimos molestiae mollitia vitae optio dolorem odit error!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error saepe autem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime voluptatibus architecto soluta doloribus similique quam delectus reprehenderit mollitia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam amet numquam nesciunt labore repudiandae? Repellat, excepturi. Vero non perferendis quod nemo voluptatum maiores, aperiam eveniet quisquam sit, explicabo incidunt cupiditate eligendi debitis doloribus est.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      
    </div>
  )
}

export default Biography
