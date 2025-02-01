"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react"; 
import { login as userLogin } from "@/src/redux/api/authApi";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/src/redux/hooks/reduxHooks";

type FormInputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const resultAction = await dispatch(
        userLogin({ email: data?.email, password: data?.password })
      );
      if (userLogin.fulfilled.match(resultAction)) {
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error(
          "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  const handleSignUpRedirect = () => {
    router.push("/register");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      <Card className="w-full max-w-4xl py-6 shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="space-y-2 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardTitle className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to TalentTrack
            </CardTitle>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CardDescription className="text-lg text-gray-600">
              Your gateway to exciting career opportunities
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-8 mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="pl-12 pr-4 py-7 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-xl"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="pl-12 pr-12 py-7 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-xl"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-6 w-6" />
                ) : (
                  <Eye className="h-6 w-6" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-between items-center flex-wrap gap-2"
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-5 h-5"
                />
                <span className="text-gray-700 text-lg">Remember me</span>
              </label>
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-800 p-0 text-lg"
              >
                Forgot Password?
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-7 text-xl font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Sign In
              </Button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { name: "Github", icon: Github },
              { name: "LinkedIn", icon: Linkedin },
              { name: "Facebook", icon: Facebook },
            ].map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full py-7 text-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <provider.icon className="h-6 w-6" />
                  {provider.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-center text-gray-600 text-lg"
          >
            Don&apos;t have an account yet?
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Button
              onClick={handleSignUpRedirect}
              variant="outline"
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-7 text-xl font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Create Your Account
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
