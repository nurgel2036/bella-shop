import React from 'react'
import './ColorChanger.scss'
import {IoMdSettings} from 'react-icons/io'

export default function ColorChanger() {
    const [boolean,setBoolean] = React.useState(false)

    const ToggleMenuColor = () => {
        setBoolean(!boolean )
    }

  return (
    <div className={boolean ? 'out-CH-fixed right-CH' : 'out-CH-fixed'}>  
      <button onClick={ToggleMenuColor}><IoMdSettings/></button>

      <div className='content-CH'>
        <h1>Settings</h1>
        <p>Predefined Colors</p>
        <ul>
            <li id='li1'></li>
            <li id='li2'></li>
            <li id='li3'></li>
            <li id='li4'></li>
            <li id='li5'></li>
            <li id='li6'></li>
        </ul>
      </div>
    </div>
  )
}
