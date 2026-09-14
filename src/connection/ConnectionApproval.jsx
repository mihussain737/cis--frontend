import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approvedConnection,
  fetchPendingConnections,
  rejectConnection,
} from "../services/actions/actions";
import toast, { Toaster } from "react-hot-toast";

const ConnectionApproval = () => {
  const dispatch = useDispatch();

  const {
    connections = [],
    loading,
    error,
  } = useSelector((state) => state.connection || {});

  useEffect(() => {
    dispatch(fetchPendingConnections());
  }, [dispatch]);

  const handleApprove = async (customerId) => {
    const response = await dispatch(
      approvedConnection(customerId)
    );

    if (response.success) {
      toast.success("Connection moved to under review");
    } else {
      toast.error(response.error || "Approval failed");
    }
  };

  const handleReject = async (customerId) => {
    const response = await dispatch(
      rejectConnection(customerId)
    );

    if (response.success) {
      toast.success("Connection rejected successfully");
    } else {
      toast.error(response.error || "Rejection failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow">
          <h1 className="mb-6 text-2xl font-bold">
            List of Pending Connections
          </h1>

          {loading && (
            <p className="mb-4 text-blue-600">
              Processing request...
            </p>
          )}

          {error && (
            <p className="mb-4 rounded bg-red-100 p-3 text-red-700">
              {typeof error === "string"
                ? error
                : error?.message || "Failed to process request"}
            </p>
          )}

          {!loading && !error && connections.length === 0 && (
            <p className="text-gray-600">
              No pending connections found.
            </p>
          )}

          {connections.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">
                      Applicant Name
                    </th>
                    <th className="border p-3 text-left">
                      Mobile Number
                    </th>
                    <th className="border p-3 text-left">
                      Email
                    </th>
                    <th className="border p-3 text-left">
                      Connection Type
                    </th>
                    <th className="border p-3 text-left">
                      Purpose
                    </th>
                    <th className="border p-3 text-left">
                      Requested Load
                    </th>
                    <th className="border p-3 text-left">
                      Phase
                    </th>
                    <th className="border p-3 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {connections.map((connection, index) => (
                    <tr
                      key={
                        connection.connectionId ||
                        connection.customerId ||
                        connection.id ||
                        index
                      }
                      className="hover:bg-gray-50"
                    >
                      <td className="border p-3">
                        {connection.applicantName}
                      </td>

                      <td className="border p-3">
                        {connection.mobileNumber}
                      </td>

                      <td className="border p-3">
                        {connection.email}
                      </td>

                      <td className="border p-3">
                        {connection.connectionType}
                      </td>

                      <td className="border p-3">
                        {connection.purpose}
                      </td>

                      <td className="border p-3">
                        {connection.requestedLoad}
                      </td>

                      <td className="border p-3">
                        {connection.phase}
                      </td>

                      <td className="border p-3">
                        {connection.applicationStatus === "SUBMITTED" ? (
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              disabled={loading}
                              onClick={() =>
                                handleApprove(connection.customerId)
                              }
                              className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              Make Under Review
                            </button>

                            <button
                              type="button"
                              disabled={loading}
                              onClick={() =>
                                handleReject(connection.customerId)
                              }
                              className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className="rounded bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            {connection.applicationStatus}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectionApproval;