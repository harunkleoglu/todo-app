'use client'
import React, { useState } from 'react';
import { postAPI } from '@/services/fetchAPI';
import useModalStore from '@/store/modalStore';

function CreateModal() {
    const isModalOpen = useModalStore((state) => state.openModal === 'create');
    const closeModal = useModalStore((state) => state.closeModal);

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleCreate = async () => {
        try {
            const res = await postAPI('/Todo', { title, completed });
            console.log(res);
            window.location.reload();
        } catch (error) {
            console.error("Todo oluşturulurken hata:", error);
        }
    };
    if (!isModalOpen) return null;

    return (
        <div className='fixed inset-0'>
            <div className='flex w-full h-full items-center justify-center'>
                <div className='flex relative flex-col justify-center p-10 gap-3 rounded-lg bg-[#ffd780] shadow-xl border-2'>
                    <h1 className='font-mono text-lg font-semibold'>To-do oluştur</h1>
                    <div className='flex flex-col gap-2 items-start'>
                        <label htmlFor='title-input' className='font-mono text-sm'>
                            Yapılacak:
                        </label>
                        <input
                            id='title-input'
                            className='px-2 py-1 bg-white rounded-md'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <label htmlFor='completed-input' className='font-mono text-sm'>
                            Tamamlanma Durumu:
                        </label>
                        <input
                            id='completed-input'
                            type='checkbox'
                            className='px-2 py-1 bg-white rounded-md'
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                        />
                    </div>
                    <button
                        onClick={handleCreate}
                        className='bg-[#ffae00] hover:bg-[#e69d00] font-mono py-1 px-2 rounded-md w-full cursor-pointer'
                    >
                        Oluştur
                    </button>
                    <span onClick={closeModal} className="absolute right-0 top-0 m-2 p-1 rounded-md shadow-sm bg-red-300 text-red-900 hover:bg-red-400 cursor-pointer material-symbols-outlined">close</span>
                </div>
            </div>
        </div>
    );
}

export default CreateModal;
