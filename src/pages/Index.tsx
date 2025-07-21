import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Cross" className="text-emerald-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">АптекаБизнес</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#steps" className="text-gray-600 hover:text-emerald-600 transition-colors">Этапы</a>
              <a href="#benefits" className="text-gray-600 hover:text-emerald-600 transition-colors">Преимущества</a>
              <a href="#faq" className="text-gray-600 hover:text-emerald-600 transition-colors">Вопросы</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Весь процесс открытия аптечного бизнеса — 
                <span className="text-emerald-600"> на одной странице</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Получите пошаговое руководство по открытию аптеки с юридическими требованиями, 
                лицензированием и готовыми решениями для успешного старта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                  Начать первый этап
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
                  Консультация
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/img/37974851-55c3-42c0-9a2a-994db6ef96d3.jpg" 
                alt="Аптечный бизнес" 
                className="w-full max-w-lg mx-auto lg:mx-0 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Что сделать, чтобы открыть аптеку
            </h2>
            <p className="text-xl text-gray-600">
              Три ключевых этапа для законного запуска аптечного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" className="text-emerald-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  1. Зарегистрировать организацию или ИП
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Выберите правовую форму, подготовьте документы и зарегистрируйтесь в налоговой службе
                </CardDescription>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">
                  Начать этап 1
                  <Icon name="ExternalLink" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-emerald-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  2. Получить санитарно-эпидемиологическое заключение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Подготовьте помещение к проверке и получите разрешение от Роспотребнадзора
                </CardDescription>
                <Button variant="outline" className="w-full mt-6 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Этап 2
                  <Icon name="Lock" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" className="text-emerald-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  3. Получить лицензию на фармацевтическую деятельность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Соберите полный пакет документов и подайте заявление в Минздрав региона
                </CardDescription>
                <Button variant="outline" className="w-full mt-6 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Этап 3
                  <Icon name="Lock" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Преимущества аптечного бизнеса
            </h2>
            <p className="text-xl text-gray-600">
              Почему стоит инвестировать в аптечную сферу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="TrendingUp" className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Стабильный спрос</h3>
              <p className="text-gray-600">Потребность в лекарствах не зависит от экономических кризисов</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="DollarSign" className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Высокая рентабельность</h3>
              <p className="text-gray-600">Средняя рентабельность аптечного бизнеса 15-25%</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="Users" className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Социальная значимость</h3>
              <p className="text-gray-600">Вы помогаете людям заботиться о своем здоровье</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="BarChart" className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Рост рынка</h3>
              <p className="text-gray-600">Фармацевтический рынок растет на 3-5% ежегодно</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы об открытии аптеки
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы начинающих аптекарей
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-emerald-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-emerald-600">
                Сколько стоит открыть аптеку?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Стартовые инвестиции составляют от 2 до 5 млн рублей, включая аренду помещения, 
                ремонт, оборудование, первоначальный товарный запас и получение лицензий.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-emerald-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-emerald-600">
                Сколько времени занимает получение лицензии?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Процесс получения лицензии на фармацевтическую деятельность занимает от 3 до 6 месяцев, 
                в зависимости от региона и готовности документов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-emerald-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-emerald-600">
                Какие требования к помещению аптеки?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Помещение должно соответствовать санитарным нормам, иметь отдельный вход, 
                торговый зал не менее 18 кв.м, помещение для хранения и рецептурно-производственный отдел.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-emerald-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-emerald-600">
                Нужно ли фармацевтическое образование?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Владельцу аптеки необязательно иметь фармацевтическое образование, но заведующий аптекой 
                и провизоры должны иметь соответствующее образование и сертификаты.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Контакты для консультации
            </h2>
            <p className="text-xl text-gray-300">
              Получите персональную консультацию по открытию аптеки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Телефон</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                  <p className="text-gray-400 text-sm">Консультации с 9:00 до 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">info@aptekabiznes.ru</p>
                  <p className="text-gray-400 text-sm">Ответ в течение 2 часов</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Telegram</h3>
                  <p className="text-gray-300">@apteka_consultant</p>
                  <p className="text-gray-400 text-sm">Быстрые ответы в мессенджере</p>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Заказать консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="message">Вопрос</Label>
                  <Textarea id="message" placeholder="Опишите ваш вопрос..." rows={3} />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Cross" className="text-emerald-600" size={28} />
              <span className="text-xl font-bold text-white">АптекаБизнес</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 АптекаБизнес. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;