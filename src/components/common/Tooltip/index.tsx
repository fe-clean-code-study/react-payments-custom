import { useTooltip } from "../../../hooks";
import "./style.css";

export interface TooltipProps {
  message: string;
}

const Tooltip = ({
  children,
  message,
}: React.PropsWithChildren<TooltipProps>) => {
  const tooltip = useTooltip();

  return (
    <div
      data-scope="tooltip"
      data-part="trigger"
      onMouseEnter={tooltip.show}
      onMouseLeave={tooltip.hide}
    >
      {children}
      {tooltip.isShow && (
        <div data-scope="tooltip" data-part="content">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
