"use client";

import { SessionProvider, sessionProvider } from "next-auth/react";

const Provider = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
