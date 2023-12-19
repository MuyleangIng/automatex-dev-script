"use client"


import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {HiCloudUpload} from "react-icons/hi";
import {Button, Card, Label, TextInput} from "flowbite-react";
import Image from "next/image";

// Validation schema using Yup
const validationSchema = Yup.object({
    lastName: Yup.string().required('Last Name is required'),
    firstName: Yup.string().required('First Name is required'),
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const YourFormComponent = () => {
    const initialValues = {
        lastName: '',
        firstName: '',
        userName: '',
        email: '',
        password: '',
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };
    const handleButtonClick = () => {
        // Trigger the click event on the hidden file input
        document.getElementById('image-upload').click();
    };

    const onSubmit = (values) => {
        // Handle form submission here
        console.log('Form submitted with values:', values);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-between">
                <div className="w-96 mb-10 mt-0">
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
                                    className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    <HiCloudUpload className="mr-2"/>
                                    Change picture
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <Card>
                        <h3 className="mb-4 text-xl font-bold dark:text-white">General information</h3>
                        {/* Formik form */}
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            <Form>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                        <Label htmlFor="last-name">Last Name</Label>
                                        <Field
                                            id="last-name"
                                            name="lastName"
                                            placeholder="Kim"
                                            required
                                            type="text"
                                            as={TextInput}
                                        />
                                        <ErrorMessage name="lastName" component="div" className="text-red-500" />
                                    </div>
                                    <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                        <Label htmlFor="first-name">First Name</Label>
                                        <Field
                                            id="first-name"
                                            name="firstName"
                                            placeholder="Ken"
                                            required
                                            type="text"
                                            as={TextInput}
                                        />
                                        <ErrorMessage name="firstName" component="div" className="text-red-500" />
                                    </div>
                                    <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                        <Label htmlFor="number">UserName</Label>
                                        <Field
                                            id="number"
                                            name="userName"
                                            placeholder="micky"
                                            required
                                            type="text"
                                            as={TextInput}
                                        />
                                        <ErrorMessage name="userName" component="div" className="text-red-500" />
                                    </div>
                                    <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                        <Label htmlFor="email">Email</Label>
                                        <Field
                                            id="email"
                                            name="email"
                                            placeholder="mikcy123@gmail"
                                            required
                                            type="email"
                                            as={TextInput}
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500" />
                                    </div>
                                    <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                        <Label htmlFor="password">Password</Label>
                                        <Field
                                            id="password"
                                            name="password"
                                            placeholder="........."
                                            required
                                            type="password"
                                            as={TextInput}
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500" />
                                    </div>
                                    <div className="col-span-6">
                                        <Button type="submit" color="primary" className="bg-orange-100 text-white">
                                            Save all
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default YourFormComponent;
