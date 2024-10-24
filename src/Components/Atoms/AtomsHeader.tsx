interface Props {
  smallText: string;
  bigText: string;
}

export default function AtomsHeader({ smallText, bigText }: Props) {
  return (
    <h2 className="flex flex-col my-1 text-primary">
      <span className="font-CourierPrime text-lg leading-[17px]">
        {smallText}
      </span>
      <span className="font-DelaGothicOne text-3xl leading-[17px]">
        {bigText}
      </span>
    </h2>
  );
}
