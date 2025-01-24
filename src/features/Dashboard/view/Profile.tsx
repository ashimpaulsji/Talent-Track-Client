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
import toast from "react-hot-toast";

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userRole } = useAuth();
  const { profile, error } = useAppSelector((state) => state.employee);

  useEffect(() => {
    if (userRole === "employee") {
      dispatch(getEmployeeProfile());
    }
  }, [dispatch, userRole]);

  const handleSubmit = async (data: any) => {
    if (userRole === "employee") {
      try {
        const result = await dispatch(updateEmployeeProfile(data));
        
        if (result.type === "employee/updateProfile/fulfilled") {
          toast.success("Profile updated successfully!");
        } else {
          toast.error("Failed to update profile. Please try again.");
        }
      } catch (error) {
        console.error("Update error:", error);
        toast.error("An error occurred. Please try again.");
      }
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
