const CARD_TYPE = {
  RED: {name: "찬욱 카드", color: "#E24141"},
  BLUE: {name: "효리 카드", color: "#547CE4"},
  GREEN: {name: "수연 카드", color: "#73BC6D"},
  PINK: {name: "세진 카드", color: "#DE59B9"},
  MINT: {name: "진경 카드", color: "#94DACD"},
  CORAL: {name: "종길 카드", color: "#E76E9A"},
  ORANGE: {name: "건우 카드", color: "#F37D3B"},
  YELLOW: {name: "혜성 카드", color: "#FBCD58"},
}

interface CardTypeSelectorProps {
  cardType: string
  onSelect: (type: string) => void
}

export default function CardTypeSelector({ cardType, onSelect }: CardTypeSelectorProps) {
  const handleSelectType = (type: string) => {
    if (cardType !== type) {
      onSelect(type)
    }
  }

  return (
    <div className="flex-center">
      {Object.entries(CARD_TYPE).slice(0,4).map(
        ([type, { name, color }]) => (
          <div className="modal-item-container" key={type} onClick={() => {
            handleSelectType(type)
          }}>
            <div className="modal-item-dot" style={{backgroundColor: color}}/>
            <span className="modal-item-name">{name}</span>
          </div>
        )
      )}
      {Object.entries(CARD_TYPE).slice(4,8).map(
        ([type, { name, color }]) => (
          <div className="modal-item-container" key={type} onClick={() => {
            handleSelectType(type)
          }}>
            <div className="modal-item-dot" style={{backgroundColor: color}}/>
            <span className="modal-item-name">{name}</span>
          </div>
        )
      )}
    </div>
  )
}