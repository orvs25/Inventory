"use client";

import {
    CreateConsumablesSchema,
    createConsumablesSchema,
} from "@/lib/validation/consumables";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Nav from "@/app/sidenav/Nav";
import Side from "@/app/sidenav/Side";


export default function CreateConsumables() {
    const form = useForm<CreateConsumablesSchema>({
        resolver: zodResolver(createConsumablesSchema),
        defaultValues: {
            name: "",
            category: "",
            modelNo: "",
            manufacturer: "",
            itemNumber: "",
            location: "",
            orderNumber: "",
            purchaseDate: "",
            purchaseCost: "",
            quantity: "",
        },
    });

    async function handleOnSubmit(input: CreateConsumablesSchema) {
        const response = await fetch("/api/consumables", {
            method: "POST",
            body: JSON.stringify(input),
        });

        if (!response.ok) throw Error("Status code: " + response.status);
    }

    return (
        <div className="flex min-h-screen w-full flex-col ">
            <Nav />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                
                <main className="flex items-center justify-center py-5">
                    <div className="mx-auto grid w-[600px] gap-6">
                        <h1 className="text-3xl font-bold">Create New Consumables</h1>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="...." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="modelNo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Model No.</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="manufacturer"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Manufacturer</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="itemNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Item Number</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Location</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="orderNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Order Number</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="purchaseDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Purchase Date</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="purchaseCost"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Purchase Cost</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Quantity</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className=" mt-4" type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </main>
            </div>
        </div>
    );
}
