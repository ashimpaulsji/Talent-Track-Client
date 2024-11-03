'use client'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { MapPin, Briefcase, DollarSign, Calendar, ChevronLeft, ChevronRight, Upload, Sparkles, X, CalendarIcon } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { Label } from '@/src/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group'
import { Popover, PopoverContent, PopoverTrigger } from '@/src/components/ui/popover'
import { cn } from '@/src/lib/utils'
import Image from 'next/image'
import { jobs } from '@/src/constants/data/jobdata'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const formSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number is required'),
    resume: z.instanceof(File).refine((file) => file.size <= 5000000, 'Max file size is 5MB'),
    coverLetter: z.string().optional(),
    experience: z.enum(['0-1', '1-3', '3-5', '5+']),
    startDate: z.date().min(new Date(), { message: "Start date must be in the future" }),
})

type FormData = z.infer<typeof formSchema>

const ApplyJob = ({ params }: { params: { id: string } }) => {
    const jobId = parseInt(params?.id)
    const job = jobs?.find(j => j?.id === jobId)

    const [step, setStep] = useState<number>(1)
    const [progress, setProgress] = useState<number>(33)
    const [resumeFile, setResumeFile] = useState<File | null>(null)
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

    const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
        // Handle form submission
    }

    const nextStep = () => {
        setStep(step + 1)
        setProgress(progress + 33)
    }

    const prevStep = () => {
        setStep(step - 1)
        setProgress(progress - 33)
    }

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setResumeFile(file)
            setValue('resume', file)
        }
    }

    const handleFileDelete = () => {
        setResumeFile(null)
    }

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-4xl mx-auto shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6">
                    <CardHeader className="space-y-1 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-bold tracking-tight">Apply for {job?.title || 'Job Position'}</h2>
                            <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                                <Image
                                    src={job?.company_details?.company_logo || '/default-logo.png'}
                                    alt={job?.company_details?.company_name || 'Company Logo'}
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job?.location || 'Location'}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                <span>{job?.employment_type || 'Employment Type'}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                <span>{job?.salary_range || 'Salary Range'}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{job?.posted_time || 'Posted Time'}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {job?.tags?.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-blue-200 text-blue-800">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardHeader>
                </div>
                <CardContent className="p-6">
                    <div className="w-full mb-6 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transition-all duration-500 ease-in-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
                                        <Input id="fullName" {...register('fullName')} className="w-full p-4 py-6 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-colors" />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                                        <Input id="email" type="email" {...register('email')} className="w-full p-4 py-6 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-colors" />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                                    <Input id="phone" {...register('phone')} className="w-full p-4 text-lg border border-gray-300 py-6 rounded-md focus:ring-2 focus:ring-blue-500 transition-colors" />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="resume" className="text-sm font-medium text-gray-700">Resume</Label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors">
                                        {resumeFile ? (
                                            <div className="space-y-1 text-center">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <span className="text-sm text-gray-500">{resumeFile.name}</span>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={handleFileDelete}
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    File size: {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-1 text-center">
                                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                <div className="flex text-sm text-gray-600">
                                                    <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 transition-colors">
                                                        <span>Upload a file</span>
                                                        <Input id="resume" type="file" className="sr-only" onChange={handleFileUpload} accept=".pdf,.doc,.docx" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                                            </div>
                                        )}
                                    </div>
                                    {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="coverLetter" className="text-sm font-medium text-gray-700">Cover Letter (Optional)</Label>
                                    <Textarea id="coverLetter" {...register('coverLetter')} className="w-full p-4 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-colors" rows={6} />
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">Years of Experience</Label>
                                    <RadioGroup defaultValue="0-1" className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                        {(['0-1', '1-3', '3-5', '5+'] as const).map((value) => (
                                            <div key={value} className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md p-4 hover:border-blue-500 transition-colors">
                                                <RadioGroupItem value={value} id={`experience-${value}`} {...register('experience')} />
                                                <Label htmlFor={`experience-${value}`} className="flex-grow cursor-pointer text-lg">{value} years</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                                        Earliest Start Date
                                    </Label>
                                    <Controller
                                        name="startDate"
                                        control={control}
                                        render={({ field }) => (
                                            <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full justify-start py-6 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-6 w-6" />
                                                        {field.value ? field.value.toLocaleDateString() : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <DatePicker
                                                        selected={field.value}
                                                        onChange={(date: Date | null) => {
                                                            if (date) {
                                                                field.onChange(date)
                                                                setIsDatePickerOpen(false)
                                                            }
                                                        }}
                                                        minDate={new Date()}
                                                        inline
                                                        wrapperClassName="w-full "
                                                        calendarClassName="rounded-md border shadow-lg"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        )}
                                    />
                                    {errors.startDate && (
                                        <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between p-6 bg-gray-50">
                    {step > 1 && (
                        <Button onClick={prevStep} variant="outline" className="flex items-center text-lg transition-colors">

                            <ChevronLeft className="mr-2 h-5 w-5" /> Previous
                        </Button>
                    )}
                    {step < 3 ? (
                        <Button onClick={nextStep} className="ml-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center text-lg transition-colors">
                            Next <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit(onSubmit)} className="ml-auto bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white flex items-center text-lg transition-colors">
                            Submit Application <Sparkles className="ml-2 h-5 w-5" />
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

export default ApplyJob