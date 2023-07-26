import * as yup from 'yup';

export const updateStatus = yup
  .object({
    status: yup.string().required(),
  })
  .required();
