import { ReactNode } from "react";
import { CloseButton, ModalBackground, ModalContent } from "./styled";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalBackground onClick={onClose}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};
