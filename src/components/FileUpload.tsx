"use client"
import { uploadToS3 } from '@/lib/db/s3';
import { Inbox } from 'lucide-react';
import React from 'react'
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"]},
    maxFiles:1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);
      const file = acceptedFiles[0]
      if (file.size > 10 * 1024 * 1024) {
        // filesize bigger than 10 mb
        alert('File size limit exceeded');
        return;
      }

      try {
        const data = await uploadToS3(file)
        console.log('data', data);
        
      } catch (error) {
        console.log(error)
      }

    }
  })
  return (
    <div className='p-2 bg-white rounded-xl'>
      <div {...getRootProps({
        className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
      })}>
        <input {...getInputProps()} />
        <>
          <Inbox className="w-10 h-10 text-gray-950" />
          <p className='mt-2 text-sm text-slate-900'>Please Drop PDF Here</p>
        </>
      </div>
    </div>
  )
}

export default FileUpload;