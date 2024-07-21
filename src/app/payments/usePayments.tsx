import { useContext } from "react";
import { PaymentsContext } from "./PaymentsProvider.tsx";


const usePayments = () => useContext(PaymentsContext)

export default usePayments