import Head from 'next/head';
import { Heading } from 'heading';
import { Button } from 'button';
import { Table } from 'table';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading
          themeOverride={{
            colors: {
              primary: 'blue',
              accent: 'green',
            },
          }}
          styleOverrides={{
            heading: { color: 'red', border: '10px dotted skyblue' },
          }}
        >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>
        <Button
          onClick={() => {
            console.log('clicked button');
          }}
        >
          Click Me
        </Button>
        <Table
          data={{
            headers: ['column 1', 'column 2'],
            rows: [
              ['foo', 'bar'],
              ['foo2', 'bar2'],
            ],
          }}
        />
      </main>
    </div>
  );
}
