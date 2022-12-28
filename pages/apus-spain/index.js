import { useState } from 'react';
import BaseLayout from '../../src/components/Layout/BaseLayout'

export default function Apus({apus}) {

  return (
      <BaseLayout>


<h1 class="h3 mb-2 text-gray-800">APUs España</h1>
<p class="mb-4">Analisis precios unitarios españa.</p>


<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Apus España</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                          return (
                            <tr key={index}>
                              <td>{item.code}</td>
                              <td>{item.name}</td>
                              <td>{item.uom_id}</td>
                              <td>{item.price}</td>
                            </tr>)
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