import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <section className="ml-5 mt-3 flex flex-row items-center space-x-2 space-y-2">
      <h2 className="text-5xl font-bold">Home</h2>
      <Topics />
    </section>
  );
};

export default Home;
