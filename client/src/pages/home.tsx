import {useQuery} from "@tanstack/react-query";
import {authControllerGetSessionInfo} from "@/shared/api/generated";
import {UiButton} from "@/shared/ui/ui-button";
import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiSelectField} from "@/shared/ui/ui-select-field";
import {UiLink} from "@/shared/ui/ui-link";
import {UiSpinner} from "@/shared/ui/ui-spinner";
import {UiHeader} from "@/shared/ui/ui-header";
import {SignOutButton} from "@/features/auth";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo()
  });

  return (
    <div
      className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      <UiHeader right={(
          <div>
            E-mail: {data?.email}
            <SignOutButton />
          </div>
      )} />
      <UiButton variant="primary">primary</UiButton>
      <UiButton variant="primary" disabled>disabled primary</UiButton>
      <UiButton variant="secondary">secondary</UiButton>
      <UiButton variant="secondary" disabled>disabled secondary</UiButton>
      <UiButton variant="outlined">outlined</UiButton>
      <UiButton variant="outlined" disabled>disabled outlined</UiButton>
      <UiTextField label="Input" inputProps={{placeholder: 'text'}} />
      <UiTextField label="Input Error" error="Error text" inputProps={{placeholder: 'error'}} />
      <UiSelectField
          label="select"
          options={[
            { label: 'select 1', value: '1' },
            { label: 'select 2', value: '2' },
            { label: 'select 3', value: '3' },
          ]}
          error="Error text"
      />
      <UiLink href="#">Link</UiLink>
      <UiSpinner className="text-teal-600 w-10 h-10" />
    </div>
  );
}
