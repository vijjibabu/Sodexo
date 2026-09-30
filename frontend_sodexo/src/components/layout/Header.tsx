export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 shadow-[var(--shadow-sm)]">
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-[var(--color-text)]">{title}</h1>
        {subtitle && <p className="text-xs text-[var(--color-text-muted)]">{subtitle}</p>}
      </div>
    </header>
  )
}
