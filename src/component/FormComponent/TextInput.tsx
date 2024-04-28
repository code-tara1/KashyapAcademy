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
            {leftIcon && (
              <InputLeftElement pointerEvents="none">
                {leftIcon}
              </InputLeftElement>
            )}
            {type === "textarea" ? (
              <Textarea
                border={"1px solid"}
                focusBorderColor={"primary.100"}
                borderRadius={0}
                borderColor={errors[name] ? "red.500" : "#D6D6D6"}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
              />
            ) : (
              <Input
                h={"52px"}
                border={"1px solid"}
                focusBorderColor={"primary.100"}
                borderRadius={0}
                borderColor={errors[name] ? "red.500" : "#D6D6D6"}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
              />
            )}
            {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
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
