interface DetailItemProps {
  title: string;
  children: React.ReactNode;
  colspan?: number | undefined;
}

function DetailItem({ title, children, colspan = undefined }: DetailItemProps) {
  return (
    <div className={colspan && colspan > 0 ? "lg:col-span-" + colspan : ""}>
      <span className="text-2xl font-semibold mb-2 block fancy primary-color">
        {title}
      </span>
      {children}
    </div>
  );
}

export default DetailItem;
