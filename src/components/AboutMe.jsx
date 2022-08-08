import React from 'react'

const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="profile-img" src="https://source.unsplash.com/random" alt="random_photo" />
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About me</h1>
                <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta corrupti commodi amet provident sint nemo. Maiores nam, aperiam voluptate sint quis accusantium ipsa hic porro natus quasi facilis ab sit, modi incidunt vel ducimus iure quia eligendi. Dolorem, libero earum amet laudantium unde fuga mollitia cum soluta consequatur ipsa.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe