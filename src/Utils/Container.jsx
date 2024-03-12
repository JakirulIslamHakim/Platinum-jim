const Container = ({ children, cssClass }) => {
  return <div className={`max-w-screen-2xl mx-auto px-3 lg::px-0  ${cssClass}`}>{children}</div>;
};

export default Container;
