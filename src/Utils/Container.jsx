const Container = ({ children, cssClass }) => {
  return <div className={`max-w-7xl mx-auto px-3 md:px-0 md:0 ${cssClass}`}>{children}</div>;
};

export default Container;
