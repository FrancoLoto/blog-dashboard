import store from './store';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from 'hocs/routes/Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Marketing Agencia | Dashboard</title>
        <meta name="description" content="La mejor agencia de marketing del mundo"/> 
        <meta name="keywords" content='agencia de marketing, marketing digital'/>
        <meta name="robots" content='all'/>
        <link rel="canonical" href="https://www.marketing.com/"/>
        <meta name="author" content="Marketing"/>
        <meta name="publisher" content="Franco Loto"/>

        {/* Social Media Tags */}
        <meta property='og:title' content='Marketing Agencia'/>
        <meta property='og:description' content='La mejor agencia de marketing del mundo'/>
        <meta property='og:url' content='https://www.marketing.com/'/>
        <meta property='og:image' content='https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg'/>

        <meta name="twitter:title" content='Marketing Agencia' />
        <meta
            name="twitter:decription"
            description='La mejor agencia de marketing del mundo'
        />
        <meta name="twitter:image" content="https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>

      </Helmet>

      <Provider store={store}>

        <Router>
          <AnimatedRoutes/>
        
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
