import { CARD_NAME_LIST } from "../../constants";
import { Flex } from "../common";

interface CardNameListProps {
  onCardNameClick: (name: string, color: string) => void;
}

const CardNameList = ({ onCardNameClick }: CardNameListProps) => {
  return (
    <Flex justify="center" align="center" wrap="wrap" gap="10px">
      {CARD_NAME_LIST.map(({ name, color }) => (
        <div
          key={name}
          className="modal-item-container pointer"
          onClick={() => {
            onCardNameClick(name, color);
          }}
        >
          <div
            className="modal-item-dot"
            style={{ backgroundColor: color }}
          ></div>
          <span className="modal-item-name">{name}</span>
        </div>
      ))}
    </Flex>
  );
};

export default CardNameList;
