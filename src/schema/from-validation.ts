import * as z from 'zod'

const EMAIL_MAX_LENGTH = 256;

export const emailBaseSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .max(
      EMAIL_MAX_LENGTH,
      `Email should not exceed ${EMAIL_MAX_LENGTH} characters`
    )
    .email("Please enter a valid email address")
})

export const formOneSchema = z.object({
    ...emailBaseSchema.shape,
})

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const schema = z.object({
})

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z
  .string({
    required_error: "Email is required",
  })
  .min(1, "Email is required")
  .max(
    EMAIL_MAX_LENGTH,
    `Email should not exceed ${EMAIL_MAX_LENGTH} characters`
    )
    .email("Please enter a valid email address")
    .optional(),
  phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  institution_type: z.string().min(2, {
    message: "institution type is required.",
  }),
  institution_name: z.string({
    required_error: "Institution name is required"
  }),
  job_role: z.string({
    required_error: "job role is required"
  }),
  department: z.string({
    required_error: "Department role is required"
  }),
  description: z.string({
    required_error: "Description is required"
  }),
  country: z.string({
    required_error: "Country is required"
  }),
})