import Header from "./Header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      <p>Howdy from Page page</p>
      {children}
    </>
  );
}
