import Link from "next/link";

export const MainLogo: React.FC = () => {
  return (
    <Link href="/">
      <img src="/logo.png" alt="logo" className="h-17 w-17 bg-transparent" />
    </Link>
  );
};
