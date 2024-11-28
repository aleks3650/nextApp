import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          promptopia is a new open-source AI prompting tool for modern world to
          discover, create and share creatie prompts
        </p>
        <Feed />
      </section>
    </div>
  );
};

export default Home;