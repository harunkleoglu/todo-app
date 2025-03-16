import { postAPI } from "@/services/fetchAPI";
import useModalStore from "@/store/modalStore";

export default function TodoItem({ data }) {
  const openEditModal = useModalStore((state) => state.openEditModal);

  const onDelete = () => {
    postAPI('/Delete', { id: data.id }).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  return (
    <div className="bg-[#ffe7b3] flex flex-col p-5 gap-2 rounded-md shadow-sm">
      <div className="flex justify-between items-start w-full">
        <h3 className="font-mono text-sm text-[#191100] max-w-3/4">{data.title}</h3>
        {data.completed ? (
          <span className="bg-green-500 text-xs text-white px-2 py-1 rounded-md font-mono shadow-sm">Tamamlandı</span>
        ) : (
          <span className="bg-yellow-500 text-xs text-white px-2 py-1 rounded-md font-mono shadow-sm">Bekliyor</span>
        )}
      </div>
      <div className="flex justify-between items-center w-full">
        <small className="font-mono text-[#cc8b00]">{new Date(data.createdAt).toLocaleString()}</small>
        <div className="flex gap-2">
          <span
            onClick={() => openEditModal(data)}
            className="material-symbols-outlined bg-[#ffae00] hover:bg-[#e69d00] text-[#ffe7b3] cursor-pointer p-1 rounded-md"
          >
            edit
          </span>
          <span
            onClick={onDelete}
            className="material-symbols-outlined bg-red-300 hover:bg-red-400 text-red-900 cursor-pointer p-1 rounded-md"
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
