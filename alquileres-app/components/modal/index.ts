import { Modal as ModalHOC } from './Modal';
import { Props as ModalHOCProps } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

export { Modal as ModalHOC } from './Modal';
export { ModalHeader } from './ModalHeader';
export { ModalBody } from './ModalBody';
export { ModalFooter } from './ModalFooter';

interface ModalProps {
  (props: ModalHOCProps): JSX.Element;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
}

export const Modal: ModalProps = Object.assign(ModalHOC, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
