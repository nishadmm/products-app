export const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => (
  <button
    className='bg-primary text-white px-8 py-2 text-base transition1'
    onClick={() => onClick()}
  >
    {text}
  </button>
);
