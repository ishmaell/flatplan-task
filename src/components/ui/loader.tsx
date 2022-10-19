const CircleLoader = ({ children }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="circle-loader w-12 h-12 border-3 border-primary-010"></div>
      {children}
    </div>
  );
};

export { CircleLoader };
