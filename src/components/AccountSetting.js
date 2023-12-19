"use client"
import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { HiCloudUpload } from "react-icons/hi";
import Image from "next/image";

export default function AccountSetting() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-between">
                <div className="w-96 mb-10 mt-0">
                    <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
                        {/*<Image*/}
                        {/*    alt=""*/}
                        {/*    src="https://wp-api.zipmex.com/wp-content/uploads/2021/12/NFT-marketplace.jpg"*/}
                        {/*    className="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"*/}
                        {/*    width={100} height={100}*/}
                        {/*/>*/}
                        <div>
                            <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                                Kim Ken
                            </h3>
                            <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Software Engineer
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
                    <Card>
                        <h3 className="mb-4 text-xl font-bold dark:text-white">
                            General information
                        </h3>
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <TextInput
                                        id="last-name"
                                        name="last-name"
                                        placeholder="Kim"
                                        required
                                    />
                                </div>
                                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                    <Label htmlFor="first-name">First Name</Label>
                                    <TextInput
                                        id="first-name"
                                        name="first-name"
                                        placeholder="Ken"
                                        required
                                    />
                                </div>

                                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                    <Label htmlFor="country">Gender</Label>
                                    <div className="mb-1 grid grid-cols-1 gap-y-2">

                                        <Select id="settings-language" name="settings-language">
                                            <option>---</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                    <Label htmlFor="number">Phone Number</Label>
                                    <TextInput
                                        id="number"
                                        name="number"
                                        placeholder="+855 87 654 536"
                                        required
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
                                    />
                                </div>
                                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                    <Label htmlFor="address">Address</Label>
                                    <TextInput
                                        id="address"
                                        name="address"
                                        placeholder="Phnom Penh"
                                        required
                                    />
                                </div>
                                <div className="col-span-6">
                                    <Button color="primary" className="bg-orange-100 text-white ">Save all</Button>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}