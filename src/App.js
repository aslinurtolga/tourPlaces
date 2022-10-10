import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Card";
import data from "./helper/data";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <div className="main">
        {data.map((item) => (
          <Cards
            key={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
