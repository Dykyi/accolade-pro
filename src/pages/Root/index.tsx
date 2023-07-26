import React, { useCallback, useMemo, useState } from 'react';
import { useGetLifts } from '../../hooks';
import { LiftStatus } from '../../types/generated/graphqlScheme';
import LiftUpdateSidebar from '../../components/LiftUpdateSidebar';
import { Spinner, Error, Select, LiftCard } from '../../components';

type LiftFilterStatuses = LiftStatus | 'ALL';

function Root() {
  const [id, setId] = useState<string>('');

  const onHideModal = () => setId('');

  const { loading, error, data } = useGetLifts();

  const [filter, setFilter] = useState<LiftFilterStatuses>('ALL');

  const filtered = useMemo(() => {
    return filter === 'ALL'
      ? data?.allLifts
      : data?.allLifts?.filter(({ status }) => status === filter);
  }, [filter, data]);

  const onLiftStatusChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      setFilter(event.target.value as LiftFilterStatuses),
    []
  );

  const onLiftStatusEditShowModal = useCallback((id: string) => setId(id), []);

  if (loading) return <Spinner />;

  if (error) return <Error message={error.message} />;

  return (
    <>
      <main className='ml-auto mr-auto w-[60%] h-[100vh] pb-5'>
        <div className='relative flex justify-end items-center mb-2 h-[70px]'>
          <p className='absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] uppercase font-bold'>
            Lifts list
          </p>
          <div className='flex flex-col items-start justify-evenly'>
            <p>Filter per status</p>
            <Select
              className='border-2 p-1 rounded-md w-[200px]'
              onChange={onLiftStatusChange}
              defaultValue={'ALL'}
              values={['ALL', ...Object.values(LiftStatus)]}
            />
          </div>
        </div>
        <div className='flex flex-col border-2 px-10 py-5 gap-4 h-[calc(100%-70px)] overflow-y-scroll'>
          {filtered?.map((lift) => (
            <LiftCard
              key={lift.id}
              onEdit={onLiftStatusEditShowModal}
              {...lift}
            />
          ))}
        </div>
      </main>
      <LiftUpdateSidebar id={id} hide={onHideModal} />
    </>
  );
}

export default Root;
