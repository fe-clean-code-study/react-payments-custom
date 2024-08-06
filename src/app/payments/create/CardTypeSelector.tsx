interface CardTypeSelectorProps {
  cardType: string
  onSelect: (type: string) => void
  options: Array<[string, { name: string; color: string }]>
}

export default function CardTypeSelector({
  cardType,
  onSelect,
  options,
}: CardTypeSelectorProps) {
  const handleSelectType = (type: string) => {
    if (cardType !== type) {
      onSelect(type)
    }
  }

  return (
    <div className='flex-center'>
      {options.map(([type, { name, color }]) => (
        <div
          className='modal-item-container'
          key={type}
          onClick={() => {
            handleSelectType(type)
          }}
        >
          <div className='modal-item-dot' style={{ backgroundColor: color }} />
          <span className='modal-item-name'>{name}</span>
        </div>
      ))}
    </div>
  )
}
