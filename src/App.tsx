import Navbar from "./components/Navbar";
import TopButtons from "./components/TopButtons";
import UserList from "./features/users/components/UserList";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto text-center my-12 ">
        <div className="mx-4 space space-y-10">
          <TopButtons />
          <UserList />
        </div>
      </main>
    </>
  );
}

export default App;
