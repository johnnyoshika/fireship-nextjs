import type { NextPage } from 'next';
import toast from 'react-hot-toast';

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => toast.success('Success')}>
        Success
      </button>
    </div>
  );
};

export default Home;
