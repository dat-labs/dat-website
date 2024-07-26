"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const FormElements = [
  {
    type: "text",
    name: "full_name",
    label: "Full Name",
    description: "This is your public display name.",
    placeholder: "Enter your full Name",
    message: "Full Name must be at least 2 characters.",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "E-Mail Address",
    description: "Please enter your email address.",
    placeholder: "Provide Email Address",
    message: "Enter a valid email address.",
    required: true,
  },
  {
    type: "text",
    name: "company",
    label: "Company (OPTIONAL)",
    description: "Please enter your company name.",
    placeholder: "Enter your company Name",
    message: "Company Name must be at least 2 characters.",
    required: false,
  },
  {
    type: "text",
    name: "designation",
    label: "Designation (OPTIONAL)",
    description: "Please enter your designation.",
    placeholder: "Your current position in company",
    message: "Designation must be at least 2 characters.",
    required: false,
  },
  {
    type: "text",
    name: "profile",
    label: "LinkedIn Profile (OPTIONAL)",
    description: "Please enter your LinkedIn profile URL.",
    placeholder: "Mention your LinkedIn profile URL",
    message: "LinkedIn Profile must be at least 2 characters.",
    required: false,
  },
  {
    type: "textArea",
    name: "description",
    label: "Description",
    description: "Please enter your message.",
    placeholder: "What can we help you with ?",
    message: "Description must be at least 2 characters.",
    required: true,
  },
];

const FormSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  company: z
    .string()
    .min(2, {
      message: "Company Name must be at least 2 characters.",
    })
    .nullable()
    .optional(),
  designation: z
    .string()
    .min(3, {
      message: "Designation must be at least 3 characters.",
    })
    .nullable()
    .optional(),
  profile: z
    .string()
    .min(10, {
      message: "LinkedIn Profile link must be at least 10 characters.",
    })
    .nullable()
    .optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

const defaultValues = {
  full_name: "",
  email: "",
  company: undefined,
  designation: undefined,
  profile: undefined,
  description: "",
};

export function ContactUsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    var templateParams = {
      email: data.email,
      name: data.full_name,
      company: data.company,
      designation: data.designation,
      linkedIn: data.profile,
      subject: `Message from ${data.full_name}`,
      message: data.description,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then((response) => {
        toast.success("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        toast.error("Message submission failed.");
        console.log(error);
      });
  }

  const renderFields = (field: any) => {
    return (
      <FormField
        control={form.control}
        name={field.name}
        render={({ field: hookFormField }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              {field.label}
              {field.required && <p className="text-[#DC2626] text-lg">*</p>}
            </FormLabel>
            <FormControl>
              {field.type === "text" || field.type === "email" ? (
                <Input
                  placeholder={field.placeholder}
                  type={field.type}
                  {...hookFormField}
                />
              ) : (
                field.type === "textArea" && (
                  <Textarea
                    placeholder={field.placeholder}
                    className="resize-none"
                    {...hookFormField}
                  />
                )
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  const renderForm = () => {
    return FormElements.map((field) => {
      return renderFields(field);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {renderForm()}
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
}
