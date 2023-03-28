import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto md:px-8 max-w-[1440px]">{children}</div>;
}

export default Container;