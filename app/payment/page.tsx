export const metadata = {
  title: 'پرداخت',
};

export default function Payment() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <video
          className="w-full h-auto"
          autoPlay
          playsInline
          loop
          controls={false}
        >
          <source src="/Rick-Roll.mp4" type="video/mp4" />
          مرورگر شما از تگ ویدیو پشتیبانی نمی‌کنه.
        </video>
      </div>
    </div>
  );
}