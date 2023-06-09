import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function About() {
  const { data, error } = useSWR("/api/about", fetcher);
  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="a page that describes who I am and my interests"
        />
      </Head>
      <h1>About me</h1>
      <p>
        Hi there, my name is{" "}
        <Link href="https://linkedin.com/in/abdulrehman-ahmad-76b9a0223">
          {data.name}
        </Link>
      </p>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </div>
  );
}
