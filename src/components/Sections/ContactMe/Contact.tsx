import React, { useEffect, useRef } from "react";
import Section from "../../utils/Section";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";
const ContactSection = () => {
  const [state, handleSubmit] = useForm("xpzgaldq");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message Sent Successfully");
      formRef.current?.reset();
    }
  }, [state.succeeded]);
  return (
    <Section>
      <h2 className="text-3xl pl-8 md:text-5xlfont-bold text-center text-white italic">
        Let's Connect
      </h2>
      <div className="mt-8 p-8 rounded-md bg-white w-full max-w-xl bg-opacity-70 md:bg-opacity-80">
        <form onSubmit={handleSubmit} ref={formRef}>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            disabled={state.submitting}
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
export default ContactSection;
