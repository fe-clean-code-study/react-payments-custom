import { useTooltip } from "../hooks";

interface TooltipProps {
  message: string;
}

const Tooltip = ({
  children,
  message,
}: React.PropsWithChildren<TooltipProps>) => {
  const { showTooltip, showTooltipHandler, hideTooltipHandler } = useTooltip();

  return (
    <div
      style={{ position: "relative", cursor: "help" }}
      onMouseEnter={showTooltipHandler}
      onMouseLeave={hideTooltipHandler}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateX(25%)",
            width: "125px",
            marginTop: "5px",
            fontSize: "12px",
            wordBreak: "keep-all",
            backgroundColor: "white",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            padding: "5px",
            borderRadius: "3px",
            zIndex: 1000,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
