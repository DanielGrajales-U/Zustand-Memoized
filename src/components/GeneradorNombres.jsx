import { useMemo } from 'react';
import { userStore } from '../store/configUser';
import { MemoizedButton } from './Button';
import useUser from '../hooks/useUser';

function GeneradorNombres({ names }) {
  const { user } = userStore();

  const getName = useUser(names)

  return (
    <div>
      <h1>Memorizacion de React con useMemo y useCallback</h1>
      {useMemo(() => {
        console.log('Render de Nombre');

        return <h2>Nombre generado: {user}</h2>;
      }, [user])}
      <MemoizedButton click={getName} label={'Change User'}/>
    </div>
  );
}

export default GeneradorNombres;
