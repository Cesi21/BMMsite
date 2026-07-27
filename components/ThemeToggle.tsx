"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="theme-toggle relative h-10 w-[58px] rounded-xl border p-1 transition"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs" aria-hidden>
        ☀
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs" aria-hidden>
        ☾
      </span>
      <span className="theme-toggle-knob relative block h-8 w-8 rounded-lg bg-blue-500 shadow-md transition-transform duration-200" />
    </button>
  )
}
