"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Eye,
  EyeOff,
  Briefcase,
  UserCircle,
  ArrowLeft,
  Mail,
  Lock,
  MapPin,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src//components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Checkbox } from "@/src/components/ui/checkbox";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/src/redux/hooks/reduxHooks";
import { register as registerUser } from "@/src/redux/api/authApi";

type FormInputs = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  job_title?: string;
  newsletter?: boolean;
  terms?: boolean;
};

export default function EnhancedRegister() {
  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsLoading(true);
    try {
      const resultAction = await dispatch(
        registerUser({
          ...data,
          role: userType === "employer" ? "employee" : "job_seeker",
        })
      );

      if (registerUser.fulfilled.match(resultAction)) {
        toast.success("Registration successful!");
        router.push("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await post<{
  //       accessToken: string;
  //       refreshToken: string;
  //     }>(REGISTER_API(), {
  //       ...data,
  //       role: userType === "employer" ? "employee" : "job_seeker",
  //     });

  //     if (!response) {
  //       throw new Error("An unexpected error occurred. Please try again.");
  //     } else {
  //       toast.success("Registration successful!");
  //       router.push("/login");
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       toast.error(error.message);
  //     } else {
  //       toast.error("An unexpected error occurred. Please try again.");
  //     }
  //     console.error("Registration error:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-5xl mx-auto shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="space-y-1 relative">
          {userType && (
            <Button
              variant="ghost"
              className="absolute top-4 left-4 text-blue-600 hover:text-blue-800"
              onClick={() => setUserType("")}
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
          )}
          <CardTitle className="text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
            {userType ? "Join TalentTrack" : "Welcome to TalentTrack"}
          </CardTitle>
          <CardDescription className="text-center text-gray-600 text-lg">
            {userType
              ? "Your gateway to exciting career opportunities"
              : "Choose your path to success"}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-8">
          {!userType ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="cursor-pointer transition-all hover:shadow-lg hover:border-blue-500 group"
                onClick={() => setUserType("employer")}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <Briefcase className="w-16 h-16 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-900 group-hover:text-purple-900 transition-colors">
                        I&apos;m an Employer
                      </h3>
                      <p className="text-blue-600 group-hover:text-purple-600 transition-colors text-lg">
                        Looking to hire top talent
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer transition-all hover:shadow-lg hover:border-blue-500 group"
                onClick={() => setUserType("jobseeker")}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <UserCircle className="w-16 h-16 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-900 group-hover:text-purple-900 transition-colors">
                        I&apos;m a Job Seeker
                      </h3>
                      <p className="text-blue-600 group-hover:text-purple-600 transition-colors text-lg">
                        Exploring new opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="first_name" className="text-blue-900 text-lg">
                    First name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6" />
                    <Input
                      id="first_name"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      placeholder="Enter your first name"
                      className="pl-12 py-6 text-lg rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {errors.first_name && (
                    <p className="text-red-500 text-sm">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name" className="text-blue-900 text-lg">
                    Last name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6" />
                    <Input
                      id="last_name"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      placeholder="Enter your last name"
                      className="pl-12 py-6 text-lg rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {errors.last_name && (
                    <p className="text-red-500 text-sm">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-900 text-lg">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6" />
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="your.email@example.com"
                    className="pl-12 py-6 text-lg rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-900 text-lg">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                    placeholder="Create a strong password"
                    className="pl-12 pr-12 py-6 text-lg rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700"
                  >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-blue-900 text-lg">
                  Country
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6 z-10" />
                  <Select onValueChange={(value) => setValue("country", value)}>
                    <SelectTrigger className="pl-12 py-6 text-lg rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {userType === "jobseeker" && (
                <div className="space-y-2">
                  <Label htmlFor="job_title" className="text-blue-900 text-lg">
                    Current Job Title
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6" />
                    <Input
                      id="job_title"
                      {...register("job_title", {
                        required: "Job title is required",
                      })}
                      placeholder="e.g. Software Engineer"
                      className="pl-12 py-6 text-lg rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {errors.job_title && (
                    <p className="text-red-500 text-sm">
                      {errors.job_title.message}
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="newsletter"
                    {...register("newsletter")}
                    onCheckedChange={(checked) => {
                      setValue("newsletter", checked === true);
                    }}
                    className="text-blue-500 border-blue-200 h-5 w-5"
                  />
                  <Label
                    htmlFor="newsletter"
                    className="text-blue-700 text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {userType === "jobseeker"
                      ? "Send me job alerts and career tips"
                      : "Send me talent acquisition tips and hiring trends"}
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="terms"
                    {...register("terms", {
                      required: "You must agree to the terms and conditions",
                    })}
                    onCheckedChange={(checked) => {
                      setValue("terms", checked === true);
                    }}
                    className="text-blue-500 border-blue-200 h-5 w-5"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-blue-700 text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the TalentTrack{" "}
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm">{errors.terms.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-xl py-6 rounded-lg shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? "Creating Account..." : "Create Your Account"}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center text-lg text-blue-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-800 underline"
            >
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
