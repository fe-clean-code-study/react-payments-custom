interface Validate {
  validate: (value: string) => boolean;
  message: string;
}

export const validateHelper = (
  validate: Record<string, Validate>,
  value: string,
) => {
  for (const key in validate) {
    if (!validate[key].validate(value)) {
      return validate[key].message;
    }
  }
  return true;
};
