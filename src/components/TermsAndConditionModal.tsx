import { useEffect, useRef, useState } from 'react';

import { PrimaryButton } from '../utilities/buttons';

type PageProps = {
  state: boolean;
  setState: () => void;
};

const TermsAndConditionModal = ({ state, setState }: PageProps) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickInside = () => setClickedOutside(false);
  const handleClickOutside = (e: MouseEvent) => {
    if (!modalRef.current?.contains(e.target as Node)) {
      setClickedOutside(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  useEffect(() => {
    if (clickedOutside) {
      setState();
    }
  }, [clickedOutside, setState]);

  return (
    <>
      {state ? (
        <>
          <div className='flexCenter overflow-y-auto rounded-lg fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative my-6 mx-auto rounded-lg'>
              <div
                ref={modalRef}
                onClick={handleClickInside}
                className='max-h-[90vh] shadow-2xl animate-TopToBottom overflow-y-scroll text-black border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'
              >
                <div className='text-black font-bold  bg-white rounded-lg min-w-fit 500px:min-w-550px p-6 max-w-xl'>
                  <h1 className='uppercase text-2xl mb-3'>
                    Terms & conditions
                  </h1>
                  <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet illo, vero temporibus minus voluptatibus facilis
                    adipisci quasi cumque cupiditate ipsa ullam, excepturi quos
                    dicta, aliquam omnis praesentium nobis error nihil.
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet illo, vero temporibus minus voluptatibus facilis
                    adipisci quasi cumque cupiditate ipsa ullam, excepturi quos
                    dicta, aliquam omnis praesentium nobis error nihil.
                    <br /> <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet illo, vero temporibus minus voluptatibus facilis
                    adipisci quasi cumque cupiditate ipsa ullam, excepturi quos
                    dicta, aliquam omnis praesentium nobis error nihil.
                  </p>
                  <div className='flex justify-around items-center my-4'>
                    <PrimaryButton text='Cancel' onClick={() => setState()} />
                    <PrimaryButton
                      text='Accept'
                      onClick={() => {
                        setState();
                        localStorage.setItem(
                          'terms&conditions',
                          JSON.stringify({ accepted: true })
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-30 fixed inset-0 z-40 bg-black' />
        </>
      ) : null}
    </>
  );
};

export default TermsAndConditionModal;
