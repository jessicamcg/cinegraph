import './App.css'
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FilmProvider } from './utils/filmContext';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignupForm from "./pages/SignupForm";
import LoginForm from './pages/LoginForm';
import Dashboard from './components/Dashboard';
import "./styles/page-content.css"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  
      <ApolloProvider client={client}>
      <FilmProvider>
      <Router>
        <CssBaseline />
        <Navbar />
        
        <Box className="page-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Box>
      </Router>
      </FilmProvider>
      </ApolloProvider>
  );
}

export default App;
