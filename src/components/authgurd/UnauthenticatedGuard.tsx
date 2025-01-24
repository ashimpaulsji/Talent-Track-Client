"use client";
import { useEffect } from "react";

import { useAuth } from "@/src/redux/hooks/useAuth";
import { useRouter } from "next/navigation";

interface UnauthenticatedGuardProps {
  children: React.ReactNode;
}

export const UnauthenticatedGuard: React.FC<UnauthenticatedGuardProps> = ({
  children,
}) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated()) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};
