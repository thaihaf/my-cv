interface TitleProps {
  title?: string;
}
export default function Title({ title }: TitleProps) {
  return (
    <div className="bg-gray-200 py-1 border-b-2 border-gray-400 font-bold uppercase text-xl w-full my-7">
      {title}
    </div>
  );
}
