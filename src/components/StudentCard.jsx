import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard'
import image from './assets/hero.jpeg'

function App() {
  const studentsList = [
    {
      id: 1,
      nom: 'ranimayed',
      email: 'ranimayed40@gmail.com',
      tel: '92801605',
      filiere: 'Génie logiciel et systéme information',
      groupe: 'GLSI 0/1',
      ville: 'Mahdia',
      image: image
    },
    {
      id: 2,
      nom: 'Mohamed Ali',
      email: 'mohamed@gmail.com',
      tel: '55123456',
      filiere: 'Génie logiciel et systéme information',
      groupe: 'GLSI 0/1',
      ville: 'Sousse',
      image: image
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Liste des Étudiants</h1>
      {studentsList.map((st) => (
        <StudentCard key={st.id} etudiant={st} />
      ))}
    </div>
  );
}

export default App