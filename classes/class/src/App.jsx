import DisplayCar from "./DisplayCar.jsx"

function App() {

  const Cars = [
    {name : "vantage", model: 2019},
    {name : "civic", model: 2020},
    {name : "corolla", model: 2021},
    {name : "mustang", model: 2022},
    ];

  
    return (
      <div>
      <h1>Car List</h1>
      {Cars.map((item, index) =>
      <DisplayCar
        key = {index}
        name = {item.name}
        model = {item.model}
      />
      )}
      </div>
    )

}

export default App
