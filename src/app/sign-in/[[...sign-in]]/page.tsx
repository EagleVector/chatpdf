import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="absolute top-1/3 left-1/3 -trabslate-x-1/2 -translate-y-1/2">
      <SignIn />
    </div>
  )
}
