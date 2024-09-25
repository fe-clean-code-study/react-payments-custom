interface Validate {
  validate: (value: any) => boolean;
  message: string;
}

function isValidateType(
  validate: Record<string, Validate> | Validate,
): validate is Validate {
  return (
    typeof validate.validate === 'function' &&
    typeof validate.message === 'string'
  );
}

export const validateHelper = (
  validate: Record<string, Validate> | Validate,
  value: any,
) => {
  if (isValidateType(validate)) {
    return validate.validate(value) ? true : validate.message;
  }

  for (const key in validate) {
    if (!validate[key].validate(value)) {
      return validate[key].message;
    }
  }
  return true;
};
