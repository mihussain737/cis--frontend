import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Welcome Section */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-6 text-white shadow-lg sm:p-8">
          <p className="text-sm font-medium text-blue-100">
            Electricity Connection Portal
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Welcome back, User! 👋
          </h1>

          <p className="mt-3 max-w-2xl text-blue-50">
            Manage your electricity connection applications, track requests,
            and access important services from your dashboard.
          </p>

          <Link
            to="/connection/new/lt"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Apply for New Connection
          </Link>
        </section>

        {/* Summary Cards */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Total Applications
              </p>
              <span className="rounded-lg bg-blue-100 p-2 text-xl">
                📋
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-gray-800">0</h2>
            <p className="mt-1 text-sm text-gray-500">
              Applications submitted
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Pending
              </p>
              <span className="rounded-lg bg-yellow-100 p-2 text-xl">
                ⏳
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-gray-800">0</h2>
            <p className="mt-1 text-sm text-gray-500">
              Awaiting verification
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Approved
              </p>
              <span className="rounded-lg bg-green-100 p-2 text-xl">
                ✅
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-gray-800">0</h2>
            <p className="mt-1 text-sm text-gray-500">
              Approved applications
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Rejected
              </p>
              <span className="rounded-lg bg-red-100 p-2 text-xl">
                ❌
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-gray-800">0</h2>
            <p className="mt-1 text-sm text-gray-500">
              Rejected applications
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Quick Actions */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-800">
              Quick Actions
            </h2>

            <div className="mt-5 space-y-3">
              <Link
                to="/connection/new/lt"
                className="flex items-center gap-3 rounded-lg bg-blue-50 p-4 text-blue-700 transition hover:bg-blue-100"
              >
                <span className="text-xl">⚡</span>
                <div>
                  <h3 className="font-semibold">New Connection</h3>
                  <p className="text-sm text-blue-600">
                    Submit a new application
                  </p>
                </div>
              </Link>

              <Link
                to="/connection/applications"
                className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700 transition hover:bg-green-100"
              >
                <span className="text-xl">📁</span>
                <div>
                  <h3 className="font-semibold">My Applications</h3>
                  <p className="text-sm text-green-600">
                    View submitted applications
                  </p>
                </div>
              </Link>

              <Link
                to="/connection/status"
                className="flex items-center gap-3 rounded-lg bg-orange-50 p-4 text-orange-700 transition hover:bg-orange-100"
              >
                <span className="text-xl">🔍</span>
                <div>
                  <h3 className="font-semibold">Track Application</h3>
                  <p className="text-sm text-orange-600">
                    Check application status
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-gray-800">
                Recent Applications
              </h2>

              <Link
                to="/connection/applications"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                View all →
              </Link>
            </div>

            <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <div className="text-4xl">📄</div>

              <h3 className="mt-3 font-semibold text-gray-700">
                No applications yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Your submitted connection applications will appear here.
              </p>

              <Link
                to="/connection/new/lt"
                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Start an Application
              </Link>
            </div>
          </div>
        </section>

        {/* Information Cards */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-lg font-bold text-blue-900">
              Application Guidelines
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-blue-800">
              <li>Enter your personal details correctly.</li>
              <li>Provide your complete communication address.</li>
              <li>Select the appropriate connection type.</li>
              <li>Enter the required load accurately.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-100 bg-green-50 p-6">
            <h2 className="text-lg font-bold text-green-900">
              Need Help?
            </h2>

            <p className="mt-3 text-sm leading-6 text-green-800">
              If you have any questions about the connection application
              process, document requirements, or application status, contact
              the support department.
            </p>

            <button
              type="button"
              className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Contact Support
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Dashboard;