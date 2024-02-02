import './App.css';

function App(props) {
  console.log(props)
  let imgData = props.data
  return (
    <div><h1>Kalvium gallery</h1>
    <div className="row">{
      imgData.map((image)=>{
        return (
          <div className="column" key={image.id}>
            <img src={image.img} />
          </div>
        )
      })
    }</div></div>
  )
}

export default App;
