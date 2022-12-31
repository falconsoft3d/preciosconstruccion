import BaseLayout from '../../src/components/Layout/BaseLayout'

export default function Apus({apus}) {

  return (
      <BaseLayout>


<h1 className="h3 mb-2 text-gray-800">APUs España</h1>
<p className="mb-4">Analisis precios unitarios españa.</p>


<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Apus España</h6>
    </div>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>UOM</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                  {
                     apus.map((item, index) => {
                          // filtrer by type
                          if (item.type === "2") {                
                          return (
                            <tr key={index}>
                              <td>{item.code}</td>
                              <td>{item.name}</td>
                              <td>{item.uom_id}</td>
                              <td>{item.price}</td>
                            </tr>)
                           }
                        }
                      )}
                </tbody>
            </table>
        </div>
    </div>
</div>


      </BaseLayout>
  )
}

 // path : http://localhost:3000/api/apus-spain
export async function getServerSideProps() { 
  const path = "http://localhost:3000/api/apus-spain";
  const res = await fetch(path);
  const apus = await res.json();
  // console.log("data:", data);
  
  return { 
          props: { 
                  apus 
              } 
          };
}