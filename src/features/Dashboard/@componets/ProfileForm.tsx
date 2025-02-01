"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { Progress } from "@/src/components/ui/progress";
import { FileUploader } from "./file-uploader";
import { Badge } from "@/src/components/ui/badge";
import { Loader2, AlertCircle } from "lucide-react";

interface ProfileFormProps {
  userRole: any;
  initialData?: any;
  onSubmit: (data: any) => void;
}

const employerSchema = z.object({
  company_name: z
    .string()
    .min(1, "Company name is required")
    .max(255, "Company name must not exceed 255 characters"),
  company_description: z.string().min(1, "Company description is required"),
  industry: z
    .string()
    .min(1, "Industry is required")
    .max(100, "Industry must not exceed 100 characters"),
  website: z.string().url("Please enter a valid URL").optional().nullable(),
  location: z
    .string()
    .min(1, "Location is required")
    .max(255, "Location must not exceed 255 characters"),
  contact_email: z.string().email("Please enter a valid email"),
  contact_phone: z
    .string()
    .min(1, "Contact phone is required")
    .max(20, "Contact phone must not exceed 20 characters"),
  position: z
    .string()
    .max(255, "Position must not exceed 255 characters")
    .optional(),
  department: z
    .string()
    .max(255, "Department must not exceed 255 characters")
    .optional(),
});

const jobseekerSchema = z.object({
  skills: z.array(
    z.string().max(50, "Each skill must not exceed 50 characters")
  ),
  experience: z
    .string()
    .max(5000, "Experience must not exceed 5000 characters"),
  resume: z
    .instanceof(File)
    .refine(
      (file) =>
        file &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/png",
          "image/jpeg",
          "image/jpg",
        ].includes(file.type),
      "File must be PDF, DOC, DOCX, PNG, JPG, or JPEG"
    )
    .refine(
      (file) => file && file.size <= 10 * 1024 * 1024,
      "File size must not exceed 10MB"
    ),
});

type EmployerFormData = z.infer<typeof employerSchema>;
type JobSeekerFormData = z.infer<typeof jobseekerSchema>;

