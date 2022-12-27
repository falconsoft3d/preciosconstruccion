import ContactData from '../src/components/ContactData'
import BaseLayout from '../src/components/Layout/BaseLayout'

export default function Home() {
  return (
      <BaseLayout>
          <h1 className="h3 mb-4 text-gray-800">Home</h1>
          <p>
          El <strong>APU</strong> análisis de precios unitarios es una técnica utilizada en la construcción para determinar el costo de los materiales, mano de obra y equipo necesarios para llevar a cabo un proyecto de construcción. Esto se hace mediante la evaluación detallada de cada elemento del proyecto y la determinación de su costo individual.</p>

          <p>El análisis de precios unitarios es esencial para la toma de decisiones en la construcción, ya que permite a los contratistas y propietarios conocer el costo total del proyecto y ajustar el presupuesto en consecuencia. También es útil para comparar diferentes opciones de diseño y materiales y elegir la mejor opción de acuerdo a los costos y beneficios.</p>

          <p>Para llevar a cabo un análisis de precios unitarios, se necesita una lista detallada de todos los elementos que se incluirán en el proyecto, incluyendo materiales, mano de obra y equipo. Luego, se deben obtener cotizaciones de proveedores y contratistas locales para cada elemento. Es importante asegurarse de que las cotizaciones sean precisas y actualizadas para obtener una idea precisa del costo total del proyecto.</p>

          <p>Una vez que se tienen todas las cotizaciones, se pueden calcular los precios unitarios de cada elemento del proyecto dividiendo su costo total por la cantidad necesaria. Por ejemplo, si se necesitan 100 metros cúbicos de concreto a un costo total de $1,000, el precio unitario sería de $10 por metro cúbico.</p>

          <p>El análisis de precios unitarios también es útil para controlar los costos durante la ejecución del proyecto. Al tener una lista detallada de los costos esperados de cada elemento, es más fácil identificar cualquier desviación o aumento inesperado de los costos y tomar medidas para corregirlo.</p>

          <p>En resumen, el análisis de precios unitarios es una herramienta esencial en la construcción para determinar el costo total de un proyecto y tomar decisiones informadas sobre el diseño y los materiales a utilizar. También es útil para controlar los costos durante la ejecución del proyecto y asegurar que se mantengan dentro del presupuesto.</p>
          
          <ContactData/>
           
      </BaseLayout>
  )
}
