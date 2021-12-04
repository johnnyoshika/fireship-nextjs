import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Car: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Hello {id}</div>;
};

export default Car;
