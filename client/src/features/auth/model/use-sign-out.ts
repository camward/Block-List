import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
    const router = useRouter();

    const singOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        onSuccess() {
            router.push(ROUTES.SIGN_IN);
        },
    });

    return {
        isLoading: singOutMutation.isPending,
        singOut: singOutMutation.mutate,
    };
}