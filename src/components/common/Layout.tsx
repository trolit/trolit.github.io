export function Layout({ children }: any) {
  return (
    <div className='h-full bg-fixed bg-no-repeat bg-content-page'>
      <div className={`grid w-11/12 sm:w-9/12 gap-4 py-4 mx-auto shadow-xl bg-neutral-50 dark:bg-gray-950 text-pretty`}>
        {children}
      </div>
    </div>
  );
}
