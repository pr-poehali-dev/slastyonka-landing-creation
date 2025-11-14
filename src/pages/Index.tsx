import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы скоро с вами свяжемся!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🍰</span>
            <h1 className="text-2xl font-bold text-primary">Сластёнка</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-primary transition">Цены</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Контакты</a>
          </nav>
          <Button>Заказать</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Сладости, созданные<br />с любовью
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Авторские торты, пирожные и десерты в Иркутске.<br />
            Превращаем каждый праздник в незабываемое событие
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8">
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/9eca0ca4-7a48-464e-9833-893a19c907a9/files/24ca947d-ee53-402b-a56c-c74bb962554a.jpg"
              alt="Десерты Сластёнка"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-primary mb-6">О кондитерской</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Кондитерская "Сластёнка" работает в Иркутске с 2015 года. Мы создаём авторские десерты 
                из натуральных ингредиентов, без красителей и консервантов.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Каждый торт — это произведение искусства, созданное с душой и вниманием к деталям. 
                Мы воплощаем ваши мечты в сладкую реальность.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральные продукты</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/9eca0ca4-7a48-464e-9833-893a19c907a9/files/804adcb8-67ed-44e3-8126-0beebe92067b.jpg"
                alt="Интерьер кондитерской"
                className="rounded-3xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-primary text-center mb-12">Наши преимущества</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Award", title: "Премиальное качество", desc: "Используем только натуральные ингредиенты премиум-класса" },
              { icon: "Clock", title: "Быстрое изготовление", desc: "Готовим свежие торты за 24-48 часов" },
              { icon: "Heart", title: "Индивидуальный подход", desc: "Создаём дизайн специально под ваше мероприятие" },
              { icon: "ShieldCheck", title: "Гарантия качества", desc: "Уверены в своих изделиях на 100%" },
              { icon: "Truck", title: "Доставка по городу", desc: "Бережная доставка в удобное для вас время" },
              { icon: "Star", title: "Уникальные рецепты", desc: "Авторские десерты, которых нет больше нигде" }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3 text-center">{item.title}</h4>
                  <p className="text-muted-foreground text-center">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-primary text-center mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            От классических тортов до эксклюзивных десертов для особых случаев
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Cake", title: "Торты на заказ", desc: "Любого размера и дизайна" },
              { icon: "Cookie", title: "Пирожные", desc: "Эклеры, макарон, капкейки" },
              { icon: "Coffee", title: "Десерты", desc: "Чизкейки, тирамису, муссы" },
              { icon: "Gift", title: "Candy Bar", desc: "Сладкие столы для мероприятий" }
            ].map((service, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon} size={40} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-primary text-center mb-12">Тарифы и цены</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Базовый", 
                price: "от 2 500 ₽", 
                features: ["Вес до 2 кг", "Классический дизайн", "3 вкуса на выбор", "Готовность 48 часов"],
                popular: false
              },
              { 
                name: "Премиум", 
                price: "от 4 500 ₽", 
                features: ["Вес до 3 кг", "Индивидуальный дизайн", "10+ вкусов", "Готовность 24 часа", "Бесплатная доставка"],
                popular: true
              },
              { 
                name: "Эксклюзив", 
                price: "от 8 000 ₽", 
                features: ["Любой вес", "Уникальный дизайн", "Любые вкусы", "Срочное изготовление", "Доставка + установка"],
                popular: false
              }
            ].map((tariff, idx) => (
              <Card key={idx} className={`relative ${tariff.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="pt-8 pb-8">
                  <h4 className="text-2xl font-bold text-primary text-center mb-4">{tariff.name}</h4>
                  <div className="text-4xl font-bold text-center mb-6">{tariff.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tariff.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tariff.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-accent to-secondary p-12 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold text-primary mb-4">Готовы сделать заказ?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Оставьте заявку и мы свяжемся с вами в течение 30 минут
            </p>
            <Button size="lg" className="text-lg px-12">
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-6">Форма заявки</h3>
              <p className="text-muted-foreground mb-8">
                Заполните форму и наш менеджер свяжется с вами для уточнения деталей заказа
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий к заказу</label>
                  <Textarea 
                    placeholder="Расскажите о желаемом торте, весе, дате мероприятия..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/9eca0ca4-7a48-464e-9833-893a19c907a9/files/ac24dbf2-2640-4efb-9129-0783d984e400.jpg"
                alt="Наши десерты"
                className="rounded-3xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-primary text-center mb-12">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна Петрова", rating: 5, text: "Заказывала торт на свадьбу. Получился невероятно красивым и вкусным! Гости были в восторге. Спасибо огромное команде Сластёнки!" },
              { name: "Дмитрий Соколов", rating: 5, text: "Отличная кондитерская! Торт на день рождения дочери превзошёл все ожидания. Креативный дизайн и натуральный вкус." },
              { name: "Екатерина Волкова", rating: 5, text: "Регулярно заказываю десерты для корпоративов. Всегда свежие, красивые и очень вкусные. Рекомендую!" }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold text-primary">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl font-bold text-primary text-center mb-12">Частые вопросы</h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-lg font-semibold">
                За какое время нужно делать заказ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Рекомендуем делать заказ минимум за 2-3 дня. Для сложных и крупных заказов — за неделю. 
                Есть возможность срочного изготовления за 24 часа (доплата 30%).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-lg font-semibold">
                Доставляете ли вы торты?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, осуществляем доставку по Иркутску. Стоимость от 300 рублей в зависимости от района. 
                При заказе от 5000 рублей доставка бесплатная.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли заказать торт по своему эскизу?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Конечно! Мы воплотим любую вашу идею. Присылайте эскиз или фото желаемого торта, 
                и наши кондитеры создадут для вас уникальный десерт.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-lg font-semibold">
                Какие вкусы тортов у вас есть?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                У нас более 15 вкусов: классический бисквит, шоколадный, красный бархат, медовик, 
                Наполеон, фруктовые муссы, чизкейк и многое другое. Также можем создать уникальный вкус по вашему желанию.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-lg font-semibold">
                Есть ли у вас диетические или веганские варианты?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы делаем торты без сахара, без глютена и веганские варианты. 
                Обязательно укажите это при заказе.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍰</span>
                <h4 className="text-2xl font-bold">Сластёнка</h4>
              </div>
              <p className="opacity-90">
                Кондитерская в Иркутске с 2015 года. Создаём сладкие шедевры для ваших праздников.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-4">Навигация</h5>
              <ul className="space-y-2 opacity-90">
                <li><a href="#about" className="hover:opacity-100 transition">О нас</a></li>
                <li><a href="#services" className="hover:opacity-100 transition">Услуги</a></li>
                <li><a href="#prices" className="hover:opacity-100 transition">Цены</a></li>
                <li><a href="#reviews" className="hover:opacity-100 transition">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-4">Контакты</h5>
              <ul className="space-y-2 opacity-90">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (3952) 555-123</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@slastenka-irk.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Иркутск, ул. Ленина, 1</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-4">Режим работы</h5>
              <ul className="space-y-2 opacity-90">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб-Вс: 10:00 - 18:00</li>
              </ul>
              <div className="flex gap-3 mt-6">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-75">
            <p>© 2024 Кондитерская "Сластёнка". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
