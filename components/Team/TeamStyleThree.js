import React, { Component } from 'react';
import photos from '../../public/data/photos';
import Masonry from "react-responsive-masonry"


const images = [
    "/images/yourteam/Aniisah.PNG",
    "/images/yourteam/Arvin.PNG",
    "/images/yourteam/Asvin.PNG",
    "/images/yourteam/AupetitN.PNG",
    "/images/yourteam/AwotarV.PNG",
    "/images/yourteam/Badulla-MaudarbocusA.PNG",
    "/images/yourteam/BernardA.PNG",
    "/images/yourteam/Bilall.PNG",
    "/images/yourteam/Dixia.PNG",
    "/images/yourteam/Djouneid.PNG",
    "/images/yourteam/DoomunO.PNG",
    "/images/yourteam/Etienne.PNG",
    "/images/yourteam/Frederic.PNG",
    "/images/yourteam/Gowtami.PNG",
    "/images/yourteam/Jessica.PNG",
    "/images/yourteam/JogeeahM.PNG",
    "/images/yourteam/Jonathan.PNG",
    "/images/yourteam/Kamal.PNG",
    "/images/yourteam/KilitoL.PNG",
    "/images/yourteam/LadeuilJC.PNG",
    "/images/yourteam/Laila.PNG",
    "/images/yourteam/LaunayJ.PNG",
    "/images/yourteam/Madiihah.PNG",
    "/images/yourteam/Mahalaxmi.PNG",
    "/images/yourteam/ManishGanoo.PNG",
    "/images/yourteam/Manish.PNG",
    "/images/yourteam/Nassim.JPG.PNG",
    "/images/yourteam/Aniisah.PNG",
    "/images/yourteam/Arvin.PNG",
    "/images/yourteam/Asvin.PNG",
    "/images/yourteam/AupetitN.PNG",
    "/images/yourteam/AwotarV.PNG",
    "/images/yourteam/Badulla-MaudarbocusA.PNG",
    "/images/yourteam/BernardA.PNG",
    "/images/yourteam/Bilall.PNG",
    "/images/yourteam/Dixia.PNG",
    "/images/yourteam/Djouneid.PNG",
    "/images/yourteam/DoomunO.PNG",
    "/images/yourteam/Etienne.PNG",
    "/images/yourteam/Frederic.PNG",
    "/images/yourteam/Gowtami.PNG",
    "/images/yourteam/Jessica.PNG",
    "/images/yourteam/JogeeahM.PNG",
    "/images/yourteam/Jonathan.PNG",
    "/images/yourteam/Kamal.PNG",
    "/images/yourteam/KilitoL.PNG",
    "/images/yourteam/LadeuilJC.PNG",
    "/images/yourteam/Laila.PNG",
    "/images/yourteam/LaunayJ.PNG",
    "/images/yourteam/Madiihah.PNG",
    "/images/yourteam/Mahalaxmi.PNG",
    "/images/yourteam/ManishGanoo.PNG",
    "/images/yourteam/Manish.PNG",
    "/images/yourteam/Nassim.JPG.PNG",
    "/images/yourteam/Aniisah.PNG",
    "/images/yourteam/Arvin.PNG",
    "/images/yourteam/Asvin.PNG",
    "/images/yourteam/AupetitN.PNG",
    "/images/yourteam/AwotarV.PNG",
    "/images/yourteam/Badulla-MaudarbocusA.PNG",
    "/images/yourteam/BernardA.PNG",
    "/images/yourteam/Bilall.PNG",
    "/images/yourteam/Dixia.PNG",
    "/images/yourteam/Djouneid.PNG",
    "/images/yourteam/DoomunO.PNG",
    "/images/yourteam/Etienne.PNG",
    "/images/yourteam/Frederic.PNG",
    "/images/yourteam/Gowtami.PNG",
    "/images/yourteam/Jessica.PNG",
    "/images/yourteam/JogeeahM.PNG",
    "/images/yourteam/Jonathan.PNG",
    "/images/yourteam/Kamal.PNG",
    "/images/yourteam/KilitoL.PNG",
    "/images/yourteam/LadeuilJC.PNG",
    "/images/yourteam/Laila.PNG",
    "/images/yourteam/LaunayJ.PNG",
    "/images/yourteam/Madiihah.PNG",
    "/images/yourteam/Mahalaxmi.PNG",
    "/images/yourteam/ManishGanoo.PNG",
    "/images/yourteam/Manish.PNG",
    "/images/yourteam/Nassim.JPG.PNG",
    "/images/yourteam/Aniisah.PNG",
    "/images/yourteam/Arvin.PNG",
    "/images/yourteam/Asvin.PNG",
    "/images/yourteam/AupetitN.PNG",
    "/images/yourteam/AwotarV.PNG",
    "/images/yourteam/Badulla-MaudarbocusA.PNG",
    "/images/yourteam/BernardA.PNG",
    "/images/yourteam/Bilall.PNG",
    "/images/yourteam/Dixia.PNG",
    "/images/yourteam/Djouneid.PNG",
    "/images/yourteam/DoomunO.PNG",
    // "/images/yourteam/Etienne.PNG",
    "/images/yourteam/Frederic.PNG",
    "/images/yourteam/Gowtami.PNG",
    "/images/yourteam/Jessica.PNG",
    "/images/yourteam/JogeeahM.PNG",
    // "/images/yourteam/Jonathan.PNG",
    "/images/yourteam/Kamal.PNG",
    "/images/yourteam/KilitoL.PNG",
    "/images/yourteam/LadeuilJC.PNG",
    "/images/yourteam/Laila.PNG",
    "/images/yourteam/LaunayJ.PNG",
    "/images/yourteam/Madiihah.PNG",
    "/images/yourteam/Mahalaxmi.PNG",
    "/images/yourteam/ManishGanoo.PNG",
  ];


class TeamStyleThree extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <div className="">
                    <div className="container">
                        <div className="section-title">
                            <h2>YOur Expert Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    {/* <div>
                        <div className='xxx'> 10 </div>
                        <div className='myGallery'>
                            { photos && photos.map((photo,index) => {
                                return (
                                    <div class='photo-container'>
                                        <div className="team-photo" style={{backgroundImage: `url(${(photo.src)})`}}></div>
                                    </div>
                                    
                                );
                            })
                            }
                        </div>
                    </div> */}

                <div className='number-ten'>
                    
                    <div className='mason'>
                        <Masonry columnsCount={18} gutter={4}>
                            {images.map((image) => (
                                <img src={image} />
                            ))}
                        </Masonry>
                    </div>
                    <div className='num'>
                        10 years
                    </div>
                </div>
                


                    </div>
                </div>
            </>
        );
    }
}

export default TeamStyleThree;