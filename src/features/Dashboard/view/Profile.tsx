"use client";
import React, { useEffect } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useAuth } from "@/src/redux/hooks/useAuth";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks/reduxHooks";
import {
  getEmployeeProfile,
  updateEmployeeProfile,
} from "@/src/redux/api/employeeApi";
import ProfileForm from "../@componets/ProfileForm";

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userRole } = useAuth();
  console.log("🚀 ~ userRole:", userRole)
  const { profile, loading, error } = useAppSelector((state) => state.employee);
  console.log("🚀 ~ profile:", profile)

  useEffect(() => {
    if (userRole === "employee") {
      dispatch(getEmployeeProfile());
    }
  }, [dispatch, userRole]);

  const handleSubmit = async (data: any) => {
    
    if (userRole === "employee") {
      
      console.log("🚀 ~ handleSubmit ~ data:", data);
      const result = await dispatch(updateEmployeeProfile(data));
      console.log("🚀 ~ handleSubmit ~ result:", result)
      
    }
  };

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }


  return (
    <section className="container mx-auto p-6">
      <ProfileForm
        userRole={userRole}
        initialData={profile}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default ProfileComponent;
