interface DetailItemProps {
  title: string;
  children: React.ReactNode;
  colspan?: number | undefined;
}

function DetailItem({ title, children, colspan = undefined }: DetailItemProps) {
  return (
    <div className={colspan && colspan > 0 ? "col-span-" + colspan : ""}>
      <span className="text-xl font-semibold mb-2 block">{title}</span>
      {children}
    </div>
  );
}

export default DetailItem;
