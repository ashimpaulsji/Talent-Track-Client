"use client"
import { UnauthenticatedGuard } from "@/src/components/authgurd/UnauthenticatedGuard";
import Login from "@/src/features/Authentication/Login/Login";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-blue-50">
      <UnauthenticatedGuard>
        <Login />
      </UnauthenticatedGuard>
    </div>
  );
};

export default LoginPage;
