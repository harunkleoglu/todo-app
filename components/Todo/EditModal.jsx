'use client'
import React, { useState, useEffect } from 'react';
import useModalStore from '@/store/modalStore';
import { postAPI } from '@/services/fetchAPI';

function EditModal() {
    const openModal = useModalStore((state) => state.openModal);
    const selectedTodo = useModalStore((state) => state.selectedTodo);
    const closeModal = useModalStore((state) => state.closeModal);

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (selectedTodo) {
            setTitle(selectedTodo.title);
            setCompleted(selectedTodo.completed);
        }
    }, [selectedTodo]);

    if (openModal !== 'edit') return null;

    const handleEdit = async () => {
        try {
            postAPI('/Update', { id: selectedTodo.id, title, completed }).then((res) => {
                console.log(res);
            });
            window.location.reload();
        } catch (error) {
            console.error("Todo güncellenirken hata:", error);
        }
    };

    return (
        <div className='fixed inset-0'>
            <div className='flex w-full h-full items-center justify-center'>
                <div className='flex relative flex-col justify-center p-10 gap-3 rounded-lg bg-[#ffd780] shadow-xl border-2'>
                    <h1 className='font-mono text-lg font-semibold'>To-do Güncelle</h1>
                    <div className='flex flex-col gap-2 items-start'>
                        <label htmlFor='edit-title-input' className='font-mono text-sm'>
                            Yapılacak:
                        </label>
                        <input
                            id='edit-title-input'
                            className='px-2 py-1 bg-white rounded-md'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <label htmlFor='edit-completed-input' className='font-mono text-sm'>
                            Tamamlanma Durumu:
                        </label>
                        <input
                            id='edit-completed-input'
                            type='checkbox'
                            className='px-2 py-1 bg-white rounded-md'
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                        />
                    </div>
                    <button
                        onClick={handleEdit}
                        className='bg-[#ffae00] hover:bg-[#e69d00] font-mono py-1 px-2 rounded-md w-full cursor-pointer'
                    >
                        Güncelle
                    </button>
                    <span
                        onClick={closeModal}
                        className="absolute material-symbols-outlined right-0 top-0 m-2 p-1 rounded-md shadow-sm bg-red-300 text-red-900 hover:bg-red-400 cursor-pointer"
                    >
                        close
                    </span>
                </div>
            </div>
        </div>
    );
}

export default EditModal;
