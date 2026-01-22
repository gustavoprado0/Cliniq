import { useMutation } from "@tanstack/react-query";
import { RegisterFormData } from "../validators/register.validator";
import { http } from "@/features/shared/http";

export function useRegister() {
  return useMutation({
    mutationFn: async (data: Omit<RegisterFormData, "confirmPassword">) => {
      const response = await http.post("/register", data);
      return response.data;
    },
  });
}
