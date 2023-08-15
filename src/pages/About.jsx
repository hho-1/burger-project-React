import React from 'react'
import bannerYeni from '../assets/banneryeni.jpg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${bannerYeni})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkimizda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium pariatur, obcaecati sed perspiciatis nostrum quae ad dolor voluptatum rem corrupti porro, unde sunt aperiam ullam mollitia fugit labore tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit dolorem necessitatibus recusandae cum dolorum aperiam quis iste, rem accusamus labore provident ratione ducimus libero aspernatur facilis illum nihil ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in ea! Assumenda ducimus nesciunt, fugit harum, natus totam ea voluptates quisquam fugiat sit quia rerum, fuga excepturi laborum distinctio recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut est sunt nihil quis repellendus consequatur, vero placeat sint recusandae doloremque perferendis neque quae delectus, illum iste excepturi mollitia sed et? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore illum cumque, necessitatibus dolore architecto illo, minima minus incidunt reiciendis tempora neque ex voluptatibus alias corporis voluptas earum error laborum.</p>

      </div>
    </div>
  )
}

export default About