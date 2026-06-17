// import { motion, AnimatePresence } from "framer-motion";
// import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
// import { useState } from "react";
// import type { FormEvent } from "react";
// import { profile } from "../data/portfolio";
// import { AnimatedSection } from "./sections/AnimatedSection";

// type FormState = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// const initial: FormState = { name: "", email: "", subject: "", message: "" };

// export function Contact() {
//   const [form, setForm] = useState<FormState>(initial);
//   const [sending, setSending] = useState(false);
//   const [sent, setSent] = useState(false);
//   const [focused, setFocused] = useState<string | null>(null);

//   const update =
//     (k: keyof FormState) =>
//     (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//       setForm((f) => ({ ...f, [k]: e.target.value }));

//   const onSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (sending || sent) return;
//     setSending(true);
//     // Simulate async send
//     window.setTimeout(() => {
//       setSending(false);
//       setSent(true);
//       window.setTimeout(() => {
//         setSent(false);
//         setForm(initial);
//       }, 2400);
//     }, 1200);
//   };

//   return (
//     <AnimatedSection id="contact" className="section">
//       <div className="container-x">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
//           {/* Left */}
//           <div className="lg:col-span-5">
//             <motion.h2
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
//             >
//               Let's build <span className="text-gradient">something</span>{" "}
//               together.
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="mt-4 max-w-md text-base md:text-lg"
//               style={{ color: "var(--text-muted)" }}
//             >
//               Got a project, a role, or just a wild idea? Drop a message — I
//               usually reply within a day or two.
//             </motion.p>

//             <ul className="mt-8 space-y-3">
//               {[
//                 {
//                   Icon: Mail,
//                   label: "Email",
//                   value: profile.email,
//                   href: `mailto:${profile.email}`,
//                 },
//                 {
//                   Icon: Phone,
//                   label: "Phone",
//                   value: profile.phone,
//                   href: `tel:${profile.phone.replace(/\s/g, "")}`,
//                 },
//                 {
//                   Icon: MapPin,
//                   label: "Based in",
//                   value: profile.location,
//                   href: undefined,
//                 },
//               ].map((c, i) => (
//                 <motion.li
//                   key={c.label}
//                   initial={{ opacity: 0, x: -16 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
//                 >
//                   {c.href ? (
//                     <a
//                       href={c.href}
//                       className="card group flex items-center gap-4 p-4"
//                       data-cursor="hover"
//                     >
//                       <span
//                         className="grid h-10 w-10 place-items-center rounded-xl text-white transition-transform group-hover:scale-110 group-hover:rotate-6"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, var(--brand), var(--brand-2))",
//                         }}
//                       >
//                         <c.Icon size={16} />
//                       </span>
//                       <div>
//                         <div
//                           className="text-xs uppercase tracking-wider"
//                           style={{ color: "var(--text-faint)" }}
//                         >
//                           {c.label}
//                         </div>
//                         <div
//                           className="font-medium"
//                           style={{ color: "var(--text)" }}
//                         >
//                           {c.value}
//                         </div>
//                       </div>
//                     </a>
//                   ) : (
//                     <div className="card flex items-center gap-4 p-4">
//                       <span
//                         className="grid h-10 w-10 place-items-center rounded-xl text-white"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, var(--brand), var(--brand-2))",
//                         }}
//                       >
//                         <c.Icon size={16} />
//                       </span>
//                       <div>
//                         <div
//                           className="text-xs uppercase tracking-wider"
//                           style={{ color: "var(--text-faint)" }}
//                         >
//                           {c.label}
//                         </div>
//                         <div
//                           className="font-medium"
//                           style={{ color: "var(--text)" }}
//                         >
//                           {c.value}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Form */}
//           <motion.form
//             onSubmit={onSubmit}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="card relative overflow-hidden p-6 md:p-8 lg:col-span-7"
//           >
//             <AnimatePresence>
//               {sent && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center"
//                   style={{
//                     background: "var(--surface-strong)",
//                     backdropFilter: "blur(8px)",
//                   }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0.5, rotate: -30 }}
//                     animate={{ scale: 1, rotate: 0 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 16 }}
//                     className="grid h-16 w-16 place-items-center rounded-full text-white"
//                     style={{
//                       background: "linear-gradient(135deg, #22c55e, #16a34a)",
//                     }}
//                   >
//                     <Check size={28} />
//                   </motion.div>
//                   <div className="mt-4 font-display text-xl font-semibold">
//                     Message sent!
//                   </div>
//                   <div
//                     className="mt-1 text-sm"
//                     style={{ color: "var(--text-muted)" }}
//                   >
//                     I'll get back to you soon.
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <Field
//                 label="Name"
//                 name="name"
//                 value={form.name}
//                 onChange={update("name")}
//                 onFocus={() => setFocused("name")}
//                 onBlur={() => setFocused(null)}
//                 focused={focused === "name"}
//                 required
//               />
//               <Field
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={update("email")}
//                 onFocus={() => setFocused("email")}
//                 onBlur={() => setFocused(null)}
//                 focused={focused === "email"}
//                 required
//               />
//             </div>
//             <div className="mt-4">
//               <Field
//                 label="Subject"
//                 name="subject"
//                 value={form.subject}
//                 onChange={update("subject")}
//                 onFocus={() => setFocused("subject")}
//                 onBlur={() => setFocused(null)}
//                 focused={focused === "subject"}
//                 required
//               />
//             </div>
//             <div className="mt-4">
//               <Field
//                 label="Message"
//                 name="message"
//                 value={form.message}
//                 onChange={update("message")}
//                 onFocus={() => setFocused("message")}
//                 onBlur={() => setFocused(null)}
//                 focused={focused === "message"}
//                 textarea
//                 required
//               />
//             </div>

