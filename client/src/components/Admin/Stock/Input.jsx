import React,{useState} from 'react'

function Input() {
    const [available, setAvailable] = useState(true);
  function handleInput(e) {
    console.log("hola")
  }
    return (
        <div>
             <td>
        <input
          type="checkbox"
          checked={!available}
          onChange={e => {
            setAvailable(!available);
          }}
        />
      </td>
      <input type="text" disabled={available} onChange={e => handleInput(e)} />
        </div>
    )
}

export default Input;
