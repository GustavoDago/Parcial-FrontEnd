import { useState } from 'react'
import './App.css'
import Card from './components/Card'



function App() {

  const [grupo, setGrupo] = useState("");
  const [album, setAlbum] = useState("");
  const [single, setSingle] = useState('')

  const onChangeGrupo = (e) => setGrupo(e.target.value);
  const onChangeAlbum = (e) => setAlbum(e.target.value);
  const onChangeSingle = (e) => setSingle(e.target.value)

  const manejador = (event) => {
    event.preventDefault()
    if (grupo.trim().length > 2 && album.length > 5) {
      setShow(true)
      setErr(false)
    } else {
      setErr(true)
    }
  }

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  return (
    <div className="App">
      <h1>Tecno de los '90</h1>
      <form onSubmit={manejador}>
        <div>
          <label>Ingrese nombre del grupo</label>
          <input type="text" placeholder='ingrese nombre del grupo' value={grupo} onChange={onChangeGrupo} />
          <label>Mejor Disco</label>
          <input type="text" value={album} onChange={onChangeAlbum} />
          <label>Mejor Single</label>
          <input type="text" value={single} onChange={onChangeSingle} />
        </div>
        <button type='submit'>Enviar</button>
        {err && 'Por favor chequea que la información sea correcta'}
      </form>
      {show && <Card nombreGrupo={grupo} mejorDisco={album} mejorSingle={single} />}
    </div>
  )
}

export default App
