export function Navbar(props: { title?: string }) {
  return (
    <>
      <header className="flex w-full flex-row items-center justify-center align-middle">
      <div className="flex h-16 items-center justify-between bg-[#333333] px-16 w-[50%] mt-3 rounded-3xl ">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/tauri.svg" height={"20px"} width={"20px"} alt="" />
            <span className="font-sans text-lg font-bold text-gray-50">
              Pictopy
          <div className="flex items-center gap-4">
            <span className="font-sans text-lg font-medium text-gray-50">
              Welcome {props.title || 'User'}
            </span>
          </div>
      </header>
    </>
  );
}
