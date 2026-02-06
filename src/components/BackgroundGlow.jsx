
export const BackgroundGlow = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="
        w-[400px] h-[400px] 
        sm:w-[600px] sm:h-[600px] 
        md:w-[700px] md:h-[700px] 
        lg:w-[900px] lg:h-[900px]
       bg-[radial-gradient(circle,hsla(var(--bg-circle)/0.40)_0%,transparent_70%)]
         blur-3xl animate-pulse">
        </div>
      </div>
    );
  };
  