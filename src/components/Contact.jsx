import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const TELEGRAM_TOKEN = "8455385482:AAGjIgkRksbWSBFeTo_gLZuh1TupgbpDk4Y";
  const CHAT_ID = 6653089120;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telegramRegex = /^@([a-zA-Z0-9_]{5,32})$/;
    if (!telegramRegex.test(telegramUsername)) {
      alert("Iltimos, to‘g‘ri Telegram username kiriting (masalan: @username).");
      return;
    }

    setLoading(true);

    try {
      const text = `Ism: ${name}\nTelegram: ${telegramUsername}\nXabar: ${message}`;

      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text }),
        }
      );

      const data = await res.json();

      if (data.ok) {
        alert("Xabaringiz yuborildi ✅");
        setName("");
        setTelegramUsername("");
        setMessage("");
      } else {
        alert("Xato yuz berdi ❌");
        console.error(data);
      }
    } catch (err) {
      alert("Xato yuz berdi ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-site-gradient dark:bg-site-gradient"
    >
      <div className="relative container mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-24 text-center md:text-left">
          <span className="block mb-6 text-xs tracking-[0.35em] uppercase 
            text-gray-500 dark:text-violet-300 font-medium">
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight 
            text-gray-900 dark:text-white">
            Keling, <br />
            <span className="text-gray-500 dark:text-slate-400">suhbatlashamiz</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-slate-400">
            Loyiha, hamkorlik yoki shunchaki salomlashish uchun bemalol yozishingiz mumkin.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Info panel */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Telegram
              </h3>
              <a
                href="https://t.me/developsystem"
                className="text-lg text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @developsystem
              </a>
            </div>
            <p className="text-gray-700 dark:text-slate-400 text-lg max-w-sm">
              Odatda xabarlarga tez javob beraman. Qisqa va aniq yozsangiz yetarli 🙂
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-white/5 backdrop-blur-2xl 
              border border-gray-200 dark:border-white/10 
              rounded-3xl p-10 shadow-lg dark:shadow-2xl space-y-8"
          >
            <div className="space-y-8">
              <input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 
                  py-4 text-lg 
                  text-gray-900 dark:text-white 
                  placeholder:text-gray-500 dark:placeholder:text-slate-500 
                  focus:border-violet-600 dark:focus:border-violet-400 
                  outline-none transition-colors"
              />

              <input
                type="text"
                placeholder="Telegram username (masalan: @username)"
                value={telegramUsername}
                onChange={(e) => setTelegramUsername(e.target.value)}
                required
                className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 
                  py-4 text-lg 
                  text-gray-900 dark:text-white 
                  placeholder:text-gray-500 dark:placeholder:text-slate-500 
                  focus:border-violet-600 dark:focus:border-violet-400 
                  outline-none transition-colors"
              />

              <textarea
                rows={5}
                placeholder="Xabaringiz..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 
                  py-4 text-lg 
                  text-gray-900 dark:text-white 
                  placeholder:text-gray-500 dark:placeholder:text-slate-500 
                  resize-none focus:border-violet-600 dark:focus:border-violet-400 
                  outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full py-4 rounded-2xl 
                bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500
                text-white font-semibold transition-all 
                hover:-translate-y-1 active:scale-[0.98] 
                disabled:opacity-70 shadow-lg shadow-violet-500/30"
            >
              {loading ? "Yuborilmoqda..." : "Xabar yuborish →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}