//             <div className="mt-6 flex items-center justify-between">
//               <p className="text-xs" style={{ color: "var(--text-faint)" }}>
//                 I respect your privacy — no spam, ever.
//               </p>
//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 disabled={sending}
//                 className="btn btn-primary group"
//               >
//                 {sending ? (
//                   <>
//                     <span
//                       className="spinner h-4 w-4"
//                       style={{ borderWidth: 2 }}
//                     />
//                     Sending…
//                   </>
//                 ) : (
//                   <>
//                     Send message
//                     <Send
//                       size={15}
//                       className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                     />
//                   </>
//                 )}
//               </motion.button>
//             </div>
//           </motion.form>
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }

// interface FieldProps {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => void;
//   onFocus?: () => void;
//   onBlur?: () => void;
//   focused?: boolean;
//   type?: string;
//   required?: boolean;
//   textarea?: boolean;
// }

// function Field({
//   label,
//   name,
//   value,
//   onChange,
//   onFocus,
//   onBlur,
//   focused,
//   type = "text",
//   required,
//   textarea,
// }: FieldProps) {
//   const filled = value.length > 0;
//   const float = focused || filled;

//   const Tag: any = textarea ? "textarea" : "input";
//   const extraProps = textarea ? { rows: 5 } : { type };

//   return (
//     <div className="relative">
//       <motion.label
//         htmlFor={name}
//         animate={{
//           y: float ? -22 : 0,
//           scale: float ? 0.85 : 1,
//           color: focused ? "var(--brand)" : "var(--text-faint)",
//         }}
//         transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
//         style={{ transformOrigin: "left top" }}
//         className="pointer-events-none absolute left-3 top-3.5 z-10 px-1 text-sm"
//       >
//         {label}
//       </motion.label>

