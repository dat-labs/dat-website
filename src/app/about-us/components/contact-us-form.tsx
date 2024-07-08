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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

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
    label: "Company",
    description: "Please enter your company name.",
    placeholder: "Enter your company Name",
    message: "Company Name must be at least 2 characters.",
    required: false,
  },
  {
    type: "text",
    name: "designation",
    label: "Designation",
    description: "Please enter your designation.",
    placeholder: "Your current position in company",
    message: "Designation must be at least 2 characters.",
    required: false,
  },
  {
    type: "text",
    name: "profile",
    label: "LinkedIn Profile",
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
  company: z.string().min(2, {
    message: "Company Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

export function ContactUsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      company: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const renderFields = (field: any) => {
    return (
      <FormField
        control={form.control}
        name={field.name}
        render={({ field: hookFormField }) => (
          <FormItem>
            <FormLabel>{field.label}</FormLabel>
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
                    {...field}
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
