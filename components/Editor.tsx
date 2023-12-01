import Designer from './Designer';

function Editor() {
  return (
    <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent">
      <Designer />
    </div>
  );
}

export default Editor;
