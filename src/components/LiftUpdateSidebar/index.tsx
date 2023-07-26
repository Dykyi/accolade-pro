import React, { FC, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useGetLift, useUpdateLift } from '../../hooks';
import { LiftStatus } from '../../types/generated/graphqlScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Sidebar, Error, Button, LiftTrailCard, Select } from '../index';
import { updateStatus } from '../../schemas';

interface IProps {
  id?: string;
  hide: () => void;
}

const LiftUpdateSidebar: FC<IProps> = ({ id, hide }) => {
  const onSubmit = async ({ status }: { status: string }) => {
    if (id) {
      await update({
        variables: { id, status: status as LiftStatus },
      });
    }
    hide();
  };

  const { loading, error, data, refetch } = useGetLift({
    variables: { id },
    skip: Boolean(!id),
  });

  const { trailAccess, name, elevationGain, status } = data?.Lift || {};

  const { register, handleSubmit, reset } = useForm<{ status: string }>({
    defaultValues: useMemo(() => ({ status: status as string }), [status]),
    resolver: yupResolver(updateStatus),
  });

  useEffect(() => {
    reset({
      status: status as string,
    });
  }, [reset, status]);

  const [update, { loading: disabled, error: updateLiftError }] =
    useUpdateLift();

  return (
    <Sidebar
      isVisible={Boolean(id)}
      loading={loading}
      onClose={hide}
      className='top-0 bottom-0 right-0 bg-white w-[50%] animate-wiggle'
    >
      {error ? (
        <Error message={error?.message} retry={refetch} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center bg-white h-[100vh] '
        >
          <p className='mt-2 capitalize font-bold text-lg'>{name}</p>
          <p className='mt-2'>{`Elevation Gain: ${elevationGain}`}</p>
          <div className='flex grow-1 flex-col text-left mt-5 w-[40%]'>
            <label htmlFor='status' className='font-bold'>
              Update status
            </label>
            <Select
              values={Object.values(LiftStatus)}
              {...register('status')}
            />
          </div>

          <div className='flex flex-col w-[80%] mb-auto h-[55vh]'>
            <p className='mt-12 text-left font-bold'>Trail Access List</p>
            <div className='flex flex-col border-2 py-5 px-10 gap-2 max-h-[400px] overflow-y-scroll'>
              {trailAccess?.map((item) => (
                <LiftTrailCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          {updateLiftError && (
            <p className='py-3'>{updateLiftError?.message}</p>
          )}
          <div className='flex justify-around p-10 w-[80%] mt-auto'>
            <Button buttonType='secondary' onClick={hide} disabled={disabled}>
              cancel
            </Button>
            <Button type='submit' disabled={disabled}>
              save
            </Button>
          </div>
        </form>
      )}
    </Sidebar>
  );
};

export default LiftUpdateSidebar;
