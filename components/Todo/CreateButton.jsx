'use client'
import React from 'react'
import useModalStore from '@/store/modalStore';

function CreateButton() {
    const openModal = useModalStore((state) => state.openModal === 'create' ? state.closeModal : state.openCreateModal);

    return (
        <span className='flex items-center gap-2'>
            <h2 className='text-[#191100] text-sm font-mono'>Yeni Oluştur!</h2>
            <span onClick={openModal} className='flex items-center material-symbols-outlined justify-center bg-[#ffae00] hover:bg-[#e69d00] cursor-pointer transition-all shadow-xs text-[#ffe7b3] rounded-lg p-2'>add</span>
        </span>
    )
}

export default CreateButton