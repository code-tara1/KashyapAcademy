/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { Control, Controller, FieldErrors } from "react-hook-form";
type InputProps = {
  label?: string;
  isRequired?: boolean;
  type?: string;
  placeholder?: string;
  name: string;
  control?: Control<any>;
  leftIcon?: any;
  rightIcon?: any;
  errors: FieldErrors;
};

export const TextInput = ({
  label,
  isRequired,
  type,
  placeholder,
  leftIcon,
  rightIcon,
  name,
  control,
  errors,
}: InputProps) => {
  return (
    <FormControl mb={4} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputGroup>
            <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
            {type === "textarea" ? (
              <Textarea
                placeholder={placeholder}
                onChange={onChange}
                value={value}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
              />
            )}

            <InputRightElement>{rightIcon}</InputRightElement>
          </InputGroup>
        )}
      />
      {errors[name] && (
        <FormHelperText
          color="red"
          fontSize="14px"
          fontStyle={"italic"}
          fontWeight={450}
        >
          {(errors[name] as any).message}
        </FormHelperText>
      )}
    </FormControl>
  );
};
