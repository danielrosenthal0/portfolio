"use client"

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="glass-button rounded-md px-3 py-1 text-sm text-white cursor-pointer"
    >
      save as pdf
    </button>
  )
}
