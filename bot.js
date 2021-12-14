const { Telegraf } = require('telegraf');

const bot = new Telegraf('5005405542:AAE6Tk-pnfvcbC4_RTBDpLv2EyFyNSYhArs');
const text = require('./const')

bot.help((ctx) => ctx.reply(text.commands));
// bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Whats up братишка '));
bot.hears('hii', (ctx) => ctx.reply('иди ты нахуй вы заебали уже'));

bot.start((ctx) =>
  ctx.reply(`Привет ${ctx.message.from.first_name} Чтобы получить домашнее задание нажми на /help  `,{
   
  })
);
                                     

bot.command('/Lesson1', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/01. Переменные, константы.zip' });
});

bot.command('/Lesson2', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/02. Методы работ с простыми типами данных.zip' });
});
bot.command('/Lesson3', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/03. Alert, Prompt, Confirm & Условные операторы Else If.zip' });
});

bot.command('/Lesson4', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/04. Git & GitHub.zip' });
});
bot.command('/Lesson5', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/05. Массивы и методы.zip' });
});

bot.command('/Lesson6', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/06. Жесктие методы массивов.zip' });
});
bot.command('/Lesson7', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/07. Объекты и методы.zip' });
});

bot.command('/Lesson8', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/08. Циклы по массивам и объектам.zip' });
});
bot.command('/Lesson9', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/09. Сложные циклы. Сравнение разных массивов и поиск ключей.zip' });
});

bot.command('/Lesson10', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/10. Функции и return.zip' });
});
bot.command('/Lesson11', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/11. Поиск, классы, атрибуты, события, массивы элементов.zip' });
});

bot.command('/Lesson12', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/12. Навигация по DOM.zip' });
});
bot.command('/Lesson13', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/13. Перетаскивание элементов Dragn Drop.zip' });
});

bot.command('/Lesson14', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/14. Создание элементов.zip' });
});
bot.command('/Lesson15', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/15. Клонирование элементов и контрольная работа.zip' });
});

bot.command('/Lesson16', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/16. Работа с формами, валидация, регулярные выражения.zip' });
});
bot.command('/Lesson17', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/17. Работа с формами 2. Добавление элементов и поиск элементов на странице.zip' });
});

bot.command('/Lesson18', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/18. Удаление и изменение элементов.zip' });
});
bot.command('/Lesson19', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/19. Axios Get запросы и вывод элементов на страницу. Добавление с фронтенда.zip' });
});

bot.command('/Lesson20', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/20. Axios Get. Удаление и изменение элементов.zip' });
});
bot.command('/Lesson21', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/21. NPM, Gulpfile и Gitignore.zip' });
});

bot.command('/Lesson22', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/22. Легкие анимации. Работа с меню, модальными окнами и owl-carousel.zip' });
});
bot.command('/Lesson23', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/23. Жесткие анимации по таймерам.zip' });
});

bot.command('/Lesson24', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/24. Работа с логикой веб-приложений. Сортировка товаров по категориям. Классная работа.zip' });
});
bot.command('/Lesson25', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/25. Post-запросы на сервер. Добавление элементов. Реактивное обновление.zip' });
});

bot.command('/Lesson26', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/26. Back Office. Patch & Put-запросы на сервер. Реактивное обновление страницы.zip' });
});
bot.command('/Lesson27', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/27. Back Office 2. Создаем преддипломную.zip' });
});

bot.command('/Lesson28', (ctx) => {
  return ctx.replyWithDocument({ source: './NEW 2021/28. Работа с логикой веб-приложений. Сортировка товаров по нескольким критериям.zip' });
});



bot.launch();
