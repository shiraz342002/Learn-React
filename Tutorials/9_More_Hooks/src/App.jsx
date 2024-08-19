// App.js
import React from 'react';
import { ThemeProvider } from './components/UseContext/ThemeContext.jsx';
import ThemedComponent from './components/UseContext/ThemedComponent.jsx';
import UseEffectHook from './components/UseEffect/UseEffect.jsx';
import UseRefHook from './components/UseRef/UseRef.jsx';
import FactorialCalculator from './components/UseMemo/UseMemo.jsx';
import WithoutMemoFactorialCalculator from './components/UseMemo/WithoutUseMemo.jsx';
import ParentComponent from './components/UseCallback/UseCallback.jsx';

const App = () => {
  return (
    <>
    {/* Use Context Hook
    <ThemeProvider>
       <div>
         <h1>Welcome to the Theme App</h1>
         <ThemedComponent />
       </div>
     </ThemeProvider> */}

      {/* UseEffect Hook */}
      {/* <UseEffectHook/> */}

      {/* UseRefHook */}
      {/* <UseRefHook/> */}

      {/* UseMemo */}
      {/* <FactorialCalculator/> */}
      {/* <WithoutMemoFactorialCalculator/> */}

      {/* UseCallback */} 
      <ParentComponent/>
    </>
  );
};

export default App;
