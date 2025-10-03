import { z } from "zod";

export type productType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: { [key: string]: string };
}

export type productsType = productType[]

export interface HomePageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

export interface ProductPageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

export type CartItemType = productType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.email().min(1, "Email is required!"),
    phone: z
        .string()
        .regex(/^\d+$/, "Phone number must contain only digits")
        .min(7, "Phone number must be between 7 and 10 digits!")
        .max(10, "Phone number must be between 7 and 10 digits!"),
    address: z.string().min(1, "Address is required!"),
    city: z.string().min(1, "City is required!"),
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>

export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, "Card holder is required!"),
    cardNumber: z.string().min(16, "Card number is required!").max(16, "Card number must be 16 digits!"),
    expirationDate: z
        .string()
        .regex(/^(0[1-9] | 1[0-2])\/\d{2}$/, "Expiration date must be in the format MM/YY"),
    cvv: z.string().min(3, "CVV must be 3 digits!").max(4, "CVV must be 4 digits!"),
})

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>
