import Link from "next/link";

import { LatestPost } from "npm/app/_components/post";
import { api, HydrateClient } from "npm/trpc/server";
import supabase from "../config/supabaseClient"

const mockUrls = [
  "https://vpov7smk7a.ufs.sh/f/R0ZWWoyYgJFEKWbUd2XPtQ85p0jYNTU2xDlERZcdiL3MfWb4",
  "https://vpov7smk7a.ufs.sh/f/R0ZWWoyYgJFEA4lzl0GaH4p8MzngOUhBFymYdNPV9Cxsk3tr",
  "https://vpov7smk7a.ufs.sh/f/R0ZWWoyYgJFERN0g6wyYgJFEHWqiyIVOL3oS6dUnpN2Rm4M8",
  "https://vpov7smk7a.ufs.sh/f/R0ZWWoyYgJFEAJyZn6GaH4p8MzngOUhBFymYdNPV9Cxsk3tr"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function Home() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
      Hi (sneakers gallery is in progress)
    </main>
  )
}
