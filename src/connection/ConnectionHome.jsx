import React from "react";
import { Link } from "react-router-dom";

const ConnectionHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Hero Section */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-10 text-white shadow-lg sm:px-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
              Electricity Connection Portal
            </p>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Apply for a New Electricity Connection
            </h1>

            <p className="mt-4 text-base leading-7 text-blue-50 sm:text-lg">
              Submit your electricity connection application online quickly
              and conveniently. Track your application and manage your
              connection requests from one place.
            </p>

            <Link
              to="/connection/new/lt"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow transition hover:bg-blue-50"
            >
              Apply for Connection
            </Link>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Quick Actions
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/connection/new/lt"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                ⚡
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                New Connection
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Apply for a new residential, commercial, or industrial
                electricity connection.
              </p>

              <span className="mt-4 inline-block font-medium text-blue-600">
                Apply now →
              </span>
            </Link>

            <Link
              to="/connection/status"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
                📋
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                Track Application
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Check the current status of your submitted electricity
                connection application.
              </p>

              <span className="mt-4 inline-block font-medium text-green-600">
                Check status →
              </span>
            </Link>

            <Link
              to="/connection/applications"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📁
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                My Applications
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                View your previous applications and their approval status.
              </p>

              <span className="mt-4 inline-block font-medium text-orange-600">
                View applications →
              </span>
            </Link>
          </div>
        </section>

        {/* Connection Types */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Connection Types
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Residential
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                For homes, apartments, and residential properties.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Commercial
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                For shops, offices, restaurants, and business establishments.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Industrial
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                For factories, manufacturing units, and industrial facilities.
              </p>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800">
            How It Works
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                1
              </div>

              <h3 className="mt-3 font-semibold text-gray-800">
                Fill Application
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Enter your personal, address, and connection details.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                2
              </div>

              <h3 className="mt-3 font-semibold text-gray-800">
                Submit Request
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Review your information and submit the application.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                3
              </div>

              <h3 className="mt-3 font-semibold text-gray-800">
                Verification
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                The application is reviewed by the electricity department.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                4
              </div>

              <h3 className="mt-3 font-semibold text-gray-800">
                Connection Approval
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Receive updates about approval and connection installation.
              </p>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Before Applying
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-blue-800">
            <li>Keep your valid mobile number and email address ready.</li>
            <li>Enter your complete address accurately.</li>
            <li>Choose the correct connection type and requested load.</li>
            <li>Make sure all application details are correct before submission.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default ConnectionHome;