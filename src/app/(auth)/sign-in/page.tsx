import React from "react";
function page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="text-gray-600">Please sign in to continue.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default page;
