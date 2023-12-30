"use client";
import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { HiCloudUpload } from "react-icons/hi";
import {useGetUserQuery} from "@/store/features/user/userApiSlice";
import { useSession } from "next-auth/react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import {useUpdateMutation} from "@/store/features/auth/authApiSlice";
import {selectCurrentUser} from "@/store/features/auth/authSlice";
import ResourceLoadingIndicator from "@/components/deploy-app/deploymentLoading/resourceLoadingIndicator";
import HandleContent from "@/components/deploy-app/HandleContent";
import {useState} from "react";
import Image from "next/image";
import {useUploadFileMutation} from "@/store/features/fileupload/fileApiSlice";

export default function AccountSetting() {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is Required'),
        lastName: Yup.string().required('Last Name is Required'),
        gender: Yup.string().required('Gender is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        username: Yup.string().required('Username is Required'),
    });
    const dispatch = useDispatch();
    const [updateUser, { data: updateData, error: updateError }] = useUpdateMutation();
    const { data: userData, isLoading: userIsLoading } = useGetUserQuery();
    const [uploadFile, { isLoading: upIsLoading, error: upError, data: upData }] = useUploadFileMutation();
    console.log("user", userData);


    const formik = useFormik({
        initialValues: {
            firstName: userData?.firstName ||'',
            lastName: userData?.lastName || '',
            gender: userData?.gender||'MALE',
            username: userData?.username || '',
            email: userData?.email ||'',
            phone: userData?.phone || '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            console.log(values);
            updateUser(values)
                .unwrap()
                .then((res) => {
                    console.log(res);
                    if (selectedImage) {
                        uploadFile(selectedImage).unwrap();
                    }
                    toast.success("Upgrade user's profile successful!");
                })
                .catch((err) => {
                    const errors = err.data.errors.reduce((obj, item) => Object.assign(obj, { [item.name]: item.message }), {});
                    formik.setErrors(errors);
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleButtonClick = () => {
        // Trigger the click event on the hidden file input
        const fileInput = document.getElementById("image-upload");
        fileInput.click();
    };



    return (
        <HandleContent
            error={updateError}
            isLoading={userIsLoading || upIsLoading}
            customLoadingContent={<ResourceLoadingIndicator />}
        >
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="w-96 mb-10 mt-0 sm:w-full">
                    <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">

                        {/* File input for image upload */}
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <label htmlFor="image-upload">
                            <Image
                                alt="Selected Image"
                                src={selectedImage || "/images/placeholder.jpg"} // Replace with a placeholder image URL
                                className="mb-4 h-28 w-28 rounded-lg cursor-pointer sm:mb-0 xl:mb-4 2xl:mb-0"
                                width={100}
                                height={100}
                            />
                        </label>
                        <div>
                            {/* Label to trigger file input */}
                            <label htmlFor="image-upload">
                                <button
                                    onClick={handleButtonClick}
                                    className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring4 focus:ring-primary-500"
                                >
                                    <HiCloudUpload className="mr-2" />
                                    Change Profile
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-2/3">

                    <h3 className="mb-4 text-xl font-bold dark:text-white">
                        General information
                    </h3>
                    <form onSubmit={formik.handleSubmit} className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                            <Label htmlFor="last-name">Last Name</Label>
                            <TextInput
                                id="last-name"
                                name="lastName"
                                placeholder="Kim"
                                required
                                value={formik.values.lastName}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    console.log('Custom onChange for Last Name:', e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                // error={formik.touched.lastName && formik.errors.lastName}
                            />
                        </div>
                        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                            <Label htmlFor="first-name">First Name</Label>
                            <TextInput
                                id="first-name"
                                name="firstName"
                                placeholder="Ken"
                                required
                                value={formik.values.firstName}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    console.log('Custom onChange for First Name:', e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.firstName && formik.errors.firstName}
                            />
                        </div>
                        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                            <Label htmlFor="gender">Gender</Label>
                            <div className="mb-1 grid grid-cols-1 gap-y-2">
                                <Select
                                    id="gender"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="">---</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                            <Label htmlFor="number">Phone Number</Label>
                            <TextInput
                                id="number"
                                name="phone"
                                placeholder="+855 87 654 536"
                                required
                                value={formik.values.phone}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    console.log('Custom onChange for Phone Number:', e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phone && formik.errors.phone}
                            />
                        </div>
                        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                            <Label htmlFor="email">Email</Label>
                            <TextInput
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                required
                                type="email"
                                value={formik.values.email}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    console.log('Custom onChange for Email:', e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && formik.errors.email}
                            />
                        </div>
                        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                            <Label htmlFor="address">Username</Label>
                            <TextInput
                                id="username"
                                name="username"
                                placeholder="AutomateX"
                                required
                                value={formik.values.username}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    console.log('Custom onChange for Username:', e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && formik.errors.username}
                            />
                        </div>
                        {/* Add other form fields here */}
                        <div className="col-span-6">
                            <Button
                                type="submit"
                                color="primary"
                                className="bg-orange-100 text-white "
                                // onClick={formik.handleSubmit}
                                isProcessing={formik.isSubmitting}
                                disabled={formik.isSubmitting}
                            >
                                Save all
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
        </HandleContent>
    );
}
