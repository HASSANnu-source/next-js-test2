export interface Product {
  id: number;
  title: string;
  author: string;
  publisher: string;
  pages: number;
  price: number;
  discountPercent: number;
  description: string;
  rating: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "هابیت | The Hobbit",
    author: "J R R Tolkien",
    publisher: "نشر چشمه",
    pages: 310,
    price: 300_000,
    discountPercent: 0,
    description: "هابیت یکی از آثار برجسته جی.آر.آر. تالکین است که داستان سفر بیلبو بگینز، یک هابیت آرام‌گوش، را روایت می‌کند. این کتاب با ترکیب عناصر فانتزی، ماجراجویی و شخصیت‌پردازی استثنایی، یکی از بهترین رمان‌های فانتزی تاریخ محسوب می‌شود. داستان در دنیای خیالی میان‌ارض اتفاق می‌افتد و خواننده را به سفری جذاب و پر از ماجراجویی دعوت می‌کند.",
    rating: 4.8,
    image: "/products/The-Hobbit.jpg"
  },
  {
    id: 2,
    title: "ارباب حلقه ها | The Lord of the Rings",
    author: "J R R Tolkien",
    publisher: "نشر چشمه",
    pages: 420,
    price: 400_000,
    discountPercent: 20,
    description: "ارباب حلقه‌ها یکی از بزرگ‌ترین اثرات ادبیات فانتزی است که در سه جلد منتشر شده است. این اثر داستان جان و بدن فرودو بگینز، نوه بیلبو بگینز، را روایت می‌کند که مأموریت نابود کردن حلقه تاریکی را بر عهده دارد. تالکین با خلق دنیای پیچیده و غنی میان‌ارض، شخصیت‌های متنوع و زبان‌شناسی منحصر به فرد، ادبیات فانتزی را برای همیشه تغییر داد.",
    rating: 4.9,
    image: "/products/The-Lord-of-the-Rings-1.jpg"
  },
  {
    id: 3,
    title: "ارباب حلقه ها ۲ | The Lord of the Rings 2",
    author: "J R R Tolkien",
    publisher: "نشر چشمه",
    pages: 380,
    price: 500_000,
    discountPercent: 0,
    description: "این جلد دوم از سری ارباب حلقه‌ها به ادامه ماجراجویی فرودو و همراهانش در مأموریت نابود کردن حلقه تاریکی می‌پردازد. داستان پر از لحظات تنش‌برانگیز، نبردهای شجاعانه و توسعه شخصیت‌های پیچیده است. تالکین در این اثر به شگفتی‌های ادبی و فلسفی خود ادامه می‌دهد و خواننده را درگیر ماجراجویی بی‌نظیری می‌کند.",
    rating: 4.7,
    image: "/products/The-Lord-of-the-Rings-2.jpg"
  },
  {
    id: 4,
    title: "خورشید پدیدار میشود | Here Comes the Sun",
    author: "Joshua M. Greene",
    publisher: "نشر نو",
    pages: 295,
    price: 600_000,
    discountPercent: 25,
    description: "خورشید پدیدار می‌شود کتابی است درباره زندگی یهودیان در آلمان نازی و ماجراجویی‌های آن‌ها برای بقا. جاشوا ام. گرین با تحقیقات گسترده و مصاحبه با بقايا، داستان‌های واقعی و مؤثری را روایت کرده است. این کتاب نگاهی عمیق به تاریخ تاریک آلمان نازی و مقاومت انسانی در برابر ظلم دارد.",
    rating: 3.9,
    image: "/products/Here-Comes-the-Sun.webp"
  },
  {
    id: 5,
    title: "ما پناه خواهیم گرفت | We Will Be Shelter",
    author: "Andrea Gibson",
    publisher: "نشر فرهنگ معاصر",
    pages: 220,
    price: 700_000,
    discountPercent: 5,
    description: "ما پناه خواهیم گرفت مجموعه‌ای از شعرهای اندرا گیبسون است که به موضوعاتی مانند عشق، هویت جنسیتی، سیاست و اجتماع می‌پردازد. شعرهای این مجموعه پر از احساس و اندوه، امید و مقاومت هستند. گیبسون با زبانی صادقانه و تأثیرگذار، مخاطب را به تفکر درباره مسائل مهم امروزی دعوت می‌کند.",
    rating: 4.3,
    image: "/products/We-Will-Be-Shelter.webp"
  },
  {
    id: 6,
    title: "پروژه درود بر مریم | Project Hail Mary",
    author: "Andy Weir",
    publisher: "نشر نیلوفر",
    pages: 480,
    price: 800_000,
    discountPercent: 0,
    description: "پروژه درود بر مریم رمان علمی-تخیلی اندی ویر است که داستان یک دانشمند را روایت می‌کند که در فضا بیدار می‌شود و هیچ ایده‌ای از اینکه چگونه آنجا رفته ندارد. این کتاب پر از ماجراجویی‌های علمی، حل مسئله هوشمندانه و طنز است. ویر با ترکیب علم واقعی با داستان‌سرایی جذاب، اثری فوق‌العاده خلق کرده است.",
    rating: 4.3,
    image: "/products/Project-Hail-Mary.webp"
  }
];