import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <section className="ml-5 mt-3 flex justify-between">
      <h2 className="text-5xl font-bold">Home</h2>
      <div className="mr-3 w-auto rounded-md border bg-gray-200 p-5">
        <Topics />
      </div>
    </section>
  );
};

export default Home;
