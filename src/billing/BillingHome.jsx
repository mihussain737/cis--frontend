import React from "react";
import { Link } from "react-router-dom";

const BillingHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 py-10 text-white shadow-lg sm:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-lg font-semibold uppercase tracking-wider text-blue-100"></p>
            Billing Portal
          </div>
          <h1>Billing related Portal</h1>
          <p className="mt-4 text-base leading-7 text-blue-50 sm:text-lg">
            Sumit your electricity billing application online quickly and
            conveniently. Track your billing and manage your bill request from
            one place
          </p>
          <Link
            to="/billing/billProcess"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow transition hover:bg-blue-50"
          >
            Generate Your Bill
          </Link>
        </section>
      </div>
    </div>
  );
};

export default BillingHome;
