import { ReactNode } from "react";

export default function FormErrorMessage({ message }: { message?: ReactNode }) {
  if (!message) return null;
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
}
