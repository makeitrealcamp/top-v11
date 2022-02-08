import { useEffect } from 'react';

const useUpdateLogger = (stateVariable) => {
  useEffect(() => {
    console.info('%cLogger:', 'color: green;');
    console.log(`%c${stateVariable}`, 'color: green; background: yellow; font-size: 12px');
  }, [stateVariable]);
}

export default useUpdateLogger;