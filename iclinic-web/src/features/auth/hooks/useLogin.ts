import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth.service";
import { LoginDTO } from "../dtos/login.dto";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginDTO) => AuthService.login(data),
  });
}
