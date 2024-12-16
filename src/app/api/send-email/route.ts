import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Получаем данные из тела запроса
    const { name, phone } = await req.json();

    // Проверяем наличие всех данных
    if (!name || !phone) {
      return NextResponse.json(
        { message: "Поля 'Имя' и 'Телефон' обязательны." },
        { status: 400 }
      );
    }

    // Настройка транспортера Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Используем Gmail
      auth: {
        user: "vladislavshishkin123@gmail.com", // Ваш email
        pass: "fiql pcoy vmoz nzhm", // Пароль приложения Gmail
      },
    });

    // Настройка письма
    const mailOptions = {
      from: "vladislavshishkin123@gmail.com", // Отправитель
      to: "status.house.pro@gmail.com", // Получатель
      subject: "Новая заявка на обратный звонок",
      text: `Имя: ${name}\nТелефон: ${phone}`, // Текст письма
    };

    // Отправка письма
    const info = await transporter.sendMail(mailOptions);

    // Возвращаем успешный ответ
    return NextResponse.json({ message: "Письмо успешно отправлено." });
  } catch (error) {
    console.error("Ошибка при отправке письма: ", error);
    return NextResponse.json(
      { message: "Ошибка при отправке письма." },
      { status: 500 }
    );
  }
}
