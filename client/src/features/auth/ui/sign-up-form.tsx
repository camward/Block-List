import { ROUTES } from '@/shared/constants/routes';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLink } from '@/shared/ui/ui-link';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { useSignUpForm } from '../model/use-sign-up-form';

export function SignUpForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignUpForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="E-mail"
        inputProps={{ type: 'email', ...register('email', { required: true }) }}
      />
      <UiTextField
        label="Пароль"
        inputProps={{
          type: 'password',
          ...register('password', { required: true }),
        }}
      />
      <UiButton disabled={isLoading} variant="primary">
        Зарегистрироваться
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_IN}>
        Войти
      </UiLink>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}
