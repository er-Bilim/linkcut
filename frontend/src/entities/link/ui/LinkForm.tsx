import type { ISourceLink } from '../types/link.types';
import { Controller, useForm } from 'react-hook-form';
import styles from './LinkForm.module.css';
import type { FC } from 'react';

interface ILinkForm {
  handleSendLink: (data: ISourceLink) => Promise<void>;
}

const LinkForm: FC<ILinkForm> = ({ handleSendLink }) => {
  const defaultValues: ISourceLink = {
    originalUrl: '',
  };

  const { control, handleSubmit, reset } = useForm<ISourceLink>({
    defaultValues,
  });

  const onSubmit = async (data: ISourceLink) => {
    await handleSendLink(data).then(() => reset());
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formBlock}>
            <Controller
              name="originalUrl"
              control={control}
              rules={{
                required: 'URL is required',
                minLength: {
                  value: 5,
                  message: '',
                },
                validate: (value) =>
                  value.trim().length !== 0 || 'URL is required',
              }}
              render={({ field, fieldState }) => (
                <>
                  <div className={styles.inputBlock}>
                    <input
                      {...field}
                      type="url"
                      required
                      title="url"
                      className={styles.input}
                      placeholder="URL"
                    />
                    {fieldState.error && (
                      <p className={styles.error}>{fieldState.error.message}</p>
                    )}
                  </div>
                </>
              )}
            />
            <button type="submit" title="shorter" className={styles.formButton}>
              shorten
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LinkForm;
