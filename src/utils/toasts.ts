import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  isAdmin: boolean;
}

export const showNotification = (props: Props) => {
  const { isAdmin } = props;
  !isAdmin && toast.success("Mode administrateur activé !", {
    position: toast.POSITION.BOTTOM_RIGHT
  });
}
