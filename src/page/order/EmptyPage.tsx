import { useContext } from "react"
import { AdminContext } from "../../App";
import { AdminContextType } from "../../types/admin";
import AdminEmptyMenu from "../../components/emptyPage/AdminEmptyMenu";
import UserEmptyMenu from "../../components/emptyPage/UserEmptyMenu";

function EmptyPage() {
  const { isAdmin } = useContext(AdminContext) as AdminContextType;
  return (
    <div>
      {isAdmin
        ? <AdminEmptyMenu/>
        : <UserEmptyMenu/>
      }
    </div>
  )
}

export default EmptyPage