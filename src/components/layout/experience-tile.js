import React,  { useState } from 'react'
import Img from "gatsby-image"
import Modal from 'react-modal'
import { navigate } from "gatsby"

Modal.setAppElement(`#___gatsby`);


//<div style={{padding: `5px 0px`}}>
//<div className="project-title" style={projectTitle}>{props.title}</div>
//<div className="project-category" style={projectCategory}>{props.category}</div>
//</div>

function ExperienceTile(props) {
  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="project" style={container} >
      {/* <div style={tileLink} onClick={openModal}> */}
      <div style={tileLink}>
        <div className="project-image" style={projectImage}>
          <Img fluid={props.image.childImageSharp.fluid} />
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
      >
        <div
          css={{
            display: `flex`,
            alignItems: `center`,
            justifyItems: `center`,
            margin: `auto`,
            width: `50%`,
          }} 
        >
          <h2>{props.title}</h2>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </Modal>
    </div>
  )
}

const container = {
  width: "75%",
  margin: "auto"
}

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "550px",
    margin: "32px auto",
    padding: 0,
    border: 0,
    color: "#81B29A",
    backgroundColor: "#3D405B",
    textAlign: 'center',
    textDecoration: 'none'
  },
};

const tileLink = {
  display: 'block',
  color: '#3D405B',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: 'california-dealership',
}

const projectImage = {
  //padding: `0.2rem 0.2rem`,
  width: "100%",
}

const projectTitle = {
  fontSize: '1.75rem',
  
}

const projectCategory = {
  fontSize: '1rem',
}

export default ExperienceTile