import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const TELEGRAM_TOKEN = "8455385482:AAGjIgkRksbWSBFeTo_gLZuh1TupgbpDk4Y";
  const CHAT_ID = 6653089120; // Sizning Telegram ID yoki kanal ID

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Telegram username tekshiruvi
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
    <section id="contact" className="relative py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="block mb-6 text-xs tracking-[0.35em] uppercase text-foreground/50">
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Keling, <br />
            <span className="text-foreground/60">suhbatlashamiz</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/70">
            Loyiha, hamkorlik yoki shunchaki salomlashish uchun bemalol yozishingiz mumkin.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info panel */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Telegram</h3>
              <a
                href="https://t.me/developsystem"
                className="text-lg text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @developsystem
              </a>
            </div>

            <p className="text-foreground/60 text-lg max-w-sm">
              Odatda xabarlarga tez javob beraman. Qisqa va aniq yozsangiz yetarli 🙂
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-background/70 backdrop-blur-xl border border-border/50 rounded-3xl p-10 shadow-lg space-y-6"
          >
            <input
              type="text"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-primary transition"
            />

            <input
              type="text"
              placeholder="Telegram username (masalan: @username)"
              value={telegramUsername}
              onChange={(e) => setTelegramUsername(e.target.value)}
              required
              className="w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-primary transition"
            />

            <textarea
              rows={5}
              placeholder="Xabaringiz..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-transparent border-b border-border/60 py-3 outline-none resize-none focus:border-primary transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:-translate-y-1 disabled:opacity-50"
            >
              {loading ? "Yuborilmoqda..." : "Xabar yuborish →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}