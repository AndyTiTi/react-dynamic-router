import { useContext } from 'react'
import AppContext from '../store'
import { useState } from 'react';

export default function Add () {
  const { list, setList } = useContext(AppContext);
  const [text, setText] = useState('')
  const handleSave = () => {
    // 保存逻辑
    setList([...list, {
      id: Math.floor(Math.random() * 100),
      text
    }])
  }
  return (
    <ul>
      <li><input type="text" onChange={e => setText(e.target.value)} /></li>
      <li><button onClick={handleSave}>保存</button></li>
    </ul>
  )
}
