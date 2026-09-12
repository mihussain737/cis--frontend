import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPendingConnections } from "../services/actions/actions";

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

  console.log(connections);
  console.log("ConnectionApproval component rendered");
  console.log("Connections:", connections);
  console.log("Is array:", Array.isArray(connections));
  console.log("Length:", connections.length);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">List of Pending Connections</h1>

        {loading && (
          <p className="text-blue-600">Loading pending connections...</p>
        )}

        {error && (
          <p className="mb-4 text-red-600">
            {typeof error === "string"
              ? error
              : error.message || "Failed to load connections"}
          </p>
        )}

        {!loading && !error && connections.length === 0 && (
          <p className="text-gray-600">No pending connections found.</p>
        )}

        {!loading && connections.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Applicant Name</th>
                  <th className="border p-3 text-left">Mobile Number</th>
                  <th className="border p-3 text-left">Email</th>
                  <th className="border p-3 text-left">Connection Type</th>
                  <th className="border p-3 text-left">Purpose</th>
                  <th className="border p-3 text-left">Requested Load</th>
                  <th className="border p-3 text-left">Phase</th>
                </tr>
              </thead>

              <tbody>
                {connections.map((connection, index) => (
                  <tr
                    key={connection.connectionId || connection.id || index}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">{connection.applicantName}</td>

                    <td className="border p-3">{connection.mobileNumber}</td>

                    <td className="border p-3">{connection.email}</td>

                    <td className="border p-3">{connection.connectionType}</td>

                    <td className="border p-3">{connection.purpose}</td>

                    <td className="border p-3">{connection.requestedLoad}</td>

                    <td className="border p-3">{connection.phase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionApproval;
