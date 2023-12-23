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

export default function AccountSetting() {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is Required'),
        lastName: Yup.string().required('Last Name is Required'),
        gender: Yup.string().required('Gender is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        username: Yup.string().required('Username is Required'),
    });
    const dispatch = useDispatch();
    const [updateUser,{data,error}]  = useUpdateMutation();
    const { data: userData, isLoading } = useGetUserQuery();
    console.log('userData:', userData);

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
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log('Form Values:', values);
            try {
                const data = await updateUser(values);
                console.log('Update User:', data);
                toast.success('Profile updated successfully');
                resetForm();
            } catch (error) {
                console.error('Error updating profile:', error);
                toast.error('Error updating profile');
            } finally {
                setSubmitting(false);
            }
        },
    });
    return (
        <HandleContent
            error={error}
            isLoading={isLoading }
            customLoadingContent={<ResourceLoadingIndicator/>}
        >
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-96 mb-10 mt-0">
                    <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
                        <img
                            alt=""
                            src="https://i.pinimg.com/564x/19/ae/ac/19aeac1a4647348a0c24ba48089cda8c.jpg"
                            className="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
                        />
                        <div>
                            <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                                {/* User's Name */}
                            </h3>
                            <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                {/* User's Role */}
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                <HiCloudUpload className="mr-2" />
                                Change picture
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">

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
                                color="primary"
                                className="bg-orange-100 text-white "
                                onClick={formik.handleSubmit}
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
