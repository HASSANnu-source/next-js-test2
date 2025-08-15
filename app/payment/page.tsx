export const metadata = {
  title: 'پرداخت',
};

export default function Payment() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center  justify-center p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-white font-serif m-8 text-center">
        YOU GOT RICK ROLLED
      </h1>
      <div className="scale-50 origin-top max-w-4xl w-full rounded-xl overflow-hidden">
        <video
          className="w-full h-auto object-cover"
          autoPlay
          playsInline
          loop
          controls={false}
          preload="auto"
        >
          <source src="/payment.mp4" type="video/mp4" />
          مرورگر شما از تگ ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
    </div>
  );
}