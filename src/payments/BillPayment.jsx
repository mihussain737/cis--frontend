import { useState } from "react";
import { Search } from "lucide-react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { outStandingAmount } from "../services/actions/paymentActions";

const BillPayment = () => {
  const [accountNo, setAccountNo] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(accountNo)) {
      alert("Please enter a valid 10-digit account number");
      return;
    
    
    }
    const response =await dispatch(outStandingAmount(accountNo))
    if(response){
      // navigate();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-blue-700">
            Bill Payment
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Search your account to pay your bill
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="accountNo"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Account Number
            </label>

            <input
              id="accountNo"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              maxLength={10}
              placeholder="Enter your account number"
              value={accountNo}
              onChange={(e) =>
                setAccountNo(e.target.value.replace(/\D/g, ""))
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <Search size={18} />
            Search Bill
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-gray-500">
          Enter your registered account number to view your outstanding bill.
        </p>
      </div>
    </div>
  );
};

export default BillPayment;