import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      {/* Header */}
      <header className="bg-luxury-black/95 backdrop-blur-sm sticky top-0 z-50 border-b border-luxury-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-8 w-8 text-luxury-gold" />
              <h1
                className="text-2xl font-bold luxury-text-gradient"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                INFLUENCE BEAUTY
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-luxury-gold transition-colors"
              >
                Главная
              </a>
              <a
                href="#new"
                className="hover:text-luxury-gold transition-colors"
              >
                Новинки
              </a>
              <a
                href="#bestsellers"
                className="hover:text-luxury-gold transition-colors"
              >
                Бестселлеры
              </a>
              <a
                href="#consultation"
                className="hover:text-luxury-gold transition-colors"
              >
                Консультация
              </a>
              <a
                href="#payment"
                className="hover:text-luxury-gold transition-colors"
              >
                Оплата
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Icon
                name="Search"
                className="h-6 w-6 hover:text-luxury-gold cursor-pointer transition-colors"
              />
              <Icon
                name="User"
                className="h-6 w-6 hover:text-luxury-gold cursor-pointer transition-colors"
              />
              <Icon
                name="ShoppingBag"
                className="h-6 w-6 hover:text-luxury-gold cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2
            className="text-6xl md:text-8xl font-light mb-6 luxury-text-gradient"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Роскошь
          </h2>
          <p
            className="text-xl md:text-2xl mb-8 text-luxury-pearl/90 max-w-2xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Персональный подход к красоте. Эксклюзивная косметика для тех, кто
            ценит совершенство.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="luxury-gradient hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-3 text-lg">
              Консультация эксперта
            </Button>
            <Button
              variant="outline"
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 py-3 text-lg"
            >
              Каталог
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="h-8 w-8 text-luxury-gold" />
        </div>
      </section>

      {/* New Products Section */}
      <section id="new" className="py-20 bg-luxury-pearl text-luxury-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3
              className="text-4xl md:text-5xl font-light mb-4 luxury-text-gradient"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Новинки
            </h3>
            <p className="text-xl text-luxury-charcoal/80 max-w-2xl mx-auto">
              Откройте для себя последние инновации в мире luxury-косметики
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/img/96005861-8033-45e0-a7bb-3f962cbd987c.jpg",
                title: "Золотая помада Premium",
                price: "15,000 ₽",
                description: "Эксклюзивная формула с частицами золота",
              },
              {
                image: "/img/9d43e634-05fc-406a-a44b-b15d4dac6838.jpg",
                title: "Сыворотка молодости",
                price: "25,000 ₽",
                description: "Интенсивное восстановление кожи",
              },
              {
                image: "/img/8d2837ae-3827-49af-a7b6-2803e6764975.jpg",
                title: "Палетка теней Luxury",
                price: "18,000 ₽",
                description: "12 оттенков для создания идеального образа",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 animate-scale-in border-luxury-gold/20"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {product.title}
                    </h4>
                    <p className="text-luxury-charcoal/70 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold luxury-text-gradient">
                        {product.price}
                      </span>
                      <Button className="luxury-gradient hover:bg-luxury-gold-dark text-luxury-black">
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section id="bestsellers" className="py-20 bg-luxury-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3
              className="text-4xl md:text-5xl font-light mb-4 luxury-text-gradient"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Бестселлеры
            </h3>
            <p className="text-xl text-luxury-pearl/80 max-w-2xl mx-auto">
              Самые популярные продукты среди наших клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Крем для лица Premium", price: "12,000 ₽", rating: 5 },
              { name: "Тушь для ресниц Gold", price: "8,000 ₽", rating: 5 },
              { name: "Пудра компактная Luxury", price: "10,000 ₽", rating: 5 },
              { name: "Лосьон для тела Silk", price: "15,000 ₽", rating: 5 },
            ].map((product, index) => (
              <Card
                key={index}
                className="bg-luxury-black/50 border-luxury-gold/20 hover:bg-luxury-black/70 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Star" className="h-8 w-8 text-luxury-black" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-luxury-pearl">
                    {product.name}
                  </h4>
                  <div className="flex justify-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="h-4 w-4 text-luxury-gold fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-xl font-bold luxury-text-gradient mb-4">
                    {product.price}
                  </p>
                  <Button
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black w-full"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section
        id="consultation"
        className="py-20 bg-luxury-pearl text-luxury-black"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3
                className="text-4xl md:text-5xl font-light mb-4 luxury-text-gradient"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Персональная консультация
              </h3>
              <p className="text-xl text-luxury-charcoal/80 max-w-2xl mx-auto">
                Получите индивидуальные рекомендации от наших экспертов красоты
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="h-6 w-6 text-luxury-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Анализ типа кожи
                      </h4>
                      <p className="text-luxury-charcoal/70">
                        Определение индивидуальных особенностей вашей кожи
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="Palette"
                        className="h-6 w-6 text-luxury-black"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Подбор цветов
                      </h4>
                      <p className="text-luxury-charcoal/70">
                        Создание персональной палитры оттенков
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="Calendar"
                        className="h-6 w-6 text-luxury-black"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Программа ухода
                      </h4>
                      <p className="text-luxury-charcoal/70">
                        Разработка индивидуального режима красоты
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="border-luxury-gold/20">
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-semibold mb-6 text-center">
                      Записаться на консультацию
                    </h4>
                    <form className="space-y-4">
                      <div>
                        <Input
                          placeholder="Ваше имя"
                          className="border-luxury-gold/20"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Телефон"
                          className="border-luxury-gold/20"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Email"
                          className="border-luxury-gold/20"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Расскажите о ваших потребностях..."
                          className="border-luxury-gold/20"
                        />
                      </div>
                      <Button className="luxury-gradient hover:bg-luxury-gold-dark text-luxury-black w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3
                className="text-4xl md:text-5xl font-light mb-4 luxury-text-gradient"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Оплата и доставка
              </h3>
              <p className="text-xl text-luxury-pearl/80 max-w-2xl mx-auto">
                Удобные способы оплаты и премиальная доставка
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-luxury-charcoal/50 border-luxury-gold/20">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="CreditCard"
                    className="h-12 w-12 text-luxury-gold mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-4 text-luxury-pearl">
                    Способы оплаты
                  </h4>
                  <ul className="text-luxury-pearl/70 space-y-2">
                    <li>• Банковские карты</li>
                    <li>• Онлайн-переводы</li>
                    <li>• Криптовалюты</li>
                    <li>• Рассрочка 0%</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-luxury-charcoal/50 border-luxury-gold/20">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Truck"
                    className="h-12 w-12 text-luxury-gold mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-4 text-luxury-pearl">
                    Доставка
                  </h4>
                  <ul className="text-luxury-pearl/70 space-y-2">
                    <li>• Курьер в день заказа</li>
                    <li>• Самовывоз из бутика</li>
                    <li>• Международная доставка</li>
                    <li>• Бесплатно от 10,000 ₽</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-luxury-charcoal/50 border-luxury-gold/20">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Shield"
                    className="h-12 w-12 text-luxury-gold mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-4 text-luxury-pearl">
                    Гарантии
                  </h4>
                  <ul className="text-luxury-pearl/70 space-y-2">
                    <li>• Возврат 30 дней</li>
                    <li>• Сертификат качества</li>
                    <li>• Страховка товара</li>
                    <li>• Техподдержка 24/7</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black border-t border-luxury-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" className="h-6 w-6 text-luxury-gold" />
                <h4 className="text-xl font-bold luxury-text-gradient">
                  INFLUENCE BEAUTY
                </h4>
              </div>
              <p className="text-luxury-pearl/70">
                Роскошная косметика с персональным подходом к каждому клиенту
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-luxury-pearl">
                Каталог
              </h5>
              <ul className="space-y-2 text-luxury-pearl/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Новинки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Бестселлеры
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Уход за кожей
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Декоративная косметика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-luxury-pearl">
                Сервис
              </h5>
              <ul className="space-y-2 text-luxury-pearl/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Консультация
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Возврат
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-luxury-pearl">
                Контакты
              </h5>
              <div className="space-y-2 text-luxury-pearl/70">
                <p>+7 (495) 123-45-67</p>
                <p>info@influencebeauty.ru</p>
                <p>Москва, Тверская 1</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Icon
                  name="Instagram"
                  className="h-6 w-6 text-luxury-gold hover:text-luxury-gold-light cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  className="h-6 w-6 text-luxury-gold hover:text-luxury-gold-light cursor-pointer transition-colors"
                />
                <Icon
                  name="Twitter"
                  className="h-6 w-6 text-luxury-gold hover:text-luxury-gold-light cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-luxury-gold/20 mt-8 pt-8 text-center text-luxury-pearl/70">
            <p>&copy; 2024 INFLUENCE BEAUTY. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
