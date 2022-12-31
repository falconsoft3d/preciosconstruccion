import BaseLayout from '../../src/components/Layout/BaseLayout'
import Link from 'next/link'

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