export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <img
        src="/brand/robot-body-500x500.webp"
        alt=""
        className="h-40 w-40 animate-[spin_6s_linear_infinite] select-none"
        draggable={false}
      />
      <p className="mt-6 font-heading text-lg tracking-wide">Loading...</p>

      <a
        href="https://www.magnific.com/free-vector/cartoon-style-robot-vectorart_125886727.htm#fromView=search&page=1&position=2&uuid=55b9200e-295b-40c4-82a3-68f9da3bf172&query=cute+robot"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground hover:text-foreground"
      >
        Image by juicy_fish on Magnific
      </a>
    </div>
  );
}