//       <Tag
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={onFocus}
//         onBlur={onBlur}
//         required={required}
//         {...extraProps}
//         className="peer w-full rounded-xl px-3 pt-5 pb-2 text-sm outline-none transition-all"
//         style={{
//           background: "var(--surface)",
//           border: `1px solid ${focused ? "var(--brand)" : "var(--border-strong)"}`,
//           boxShadow: focused ? "0 0 0 4px var(--ring)" : "none",
//           color: "var(--text)",
//           resize: textarea ? "vertical" : undefined,
//         }}
//       />
//     </div>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../data/portfolio";
import { AnimatedSection } from "./sections/AnimatedSection";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (sending || sent) return;
    setSending(true);
    // Simulate async send
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      window.setTimeout(() => {
        setSent(false);
        setForm(initial);
      }, 2400);
    }, 1200);
  };

  return (
    <AnimatedSection id="contact" className="section">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
            >
              Let's build <span className="text-gradient">something</span>{" "}
              together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-md text-base md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Got a project, a role, or just a wild idea? Drop a message — I
              usually reply within a day or two.
            </motion.p>

            <ul className="mt-8 space-y-3">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: profile.phone,
                  href: `tel:${profile.phone.replace(/\s/g, "")}`,
                },
                {
                  Icon: MapPin,
                  label: "Based in",
                  value: profile.location,
                  href: undefined,
                },
              ].map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  {c.href ? (
                    <a
                      href={c.href}
                      className="card group flex items-center gap-4 p-4"
                      data-cursor="hover"
                    >
                      <span
                        className="grid h-10 w-10 place-items-center rounded-xl text-white transition-transform group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--brand), var(--brand-2))",
                        }}
                      >
                        <c.Icon size={16} />
                      </span>
                      <div>
                        <div
                          className="text-xs uppercase tracking-wider"
                          style={{ color: "var(--text-faint)" }}
                        >
                          {c.label}
                        </div>
                        <div
                          className="font-medium"
                          style={{ color: "var(--text)" }}
                        >
                          {c.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4 p-4">
                      <span
                        className="grid h-10 w-10 place-items-center rounded-xl text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--brand), var(--brand-2))",
                        }}
                      >
                        <c.Icon size={16} />
                      </span>
                      <div>
                        <div
                          className="text-xs uppercase tracking-wider"
                          style={{ color: "var(--text-faint)" }}
                        >
                          {c.label}
                        </div>
                        <div
                          className="font-medium"
                          style={{ color: "var(--text)" }}
                        >
                          {c.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card relative overflow-hidden p-6 md:p-8 lg:col-span-7"
          >
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center"
                  style={{
                    background: "var(--surface-strong)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.5, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    className="grid h-16 w-16 place-items-center rounded-full text-white"
                    style={{
                      background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    }}
                  >
                    <Check size={28} />
                  </motion.div>
                  <div className="mt-4 font-display text-xl font-semibold">
                    Message sent!
                  </div>
                  <div
                    className="mt-1 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    I'll get back to you soon.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={update("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                focused={focused === "name"}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                focused={focused === "email"}
                required
              />
            </div>
            <div className="mt-4">
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={update("subject")}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                focused={focused === "subject"}
                required
              />
            </div>
            <div className="mt-4">
              <Field
                label="Message"
                name="message"
                value={form.message}
                onChange={update("message")}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                focused={focused === "message"}
                textarea
                required
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs" style={{ color: "var(--text-faint)" }}>
                I respect your privacy — no spam, ever.
              </p>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={sending}
                className="btn btn-primary group"
              >
                {sending ? (
                  <>
                    <span
                      className="spinner h-4 w-4"
                      style={{ borderWidth: 2 }}
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  focused?: boolean;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}

function Field({
  label,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  focused,
  type = "text",
  required,
  textarea,
}: FieldProps) {
  const filled = value.length > 0;
  const float = focused || filled;

  // Extract shared props to keep the JSX clean and avoid repetition
  const sharedProps = {
    id: name,
    name,
    value,
    onChange,
    onFocus,
    onBlur,
    required,
    className:
      "peer w-full rounded-xl px-3 pt-5 pb-2 text-sm outline-none transition-all",
    style: {
      background: "var(--surface)",
      border: `1px solid ${focused ? "var(--brand)" : "var(--border-strong)"}`,
      boxShadow: focused ? "0 0 0 4px var(--ring)" : "none",
      color: "var(--text)",
    },
  };

  return (
    <div className="relative">
      <motion.label
        htmlFor={name}
        animate={{
          y: float ? -22 : 0,
          scale: float ? 0.85 : 1,
          color: focused ? "var(--brand)" : "var(--text-faint)",
        }}
        transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
        style={{ transformOrigin: "left top" }}
        className="pointer-events-none absolute left-3 top-3.5 z-10 px-1 text-sm"
      >
        {label}
      </motion.label>

      {/* Conditionally render the correct element with its specific props */}
      {textarea ? (
        <textarea
          {...sharedProps}
          rows={5}
          style={{ ...sharedProps.style, resize: "vertical" }}
        />
      ) : (
        <input {...sharedProps} type={type} />
      )}
    </div>
  );
}
