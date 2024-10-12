import { UiSelectField } from '@/shared/ui/ui-select-field';
import { useAddBlockItemForm } from '../model/use-add-block-item-form';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { UiButton } from '@/shared/ui/ui-button';
import { AddBlockItemDtoType } from '@/shared/api/generated';

const typeOptions = [
  { label: 'Сайт', value: AddBlockItemDtoType.Website },
  { label: 'Ключевое слово', value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type, data } =
    useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{
          ...register('type'),
        }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === 'KeyWord'
              ? 'Введите ключевое слово'
              : 'Введите название сайта',
          ...register('data'),
        }}
      />
      <UiButton
        className="min-w-[220px]"
        variant="primary"
        disabled={isLoading || !data}
      >
        Добавить блокировку
      </UiButton>
    </form>
  );
}
