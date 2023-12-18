import { toast } from "react-toastify";
interface CustomToastProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
}

const CustomToast: React.FC<CustomToastProps> = ({ message, type }) => {
  return (
    <>
      {toast[type](message, {
        position: "bottom-left",
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })}
    </>
  );
};

export default CustomToast;