const ProfileForm: React.FC<ProfileFormProps> = ({
  userRole,
  initialData,
  onSubmit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [resumePreview, setResumePreview] = useState<string | null>(null);

  const schema = userRole === "employee" ? employerSchema : jobseekerSchema;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<EmployerFormData | JobSeekerFormData>({
    resolver: zodResolver(schema),
    defaultValues: initialData || {},
  });

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        setValue(key as any, value);
      });
    }
  }, [initialData, setValue]);

  const watchedFields = watch();

  const calculateProgress = () => {
    const totalFields = Object.keys(schema.shape).length;
    const filledFields = Object.values(watchedFields).filter(Boolean).length;
    return (filledFields / totalFields) * 100;
  };

  const handleFormSubmit = async (
    data: EmployerFormData | JobSeekerFormData
  ) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await onSubmit(data);
    } catch {
      setSubmitError(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (file: File | null) => {
    setValue("resume" as any, file as any);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setResumePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setResumePreview(null);
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {userRole === "employee" ? "Company Profile" : "Job Seeker Profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <Progress value={calculateProgress()} className="w-full" />
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              {userRole === "employee" ? (
                <>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company_name">Company Name</Label>
                      <Controller
                        name="company_name"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="company_name"
                            placeholder="Enter company name"
                            {...field}
                          />
                        )}
                      />
                      {"company_name" in errors && (
                        <p className="text-sm text-red-500">
                          {String(errors.company_name?.message)}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company_description">
                        Company Description
                      </Label>
                      <Controller
                        name="company_description"
                        control={control}
                        render={({ field }) => (
                          <Textarea
                            id="company_description"
                            placeholder="Describe your company"
                            {...field}
                          />
                        )}
                      />
                      {"company_description" in errors && (
                        <p className="text-sm text-red-500">
                          {String(errors.company_description?.message)}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Controller
                        name="industry"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="industry"
                            placeholder="Enter industry"
                            {...field}
                          />
                        )}
                      />
                      {"industry" in errors && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<EmployerFormData>).industry
                              ?.message
                          )}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Controller
                        name="website"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://example.com"
                            {...field}
                            value={field.value ?? ""}
                          />
                        )}
                      />
                      {"website" in
                        (errors as FieldErrors<EmployerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<EmployerFormData>).website
                              ?.message
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="skills">Skills</Label>
                      <Controller
                        name="skills"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="skills"
                            placeholder="Enter your skills (comma-separated)"
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value
                                  .split(",")
                                  .map((skill) => skill.trim())
                              )
                            }
                          />
                        )}
                      />
                      {"skills" in
                        (errors as FieldErrors<JobSeekerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<JobSeekerFormData>).skills
                              ?.message
                          )}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience</Label>
                      <Controller
                        name="experience"
                        control={control}
                        render={({ field }) => (
                          <Textarea
                            id="experience"
                            placeholder="Describe your experience"
                            {...field}
                          />
                        )}
                      />
                      {"experience" in
                        (errors as FieldErrors<JobSeekerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<JobSeekerFormData>)
                              .experience?.message
                          )}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume</Label>
                      <FileUploader
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        maxSize={10 * 1024 * 1024} // 10MB
                        onFileSelect={handleFileChange}
                      />
                      {"resume" in
                        (errors as FieldErrors<JobSeekerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<JobSeekerFormData>).resume
                              ?.message
                          )}
                        </p>
                      )}
                      {resumePreview && (
                        <div className="mt-2">
                          <Badge variant="secondary">Resume Preview</Badge>
                          <object
                            data={resumePreview}
                            type="application/pdf"
                            width="100%"
                            height="600px"
                          >
                            <p>
                              Unable to display file.{" "}
                              <a href={resumePreview} download>
                                Download
                              </a>{" "}
                              instead.
                            </p>
                          </object>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </TabsContent>
            <TabsContent value="contact">
              {userRole === "employee" ? (
                <>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Controller
                        name="location"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="location"
                            placeholder="Enter company location"
                            {...field}
                          />
                        )}
                      />
                      {"location" in
                        (errors as FieldErrors<EmployerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<EmployerFormData>).location
                              ?.message
                          )}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact_email">Contact Email</Label>
                      <Controller
                        name="contact_email"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="contact_email"
                            type="email"
                            placeholder="Enter contact email"
                            {...field}
                          />
                        )}
                      />
                      {"contact_email" in
                        (errors as FieldErrors<EmployerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<EmployerFormData>)
                              .contact_email?.message
                          )}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact_phone">Contact Phone</Label>
                      <Controller
                        name="contact_phone"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="contact_phone"
                            type="tel"
                            placeholder="Enter contact phone"
                            {...field}
                          />
                        )}
                      />
                      {"contact_phone" in
                        (errors as FieldErrors<EmployerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<EmployerFormData>)
                              .contact_phone?.message
                          )}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Controller
                        name="position"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="position"
                            placeholder="Enter your position"
                            {...field}
                          />
                        )}
                      />
                      {"position" in
                        (errors as FieldErrors<EmployerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<EmployerFormData>).position
                              ?.message
                          )}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Controller
                        name="department"
                        control={control}
                        render={({ field }) => (
                          <Input
                            id="department"
                            placeholder="Enter your department"
                            {...field}
                          />
                        )}
                      />
                      {"department" in
                        (errors as FieldErrors<EmployerFormData>) && (
                        <p className="text-sm text-red-500">
                          {String(
                            (errors as FieldErrors<EmployerFormData>).department
                              ?.message
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : null}
            </TabsContent>
          </Tabs>
          {submitError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : initialData ? (
              "Update Profile"
            ) : (
              "Create Profile"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
