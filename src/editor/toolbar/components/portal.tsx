import ReactDOM from "react-dom";

interface PortalProps {
  children: any;
}

const Portal = (props: PortalProps) => {
  const { children } = props;
  return typeof document === "object"
    ? ReactDOM.createPortal(
        children,
        document.querySelector(".gneiss") || document.body
      )
    : null;
};

export default Portal;
