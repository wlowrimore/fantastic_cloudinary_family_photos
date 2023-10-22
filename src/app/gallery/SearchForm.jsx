"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const SearchForm = ({ initialSearch }) => {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch])

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
      router.refresh();
    }} className='mb-6'>
      <Label htmlFor="tag-name" className="text-right">
        Search By Tag Name
      </Label>
      <div className='flex gap-4 items-center'>
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="album-name"
          value={tagName}
          className="col-span-3 mt-1 mb-3 bg-neutral-700"
        />
        <Button type="submit" className='h-[2.4rem] mb-2'>Search</Button>
      </div>
    </form>
  )
}

export default SearchForm