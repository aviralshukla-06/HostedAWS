import { useState } from 'react'

import { Button } from './components/Button'
import { Input } from './components/Input'
// import { Input } from 'postcss'

function App() {

  return (
    < div className='h-screen bg-blue-800'>
      <Input />
      <Button> Sign In</Button>
    </div>
  )
}

export default App
