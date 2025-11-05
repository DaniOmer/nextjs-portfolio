import { useEffect } from "react";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

import { serviceTypes } from "@/data/services";
import contactFormSchema from "./contactFormSchema";
import { useContact } from "@/hooks/useContact";
import { ServiceType } from "@/types";

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: "",
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    mutate: sendContactMessage,
    isPending,
    error,
  } = useContact({
    onSuccess: () => form.reset(),
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    const { type, name, email, message } = data;
    sendContactMessage({
      type: type as ServiceType,
      name,
      email,
      message,
    });
  };

  return (
    <Card className="!border-none bg-transparent shadow-none">
      <CardContent className="px-0">
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="type"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Service type</FieldLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="py-6">
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Services</SelectLabel>
                        {serviceTypes.map((service, index) => (
                          <SelectItem key={index} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Select>
                </Field>
              )}
            />
            <div className="flex gap-4">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="name">Your name</FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your name"
                      className="py-6"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="email">Your email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your email"
                      className="py-6"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="message">Project details</FieldLabel>
                  <Textarea
                    {...field}
                    id="message"
                    rows={6}
                    aria-invalid={fieldState.invalid}
                    placeholder="What's your project idea ?"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        {error && (
          <Alert variant="destructive" className="flex gap-3 items-center mt-4">
            <div>
              <AlertCircleIcon />
            </div>
            <AlertTitle>{error.message}</AlertTitle>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="px-0">
        <Button
          type="submit"
          form="contact-form"
          variant="outline"
          className="px-6"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ContactForm;
