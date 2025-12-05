import React from 'react'
import Card from './component/Card.jsx';

const App = () => {
  return (
    <div className='parent'>
      <Card user="Chandrakant Sahoo" img="https://images.unsplash.com/photo-1764767168158-9f05d34e3881?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Jyotiraj  Sutar" img="https://images.unsplash.com/photo-1764351451091-f373a4a21119?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Gautam Nath" img='https://images.unsplash.com/photo-1712025853040-c3bd38131c7b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="Chitta ranjan Swain" img="https://images.unsplash.com/photo-1763908161084-6be74390daf2?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App