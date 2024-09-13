import { Icon as ClientIcon } from '@/components/icons/client';
import { Icon as ServerIcon } from '@/components/icons/server';

import './page.css';

const Home = (): JSX.Element => {
  return (
    <section className="main">
      <h1 className="text">NextJS starter template</h1>

      <h2>Concepts</h2>

      <p>This starter template makes use of the following things:</p>
      <ol>
        <li>NextJS as React Framework with App router.</li>
        <li>
          Built-in icon generator with server & client icons.{' '}
          <a href="#icons">See here</a>
        </li>
        <li>
          PostCSS, with extra features: mixins, functions & custom media queries
        </li>
        <li>
          ESLint, prettier & typescript to make sure the code quality is always
          up to standards.
        </li>
        <li>
          Husky with precommit hooks to make sure the committed code
          doesn&apos;t contain any unformatted files. Keeping the consistency
          up.
        </li>
      </ol>

      <h3>Long text:</h3>
      <p className="text">
        This text is very long and will eventually be clamped by x amount of
        line. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
        ducimus, iusto quos quo suscipit minima eius eligendi dolorum ipsa,
        placeat doloribus quas assumenda consequatur nostrum deserunt dolores
        tenetur! Corrupti, cum! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Esse ducimus, iusto quos quo suscipit minima eius
        eligendi dolorum ipsa, placeat doloribus quas assumenda consequatur
        nostrum deserunt dolores tenetur! Corrupti, cum!
      </p>

      <h2>Available icons, inspect them to see the difference.</h2>

      <div className="container" id="icons">
        <ServerIcon name="arrow" size={24} />
        <ClientIcon name="arrow" size={24} viewBox="0 0 32 32" />
      </div>

      <p>
        The reason client icons are not loaded inline is that they will clog up
        the bundle size unnecessarily. Even if all the icons are used, using a
        spritesheet is more efficient for icons that will not change color.
        Serverside rendered icons are loaded inline because they are only
        imported on the server.
      </p>
    </section>
  );
};

export default Home;
