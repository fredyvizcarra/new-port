const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <div>
          <img
            src="/public/assets/images/fv-white.png"
            alt="fredy logo"
            className="w-16"
          />
        </div>

        <div class="flex space-x-2 justify-center items-center bg-white  dark:invert">
          <span class="sr-only">Loading...</span>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
