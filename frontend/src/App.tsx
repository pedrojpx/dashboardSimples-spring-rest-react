import DataTable from "components/DataTable";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary">Olá mundo!</h1>
      <DataTable />
    </div>
    </>
  );
}

export default App;
