"use client"
import { useEffect } from "react";
import {getPosts}  from "@/actions/post";
import { useAppDispatch, useAppSelector } from '@/store/hooks';


export default function Home() {
  const posts = useAppSelector((state) => state.posts.posts)
  const dispatch = useAppDispatch()
  useEffect(() => {    
      dispatch(getPosts())      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Main component
      {posts?.map((post) =>(
        <div key={post.id}>{post.title}</div>
      ))}      
      
    </div>
  );
}
