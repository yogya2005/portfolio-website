const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
  <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col items-center lg:items-start">
      <h1>Yogya Agrawal</h1>
        <span>
            Student and Research Assistant
        </span>
        <p>
            {HERO_CONTENT}
        </p>
    </div>
    </div>
  </div>
</div>
  );
};

export default Hero;