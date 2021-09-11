import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de vendas</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5>Todas as vendas</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5>Todas as vendas</h5>
          <DonutChart />
        </div>
      </div>

      <div className="py-3">Detalhes das vendas</div>

      <DataTable />
    </div>
    </>
  );
}

export default App;
