import {createContext, useContext} from 'react';
import {useLocalObservable} from 'mobx-react-lite';

export function createStoresContext(createStores) {
  const StoresContext = createContext(null);

  const StoresProvider = ({ children, initialState }) => {
    const stores = useLocalObservable(() => createStores(initialState));
    return (
      <StoresContext.Provider value={stores}>
        {children}
      </StoresContext.Provider>
    );
  };

  const useStores = () => {
    const stores = useContext(StoresContext);
    if (!stores) {
      throw new Error('useStores must be used within a StoresProvider');
    }
    return stores;
  };

  return { StoresProvider, useStores };
}

export function withStores(mapStoresToProps) {
  return (Component) => (props) => {
    const stores = mapStoresToProps(useStores());
    return <Component {...props} {...stores} />;
  };
}