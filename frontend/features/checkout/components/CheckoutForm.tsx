'use client';

import { Button } from "@/shared/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";
import { useCheckout } from "../hooks/useCheckout";
import { Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

export const CheckoutForm = () => {
    const router = useRouter();

    const {
        register,
        control,
        handleSubmit,
        onSubmit,
        formState: { errors }
    } = useCheckout();

    return (
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>        
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>Checkout Info</FieldLegend>
                    <FieldDescription>
                        All transactions are secure and encrypted
                    </FieldDescription>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                            Name on Card
                            </FieldLabel>
                            <Input
                                id="checkout-7j9-card-name-43j"
                                placeholder="Nude Project"
                                { ...register('cardName')}
                                required
                            />
                            {errors.cardName && (
                                <FieldError>{errors.cardName.message}</FieldError>
                            )}
                            </Field>
                            <Field>
                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                Card Number
                            </FieldLabel>
                            <Input
                                id="checkout-7j9-card-number-uw1"
                                placeholder="1234 5678 9012 3456"
                                { ...register('cardNumber')}
                                required
                            />
                            {errors.cardNumber && (
                                <FieldError>{errors.cardNumber.message}</FieldError>
                            )}
                            <FieldDescription>
                                Enter your 16-digit card number
                            </FieldDescription>
                        </Field>
                        <div className="grid grid-cols-3 gap-4">
                            <Field>
                                <FieldLabel htmlFor="checkout-exp-month-ts6">
                                    Month
                                </FieldLabel>
                                <Controller name='month' control={control} render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger id="checkout-exp-month-ts6">
                                                <SelectValue placeholder="MM" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="01">01</SelectItem>
                                                        <SelectItem value="02">02</SelectItem>
                                                        <SelectItem value="03">03</SelectItem>
                                                        <SelectItem value="04">04</SelectItem>
                                                        <SelectItem value="05">05</SelectItem>
                                                        <SelectItem value="06">06</SelectItem>
                                                        <SelectItem value="07">07</SelectItem>
                                                        <SelectItem value="08">08</SelectItem>
                                                        <SelectItem value="09">09</SelectItem>
                                                        <SelectItem value="10">10</SelectItem>
                                                        <SelectItem value="11">11</SelectItem>
                                                        <SelectItem value="12">12</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                        </Select>
                                    )}
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                                    Year
                                </FieldLabel>
                                <Controller name='year' control={control} render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger id="checkout-7j9-exp-year-f59">
                                            <SelectValue placeholder="YYYY" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="2024">2024</SelectItem>
                                                <SelectItem value="2025">2025</SelectItem>
                                                <SelectItem value="2026">2026</SelectItem>
                                                <SelectItem value="2027">2027</SelectItem>
                                                <SelectItem value="2028">2028</SelectItem>
                                                <SelectItem value="2029">2029</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                                <Input id="checkout-7j9-cvv" placeholder="123" { ...register('cvv') } required />
                                {errors.cvv && ( <FieldError>{errors.cvv.message}</FieldError>)}
                            </Field>
                        </div>
                    </FieldGroup>
                </FieldSet>
                <FieldSeparator />
                <FieldSet>
                    <FieldLegend>Shipping Address</FieldLegend>
                    <FieldDescription>
                        Where should we send your order?
                    </FieldDescription>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="shipping-address-line1">
                                Address line 1
                            </FieldLabel>
                            <Input
                                id="shipping-address-line1"
                                placeholder="Street, number"
                                { ...register('address1') }
                                required
                            />
                            {errors.address1 && ( <FieldError>{errors.address1.message}</FieldError>)}
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="shipping-address-line2">
                                Address line 2 (optional)
                            </FieldLabel>
                            <Input
                                id="shipping-address-line2"
                                placeholder="Apartment, floor, etc."
                                { ...register('address2') }
                            />
                            {errors.address2 && ( <FieldError>{errors.address2.message}</FieldError>)}
                        </Field>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Field>
                                <FieldLabel htmlFor="shipping-city">
                                    City
                                </FieldLabel>
                                <Input
                                    id="shipping-city"
                                    placeholder="City"
                                    { ...register('city') }
                                    required
                                />
                                {errors.city && ( <FieldError>{errors.city.message}</FieldError>)}
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="shipping-state">
                                    State / Province
                                </FieldLabel>
                                <Input
                                    id="shipping-state"
                                    placeholder="State or province"
                                    { ...register('state')}
                                    required
                                />
                                {errors.state && ( <FieldError>{errors.state.message}</FieldError>)}
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="shipping-zip">
                                    ZIP / Postal code
                                </FieldLabel>
                                <Input
                                    id="shipping-zip"
                                    placeholder="ZIP / Postal code"
                                    { ...register('postalCode')}
                                    required
                                />
                                {errors.postalCode && ( <FieldError>{errors.postalCode.message}</FieldError>)}
                            </Field>
                        </div>
                        <Field>
                            <FieldLabel htmlFor="shipping-country">
                                Country
                            </FieldLabel>
                            <Input
                                id="shipping-country"
                                placeholder="Country"
                                { ...register('country') }
                                required
                            />
                            {errors.country && ( <FieldError>{errors.country.message}</FieldError>)}
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                Comments
                            </FieldLabel>
                            <Textarea
                                id="checkout-7j9-optional-comments"
                                placeholder="Add any additional comments"
                                className="resize-none"
                                { ...register('comments') }
                            />
                            {errors.comments && ( <FieldError>{errors.comments.message}</FieldError>)}
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <Field orientation="horizontal">
                    <Button type="submit">Submit</Button>
                    <Button variant="outline" type="button" onClick={() => router.push('/cart')}>
                        Cancel
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
};