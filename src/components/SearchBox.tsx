import { cn } from '@/utils/cn';
import { ExecOptionsWithBufferEncoding } from 'child_process';
import React from 'react'
import { FaSearchLocation } from "react-icons/fa";

type Props = {
    className?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export default function SearchBox(props: Props) {
  return (
    <form onSubmit={props.onSubmit} 
    className={cn("flex relative items-center justify-center h-10", props.className)}>
      
        <input type="text"
        value={props.value}
        onChange={props.onChange} placeholder="Search Location ..." className="px-4 py-2 w-[230px] border drop-shadow-lg border-gray-300 rounder-1-md focus:outline-none focus:border-blue-500 h-full rounded-l-lg"/>
        <button className="text-xl px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full ">
            <FaSearchLocation  />
        </button>

    </form>
  )
}