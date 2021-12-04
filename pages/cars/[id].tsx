import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Static Generation (SSG)

export const getStaticProps: GetStaticProps = async context => {
  const req = await fetch(
    `http://localhost:3000/${context.params.id}.json`,
  );
  const data = await req.json();

  return {
    props: { car: data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  const paths = data.map((car: string) => ({
    params: { id: car },
  }));

  return {
    paths,
    fallback: false,
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
