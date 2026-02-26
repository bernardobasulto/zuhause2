import { useEffect, useState } from 'react';

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-text">VALDIVIA</div>
    </div>
  );
}
