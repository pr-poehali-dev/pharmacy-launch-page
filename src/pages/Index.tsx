import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-lg bg-white/70 border-b border-violet-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="Pill" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                PharmaTech
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#steps" className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group">
                Этапы
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group">
                Преимущества
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#faq" className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group">
                Контакты
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-cyan-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 text-sm font-medium">
                  🚀 Новое поколение фармбизнеса
                </Badge>
                <h1 className="text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Твоя аптека</span>
                  <br />
                  <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    за 3 шага
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Современная платформа для запуска аптечного бизнеса. 
                  Полное сопровождение от идеи до первых продаж с ИИ-ассистентом.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Запустить аптеку
                  <Icon name="Sparkles" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-violet-200 text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Демо платформы
                  <Icon name="Play" className="ml-2" size={20} />
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Запущенных аптек</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Успешных запусков</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">45 дней</div>
                  <div className="text-sm text-gray-600">Средний срок</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl rotate-6 opacity-20"></div>
              <img 
                src="/img/37974851-55c3-42c0-9a2a-994db6ef96d3.jpg" 
                alt="Современная аптека" 
                className="relative w-full rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Лицензия получена</div>
                    <div className="text-sm text-gray-600">за 30 дней</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-violet-100 text-violet-700 px-4 py-2 text-sm font-medium mb-4">
              Простой процесс
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Как открыть аптеку
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Автоматизированный процесс с ИИ-помощником и персональным менеджером
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-violet-50/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-500"></div>
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Building" className="text-white" size={36} />
                </div>
                <Badge className="bg-violet-100 text-violet-700 text-xs font-medium mb-3">Этап 1</Badge>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-violet-900 transition-colors">
                  Регистрация бизнеса
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 text-center leading-relaxed mb-6">
                  ИП или ООО — выбираем оптимальную форму для вашего случая
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold shadow-lg">
                  Начать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-cyan-50/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Shield" className="text-white" size={36} />
                </div>
                <Badge className="bg-cyan-100 text-cyan-700 text-xs font-medium mb-3">Этап 2</Badge>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-cyan-900 transition-colors">
                  СЭС заключение
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 text-center leading-relaxed mb-6">
                  Подготовка помещения и получение санитарного разрешения
                </CardDescription>
                <Button variant="outline" className="w-full border-2 border-cyan-200 text-cyan-700 hover:bg-cyan-50 font-semibold">
                  Скоро доступно
                  <Icon name="Clock" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-emerald-50/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 to-green-600/0 group-hover:from-emerald-600/5 group-hover:to-green-600/5 transition-all duration-500"></div>
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Award" className="text-white" size={36} />
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 text-xs font-medium mb-3">Этап 3</Badge>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-900 transition-colors">
                  Фарм лицензия
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 text-center leading-relaxed mb-6">
                  Получение лицензии на фармацевтическую деятельность
                </CardDescription>
                <Button variant="outline" className="w-full border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-semibold">
                  Скоро доступно
                  <Icon name="Clock" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium mb-4">
              Почему выбирают нас
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Преимущества платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные технологии для успешного фармбизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center space-y-6 p-6 rounded-2xl hover:bg-white/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Zap" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">ИИ-Ассистент</h3>
              <p className="text-gray-600">Умный помощник ведет вас через весь процесс</p>
            </div>

            <div className="group text-center space-y-6 p-6 rounded-2xl hover:bg-white/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Rocket" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Быстрый запуск</h3>
              <p className="text-gray-600">Средний срок открытия всего 45 дней</p>
            </div>

            <div className="group text-center space-y-6 p-6 rounded-2xl hover:bg-white/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="ShieldCheck" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Гарантии</h3>
              <p className="text-gray-600">98% успешных запусков или возврат средств</p>
            </div>

            <div className="group text-center space-y-6 p-6 rounded-2xl hover:bg-white/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="HeadphonesIcon" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">24/7 Поддержка</h3>
              <p className="text-gray-600">Персональный менеджер на всех этапах</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium mb-4">
              Частые вопросы
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о запуске аптеки
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-violet-100 rounded-2xl px-8 bg-gradient-to-r from-violet-50/50 to-purple-50/50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-violet-700 transition-colors">
                💰 Сколько стоит запустить аптеку?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                От 2 до 5 млн рублей включая все затраты: помещение, оборудование, лицензии, 
                товарный запас. Мы поможем оптимизировать бюджет.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-cyan-100 rounded-2xl px-8 bg-gradient-to-r from-cyan-50/50 to-blue-50/50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-cyan-700 transition-colors">
                ⏰ За сколько времени можно открыть?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                С нашей платформой средний срок составляет 45 дней вместо стандартных 3-6 месяцев. 
                ИИ-ассистент автоматизирует большинство процессов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-emerald-100 rounded-2xl px-8 bg-gradient-to-r from-emerald-50/50 to-green-50/50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-emerald-700 transition-colors">
                🏢 Какие требования к помещению?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Торговый зал от 18 кв.м, отдельный вход, соответствие СанПиН. 
                Наши эксперты проведут аудит любого помещения бесплатно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-orange-100 rounded-2xl px-8 bg-gradient-to-r from-orange-50/50 to-red-50/50">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-700 transition-colors">
                🎓 Нужно ли фармацевтическое образование?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Владельцу — нет, но в команде должен быть провизор. 
                Мы поможем найти квалифицированных специалистов.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-violet-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white px-4 py-2 text-sm font-medium mb-4">
              Связаться с нами
            </Badge>
            <h2 className="text-5xl font-bold text-white mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-300">
              Получите персональную консультацию и план запуска
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Telegram-бот</h3>
                  <p className="text-gray-300">@PharmaTechBot</p>
                  <p className="text-gray-400 text-sm">Мгновенные ответы 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Горячая линия</h3>
                  <p className="text-gray-300">+7 (495) 777-77-77</p>
                  <p className="text-gray-400 text-sm">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">hello@pharmatech.pro</p>
                  <p className="text-gray-400 text-sm">Ответ в течение 30 минут</p>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Бесплатная консультация</CardTitle>
                <CardDescription className="text-gray-300">
                  Оставьте заявку и получите персональный план запуска
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших планах..." rows={3} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                </div>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold shadow-xl">
                  Получить консультацию
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="Pill" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                PharmaTech
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 PharmaTech. Будущее фармацевтики уже здесь.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;