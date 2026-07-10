import { useState } from "react";
import Navbar from "./components/Navbar";
import TopBtns from "./components/TopBtns";
import UserList from "./features/users/components/UserList";
import CreateDialogForm from "./components/CreateDialogForm";

function App() {
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto text-center my-12 ">
        <div className="mx-4 space space-y-10">
          <TopBtns setIsOpenCreate={setIsOpenCreate} />
          <CreateDialogForm
            isOpenCreate={isOpenCreate}
            setIsOpenCreate={setIsOpenCreate}
          />
          <UserList />
        </div>
      </main>
    </>
  );
}

export default App;
