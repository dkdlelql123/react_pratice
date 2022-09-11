import './App.css'; 
import Index  from './feature/Index';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {    
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Index/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
