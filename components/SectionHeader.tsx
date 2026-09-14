interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean // true = white text (on dark bg)
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const align = centered ? 'text-center mx-auto' : ''
  const textColor = light ? 'text-off-white' : 'text-dark-text'
  const eyebrowColor = light ? 'text-mint' : 'text-mint'
  const descColor = light ? 'text-soft-mint/80' : 'text-dark-text/65'

  return (
    <div className={`max-w-2xl mb-12 ${align}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${textColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  )
}
