import { useState } from 'react'

import { Button } from './components/Button'
import { Input } from './components/Input'
import { Otp } from './components/Otp'
// import { Input } from 'postcss'

function App() {

  return (

    < div className='h-screen bg-blue-800'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <Input type={Text} placeholder={"username"} />
      <Button> Sign In</Button> */}
      <Otp />
    </div>
  )
}

export default App
