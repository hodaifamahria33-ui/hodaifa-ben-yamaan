export function PageBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[#fcfcfd]"
        style={{
          backgroundImage: [
            "radial-gradient(900px 500px at 15% 10%, rgba(255, 255, 255, 0.95), transparent 60%)",
            "radial-gradient(700px 500px at 85% 20%, rgba(248, 248, 252, 0.95), transparent 55%)",
            "radial-gradient(700px 520px at 50% 95%, rgba(244, 244, 248, 0.9), transparent 58%)",
          ].join(", "),
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.2]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </>
  );
}
