import Layout from "hocs/layout/Layout";
import { Helmet } from "react-helmet-async";

function Dashboard(){
    return(
        <Layout>
            <Helmet>
                    <title>MG Seguridad Privada | Inicio</title>
                    <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/"/>
                    <meta name="author" content="Seguridad"/>
                    <meta name="publisher" content="Franco Loto"/>
            </Helmet>
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-4">
                <h3 className="text-3xl font-medium leading-6 text-gray-900">Inicio</h3>
                <p className="mt-3 text-lg text-gray-500">
                    Página de inicio 
                </p>
                </div>
            </div>
            </div>
        </Layout>
    )
}
export default Dashboard