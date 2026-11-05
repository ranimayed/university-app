import { useState } from 'react'
import './App.css'
import  image  from './assets/hero.jpeg'
const etudiant={

  nom:'ranimayed',
  email:'ranimayed40@gmail.com ',
  tel:92001605,
  filiere:'Génie logiciel et systéme information ',
  groupe:'GLSI D/1',
  ville:'Mahdia',
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign:  'center' ,padding: '20px' }}>
      <img
        src={image}
        alt="hero"
        style={{
          width:'90px',
          height:'90px',
          borderRadius:'50%',
          objectFit:'cover',
          border:'2px solid #ccc',
        }}
        />
        
      <center><h1>Fiche etudiant</h1></center><br></br>
      <strong>Nom & Prenom:</strong>{etudiant.nom}<br></br>
      <strong>email:</strong>{etudiant.email}<br></br>
      <strong>telephone:</strong>{etudiant.tel}<br></br>
      <strong>filiere:</strong>{etudiant.filiere}<br></br>
      <strong>Annee d'etude:</strong>{etudiant.annee}<br></br>
      <strong> Groupe:</strong>{etudiant.groupe}<br></br>
      <strong>ville:</strong>{etudiant.ville}<br></br>
       <a href={`mailto:${etudiant.email}`}>
        <button type="submit">contacter</button>
       </a>


    </div>




  )




  
    
          
}

export default App