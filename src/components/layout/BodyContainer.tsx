interface BodyContainerProps {
  children: React.ReactNode;
}

function BodyContainer({ children }: BodyContainerProps) {
  return (
    <div className="body-grid grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {children}
    </div>
  );
}

export default BodyContainer;
