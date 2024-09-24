import GeneradorNombres from "./components/GeneradorNombres"

export default function App() {
  const names = [
    'Daniel',
    'Luis'
  ]
  
  return (
    <div>
      <GeneradorNombres names={names}/>
    </div>
  )
}
