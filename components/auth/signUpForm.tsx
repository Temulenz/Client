"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  email: z.email(),
});

interface SignUpFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleNextStep: () => void;
}

export const SignUpForm = ({
  email,
  setEmail,
  handleNextStep,
}: SignUpFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setEmail(values.email);
    handleNextStep();
  }

  return (
    <div className="w-[416px] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="text-[24px] font-semibold">
                  Create your acount
                </div>
                <FormDescription>
                  Sign up to explore your favorite dishes.
                </FormDescription>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-[416px]" type="submit">
            Let's go
          </Button>
        </form>
      </Form>
      <div className="flex justify-center py-4">
        <div>Already have an account?</div>
        <div className="ml-4 text-blue-600">Log in</div>
      </div>
    </div>
  );
};
