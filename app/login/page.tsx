import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-transparent">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium text-zinc-50">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-zinc-50">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Trends
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
