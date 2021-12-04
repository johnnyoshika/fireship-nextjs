import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Server-Side Rendering (SSR)

export const getServerSideProps: GetServerSideProps =
  async context => {
    const req = await fetch(
      `http://localhost:3000/${context.params?.id}.json`,
    );
    const data = await req.json();

    return {
      props: { car: data },
    };
  };

const Car = ({ car }: { car: any }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{car.color}</title>
      </Head>
      <h1>Hello {id}</h1>
      <img src={car.image} alt={car.id} />
    </>
  );
};

export default Car;
