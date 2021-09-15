import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import Modal from './Modal';
import GlobalStyle from './globalStyle';

function Detail() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState();
    const [showModal, setShowModal] = useState(false);
 // const [cards, setCards] = useState(cards)

  // function control modal
  
   const openModal = () => {
      setShowModal(prev => !prev)
   }

    
    useEffect(() =>{
        // Grab the movie from the DB
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                // save the movie data
                setMovie(doc.data());
            } else {
            // redirect to home page
            }
        })
    }, [])

    console.log("Movie is", movie);


    return (
        <Container>
            {movie && (
                <>
            <Background>
                    <img src={movie.backgroundImg} />
                </Background>
            <ImageTitle>
                {/* <img src={movie.titleImg} /> */}
            </ImageTitle>
            <Controls>
                <PlayButton >
                    <img src="/images/play-icon-black.png" />

                    <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>


                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>

                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>          
            </Controls>
            <SubTitle>
                {movie.subTitle}
                </SubTitle>
                <Description>
                {movie.description}
                </Description>

          
               
      
          
        
               



                </>
            )}

           
        </Container>
    )



}

export default Detail


const IconButton = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;


`;


const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
`;


const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`;



const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb (249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }

`;

const TrailerButton = styled(PlayButton)`
    background: rgb (0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;  

`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-type: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;


`;