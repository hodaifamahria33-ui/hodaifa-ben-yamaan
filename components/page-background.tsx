export function PageBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[#07060b]"
        style={{
          backgroundImage: [
            "radial-gradient(900px 500px at 15% 10%, rgba(124, 92, 255, 0.45), transparent 60%)",
            "radial-gradient(700px 500px at 85% 20%, rgba(255, 61, 107, 0.35), transparent 55%)",
            "radial-gradient(600px 500px at 50% 95%, rgba(46, 230, 192, 0.18), transparent 55%)",
          ].join(", "),
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.22]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </>
  );
}
