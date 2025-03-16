import CreateModal from "@/components/Todo/CreateModal";
import EditModal from "@/components/Todo/EditModal";
import TodoBar from "@/components/Todo/TodoBar";

export default function Home() {
  return (
    <>
    <TodoBar/>
    <CreateModal/>
    <EditModal/>
    </>
  );
}
